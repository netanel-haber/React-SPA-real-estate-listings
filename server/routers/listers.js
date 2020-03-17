const listersRouter = require('express').Router();
const { validateKeys, validateKeysExact } = require('../middleware/validateKeys');
const { genSalt, genHash } = require('../utilities/hash_salt');
const { genToken } = require('../utilities/jwt');

const { isValidPassword } = require('../validation/signup');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const { Lister } = require('../../db/mongo/index');




listersRouter.get('/listers/:id', async function getIndividualLister(req, res) {
    res.json(await Lister.findById(req.params.id));
})


listersRouter.post('/listers/logout', auth, validateKeysExact, async function logout(req, res) {
    try {
        const user = await Lister.findById(req.decoded.payload._id);
        user.tokens = user.tokens.filter(token => token !== req.token);
        user.save();
        res.send();
    }
    catch (ex) {
        console.log(ex);
        res.status(500).send();
    }
});


listersRouter.post('/listers/login', validateKeysExact, async function login(req, res) {
    try {
        const { password, email } = req.body;
        const user = await Lister.findOne({ email });
        const { salt, hash, _id } = user;
        if (!genHash(password + salt) === hash)
            return res.status(404).send({ error: "could not authenticate." });
        const token = await genToken({ _id }, "15m");
        user.tokens = [...user.tokens, token];
        await user.save();
        res.status(200).json({ token })
    }
    catch (ex) {
        console.log(ex);
        res.status(500).send();
    }
});


listersRouter.post('/listers/signup', validateKeys, async function signup(req, res) {
    try {
        const { password, email } = req.body;
        if (!password || !email)
            return res.status(403).json({ required: "password, email" })
        const checkPass = isValidPassword(password);
        if (checkPass !== true)
            return res.status(403).json({ password: checkPass })
        const salt = genSalt();
        const hash = genHash(password + salt);
        const _id = mongoose.Types.ObjectId();
        const token = await genToken({ _id }, "15m");
        await new Lister({ _id, salt, hash, ...req.body, tokens: [token] }).save();
        res.status(201).json({ token });
    }
    catch (ex) {
        if (ex.errors)
            res.status(403).json(Object.fromEntries(Object.values(ex.errors).map(({ message, path }) => ([path, message]))))
        return res.status(500).send();
    }
});


module.exports = listersRouter;