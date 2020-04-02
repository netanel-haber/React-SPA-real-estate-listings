const listingsRouter = require('express').Router();
const { getTopLevel, getBottomLevel, countDocs, addListing:addListingToDb } = require('../../db/mongo/api/listings');
const { translator } = require('../middleware/mongoTranslator');
const { validateKeys } = require('../middleware/validateKeys');
const auth = require("../middleware/auth");

const filterUndefinedProperties = obj => Object.fromEntries(Object
    .entries(obj)
    .filter(([, value]) => value !== undefined)
)


listingsRouter
    .use(translator)
    .post('/listings/add-listing', validateKeys, auth, async function addListing(req, res) {
        try{
            const { listing: { listing, level1, level2, level3 }, type } = req.body;
            const { _id } = req.user;
            const filteredListing = {
                listing: {
                    listerId: _id,
                    ...filterUndefinedProperties(listing),
                },
                level1: filterUndefinedProperties(level1),
                level2: filterUndefinedProperties(level2),
                level3: filterUndefinedProperties(level3)
            }
            await addListingToDb(filteredListing, type);
            res.status(201).end();
        }
        catch(ex){
            res.status(500).end();
        }
    })
    .post('/listings/count/:type', validateKeys, async function countListings(req, res) {
        res.json(await countDocs(req.params.type, req.filters));
    })
    .get('/listings/:type/:id', async function getListing(req, res) {
        res.json(await getBottomLevel(req.params.type, req.params.id));
    })
    .post('/listings/:type', validateKeys, async function getListings(req, res) {
        res.json(await getTopLevel(req.params.type, req.filters, req.sorts, req.skip, req.limit));
    })



module.exports = listingsRouter;