require('dotenv').config();
const mongoose = require('mongoose');
const uri = `mongodb+srv://masterNetanel:${process.env.MONGODB_PASSWORD}@nadlan-msbha.mongodb.net/users`;

const users = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

users.on('error', console.error.bind(console, 'connection error:'));
users.once('open', function () {
    console.log("were connected");
});


// const kittySchema = new mongoose.Schema({
//     name: String,
//     claim: {
//         cloom: Number,
//         floom: String
//     }
// });

// const Kitten = users.model('Kitten', kittySchema);

// // Kitten.find({}, (err, docs) => {
// //     console.log(docs);
// // })


// const silence = new Kitten({
//     name: 'Silence',
//     claim: {
//         cloom: 9,
//         floom: "fsbdfb"
//     }
// });

// silence.validate()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// silence.save((err, fluffy) => {
//     if (err) return console.error(err);
//     else console.log(fluffy);
// })




// const Cat = users.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => { console.log('meow') });

    // .then(con => {
    //     console.log("here");

    // })
    // .catch(err => { console.log(err); });



// users.on('error', console.error.bind(console, 'MongoDB connection error:'));

// users.on("open", () => {
//     console.log("connected!");
// });

// users.close().then(e => {
//     console.log("great!");
// })

