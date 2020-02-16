require('dotenv').config();
const { success } = require('../../chalks');

const mongoose = require('mongoose');
const uri = `mongodb+srv://masterNetanel:${process.env.MONGODB_PASSWORD}@nadlan-msbha.mongodb.net/nadlan`;
const nadlan = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true);


nadlan.on('error', console.error.bind(console, 'connection error:'));
nadlan.once('open', function () {
    console.log(success("mongo: were connected"));
});


module.exports = { nadlan };