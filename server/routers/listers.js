const listersRouter = require('express').Router();
const { validateKeys } = require('../middleware/validateKeys');
const { genSalt, genHash } = require('../utilities/hash_salt');
const { getLister } = require('../../db/mongo/api/listers')

listersRouter.get('/listers/:id', async function getIndividualLister(req, res) {
    res.json(await getLister(req.params.id));
})

listersRouter.post('/login', validateKeys, function login(req, res) {
    res.send("hello");
});

listersRouter.post('/signup', validateKeys, function signup(req, res) {
    console.log(req.body);
    const { password, email } = req.body;
    if (!password || !email) {
        return res.status(404).send("MISSING_REQUIRED_FIELDS")
    }

    const salt = genSalt();
    const hash = genHash(password + salt);

    res.send(["hello"]);
});



module.exports = listersRouter;