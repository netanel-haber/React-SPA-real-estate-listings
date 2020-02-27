require('dotenv').config();
const { success } = require('../../chalks');

const mongoose = require('mongoose');
const uri = `mongodb+srv://masterNetanel:${process.env.MONGODB_PASSWORD}@nadlan-msbha.mongodb.net/nadlan`;
const nadlan = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

nadlan.on('error', function () {
    console.log('mongo connection error');
});
nadlan.once('open', function () {
    console.log(success("mongo: were connected"));
});


module.exports = { nadlan };