const
    forsale = require('../db/mongo/mockdata/forsale'),
    rent = require('../db/mongo/mockdata/rent'),
    commercial = require('../db/mongo/mockdata/commercial'),
    roommmates = require('../db/mongo/mockdata/roommates');

const {
    ForsaleListing,
    RentListing,
    CommercialListing,
    RoommatesListing
} = require('../db/mongo/index');

for (let i = 0; i < 10; i++) {
    new ForsaleListing(forsale).save().then(console.log).catch(console.error);
    new RentListing(rent).save().then(console.log).catch(console.error);
    new CommercialListing(commercial).save().then(console.log).catch(console.error);
    new RoommatesListing(roommmates).save().then(console.log).catch(console.error);
}
























// const _id = mongoose.Types.ObjectId();
// const mitigatingCompany = { _id, h:"fsdfsd" };

// const listerId = mongoose.Types.ObjectId();
// const lister = { _id: listerId, mitigatingCompanyId: _id }
// const forsale = {
//     listing: {
//         listerId,
//         pictureKeys: ['property-images/6/12b0a93b-b3f5-454b-8a1b-80f7b7efb27a.1580838564327.jpeg',
//             'property-images/6/2c43ffc8-d78a-4b0f-808f-22fa7d07bc1a.1580903874863.jpeg',
//             'property-images/6/46609425-8720-42d3-8907-4d0a2a4fea24.1580839529483.jpeg'],
//     },
//     level1: {
//         type: "דירה",
//         address: {
//             municipality: "נשר",
//             area: "רמות יצחק",
//             street: "רחובות הנהר",
//             number: 13,
//             apt: 8
//         },
//     },
// }



// // new MitigatingCompany(mitigatingCompany).save()
// //     .then(() => new Lister(lister).save())
// //     .then(() => 
