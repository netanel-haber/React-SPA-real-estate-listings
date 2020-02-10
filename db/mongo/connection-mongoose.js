require('dotenv').config();
const mongoose = require('mongoose');
const uri = `mongodb+srv://masterNetanel:${process.env.MONGODB_PASSWORD}@nadlan-msbha.mongodb.net/users`;

const users = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

users.on('error', console.error.bind(console, 'MongoDB connection error:'));

users.on("open", () => {
    console.log("connected!");
    mongoose.disconnect().then(l => { console.log("here") });
});


