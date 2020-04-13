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
        type: "דירה",
        floor: 3,
        floorsInBuilding: 5,
        sqMeters: randomIntBetween(50, 250),
        price: price ? price : null,
        rooms: randomFromArr(possibleRooms),
        address: {
            municipality: randomFromArr(municipalities),
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
        upkeep: "חדש (גרו בנכס)",
        biMonthlyArnona: 2500
    },
    level3: {
        AC:  Math.random() >= 0.5,
        grates:  Math.random() >= 0.5,
        elevator: Math.random() >= 0.5,
        handicappedAccesible:  Math.random() >= 0.5,
        forPartners:  Math.random() >= 0.5
    }
})