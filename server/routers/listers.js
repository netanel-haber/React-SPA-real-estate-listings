const listersRouter = require('express').Router();
const { validateKeys, validateKeysExact } = require('../middleware/validateKeys');
const { genSalt, genHash } = require('../utilities/hash_salt');
const { genToken } = require('../utilities/jwt');

const { isValidPassword } = require('../validation/signup');
const mongoose = require('mongoose');
const auth = require('../middleware/auth');
const { Lister } = require('../../db/mongo/index');

const sessionTime = "15m";



listersRouter
    .patch('/listers/refresh-token', auth, validateKeysExact, async function refreshToken(req, res) {
        try {
            const newToken = await genToken({ _id: req.decoded.payload._id }, sessionTime);
            await Lister.updateOne({ _id: req.decoded.payload._id }, { "$push": { "tokens": newToken } })
            res.json({ newToken });
        }
        catch (ex) {
            console.log(ex);
            res.status(500).end();
        }
    })
    .patch('/listers/logout', auth, validateKeysExact, async function logout(req, res) {
        try {
            await Lister.updateOne({ _id: req.decoded.payload._id }, { "$pull": { "tokens": req.token } })
            res.end();
        }
        catch (ex) {
            console.log(ex);
            res.status(500).end();
        }
    })


    .get('/listers/me', auth, async function getIndividualLister(req, res) {
        res.json(await Lister.findById(req.decoded.payload._id));
    })
    .get('/listers/logged-in', auth, async function isLoggedIn(req, res) {
        res.end();
    })
    .get('/listers/:id', async function getIndividualLister(req, res) {
        res.json(await Lister.findById(req.params.id, 'name email phoneNumber'));
    })



    .post('/listers/me/update', auth, async function updateListerDetails(req, res) {

    })
    .post('/listers/login', validateKeysExact, async function login(req, res) {
        try {
            const { password, email } = req.body;
            const user = await Lister.findOne({ email });
            if (!user)
                return res.status(400).end();
            const { salt, hash, _id } = user;
            if (!(genHash(password + salt) === hash))
                return res.status(400).end();
            const token = await genToken({ _id }, sessionTime);
            user.tokens = [...user.tokens, token];
            await user.save();
            res.json({ token })
        }
        catch (ex) {
            console.log(ex);
            res.status(500).end();
        }
    })
    .post('/listers/signup', validateKeys, async function signup(req, res) {
        try {
            const { password, email } = req.body;
            if (!password || !email)
                return res.status(400).json({ required: "password, email" })
            const checkPass = isValidPassword(password);
            if (checkPass !== true)
                return res.status(400).json({ password: checkPass })
            const salt = genSalt();
            const hash = genHash(password + salt);
            const _id = mongoose.Types.ObjectId();
            const token = await genToken({ _id }, sessionTime);
            await new Lister({ _id, salt, hash, ...req.body, tokens: [token] }).save();
            res.status(201).json({ token });
        }
        catch (ex) {
            if (ex.errors)
                res.status(400).json(Object.fromEntries(Object.values(ex.errors).map(({ message, path }) => ([path, message]))))
            return res.status(500).end();
        }
    });


module.exports = listersRouter;