require('dotenv').config();
const mongoose = require('mongoose');
const uri = `mongodb+srv://masterNetanel:${process.env.MONGODB_PASSWORD}@nadlan-msbha.mongodb.net/nadlan`;
const nadlan = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


nadlan.on('error', console.error.bind(console, 'connection error:'));
nadlan.once('open', function () {
    console.log("were connected");
});


module.exports = { nadlan };