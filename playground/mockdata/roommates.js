const { listerId } = require('../ids');
const { municipalities, possibleRooms } = require('./store');


const randomFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];



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
        sqMeters: 100,
        roommates: Math.floor(Math.random() * 6) + 1,
        price: price ? price : null,
        rooms: randomFromArr(possibleRooms),
        address: {
            municipality: randomFromArr(municipalities),
            area: "רמות יצחק",
            street: randomFromArr(["ז'בוטינסקי", "הרצל", "קדושי השואה", "הלח\"י"]),
            number: 13,
            apt: 8
        },
    },
    level2: {
        entrance: "כניסה א'",
        desc: "דירה חמודה ומקסימה במזרח ירושלים",
        entryDate: 0,
        parkingSpots: 23,
        upkeep: "חדש (גרו בנכס)"
    },
    level3: {
        AC: true,
        grates: true,
        elevator: true,
        handicappedAccesible: true,
        petsAllowed: false
    }
})