const { listerId } = require('../ids');
const { municipalities, possibleRooms,
    randomFromArr, randomIntBetween, randomCloseDate } = require('./store');

module.exports = (lis = listerId, price) => ({
    listing: {
        listerId: lis,
        pictureKeys: Math.random() >= 0.5 ? ['property-images/6/1.png',
            'property-images/6/2.png',
            'property-images/6/3.png'] : [],
    },
    level1: {
        type: "אולמות",
        floor: 3,
        floorsInBuilding: 5,
        sqMeters: randomIntBetween(200,6000),
        price: price ? price : null,
        address: {
            municipality: "נשר",
            area: "רמות יצחק",
            street: "רחובות הנהר",
            number: 13,
            apt: 8
        },
    },
    level2: {
        entrance: "כניסה א'",
        desc: "דירה חמודה ומקסימה במזרח ירושלים",
        entryDate: randomCloseDate(),
        parkingSpots: 23,
        upkeep: "חדש (גרו בנכס)"
    },
    level3: {
        kitchentte: false,
        alarm: true,
        elevator: true,
        handicappedAccesible: true,
        underground: false
    }
})