const usersRouter = require('express').Router();


usersRouter.post('/login', function login (req, res) {
    res.send("hello");
});

usersRouter.post('/signup', function signup (req, res) {
    res.send(["hello"]);
});



module.exports = usersRouter;