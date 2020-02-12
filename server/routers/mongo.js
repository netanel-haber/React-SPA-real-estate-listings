const { ForsaleListing, RentListing, CommercialListing, RoommateListing, Lister, MitigatingCompany } = require('../../db/mongo');
const mongoRouter = require('express').Router();


mongoRouter.get('/forsale', async (req, res) => {
    res.json(await ForsaleListing.find({}, null, { sort: { date: 1 } }));
})


module.exports = mongoRouter;