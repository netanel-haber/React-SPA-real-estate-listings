const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = `mongodb+srv://masterNetanel:${process.env.MONGODB_PASSWORD}@nadlan-msbha.mongodb.net`;

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect()
    .then(() => {
        console.log("connected to server");
        const db = client.db('users');
        return db.collection("listers").find({ a: 6 }).toArray()
    })
    .then(console.log)

client.close();

// const connect = (db, collection, filter) => {
//     client.connect()
//         .then(() => {
//             console.log("connected to server");
//             return client.db(db).collection(collection).filter(filter).toArray()
//         })
//         .then(array=>{
//             client.close();
//             return array;
//         });
// }

// const nadlan = mongoose.createConnection(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// nadlan.on('error', console.error.bind(console, 'connection error:'));
// nadlan.once('open', function () {
//     console.log("were connected");
// });



// module.exports = {
//     find: connect
// };