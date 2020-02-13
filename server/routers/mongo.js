const { ForsaleListing, RentListing, CommercialListing, RoommatesListing: RoommateListing, Lister, MitigatingCompany } = require('../../db/mongo');
const mongoRouter = require('express').Router();
const { getItems } = require('../../db/mongo/api/find');


mongoRouter.get('/:type', async (req, res) => {
    res.json(await getItems(req.params.type));
})


module.exports = mongoRouter;