const usersRouter = require('express').Router();


usersRouter.post('/login', (req, res, next) => {
    res.send("hello");
});

usersRouter.post('/signup', (req, res, next) => {
    res.send("hello");
});



module.exports = usersRouter;