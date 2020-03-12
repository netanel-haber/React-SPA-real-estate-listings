const usersRouter = require('express').Router();
const { validateKeys } = require('../middleware/validateKeys');

usersRouter.post('/login', validateKeys, function login(req, res) {
    res.send("hello");
});

usersRouter.post('/signup', validateKeys, function signup(req, res) {
    res.send(["hello"]);
});



module.exports = usersRouter;