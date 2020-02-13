const { ForsaleListing, RentListing, CommercialListing, RoommatesListing: RoommateListing, Lister, MitigatingCompany } = require('../../db/mongo');
const mongoRouter = require('express').Router();
const { getTopLevel, getBottomLevel } = require('../../db/mongo/api/find');


mongoRouter.get('/:type', async (req, res) => {
    res.json(await getTopLevel(req.params.type));
})

mongoRouter.get('/:type/:id', async (req, res) => {
    // console.log(await getBottomLevel(req.params.type, req.params.id));
    
    res.json(await getBottomLevel(req.params.type, req.params.id));
})


module.exports = mongoRouter;