const listersRouter = require('express').Router();
const { validateKeys } = require('../middleware/validateKeys');
const { genSalt, genHash } = require('../utilities/hash_salt');
const { genToken, verifyToken } = require('../utilities/jwt');
const { getLister, createLister } = require('../../db/mongo/api/listers');
const { isValidPassword } = require('../validation/signup');
const mongoose = require('mongoose');
const { Lister } = require('../../db/mongo/index');


listersRouter.get('/listers/:id', async function getIndividualLister(req, res) {
    res.json(await getLister(req.params.id));
})

listersRouter.post('/listers/login', validateKeys, function login(req, res) {
    res.send("hello");
});

listersRouter.post('/listers/signup', validateKeys, function signup(req, res) {
    try {
        const { password, email } = req.body;
        if (!password || !email)
            return res.status(403).send("MISSING_REQUIRED_FIELDS")


        const checkPass = isValidPassword(password);
        if (checkPass !== true)
            return res.status(403).json({ password: checkPass })

        const salt = genSalt();
        const hash = genHash(password + salt);

        createLister({ salt, hash, ...req.body })
            .then(() => {
                return res.status(201).send()
            })
            .catch(ex => {
                res.status(403).json(Object.fromEntries(Object.values(ex.errors).map(({ message, path }) => ([path, message]))))
            })
    }
    catch (ex) {
        return res.status(500).send();
    }
});





module.exports = listersRouter;