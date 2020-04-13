const { listerId } = require('../ids');

const { municipalities, possibleRooms } = require('./store');


const randomFromArr = (arr) => arr[Math.floor(Math.random() * arr.length)];


module.exports = (lis = listerId, price) => {
    return {
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
            entryDate: 0,
            sqMBuilt: 250,
            parkingSpots: 23,
            upkeep: "חדש (גרו בנכס)"
        },
        level3: {
            AC: true,
            grates: false,
            elevator: true,
            handicappedAccesible: false,
            furnitureDesc: "אני לא חושב שהעיצוב הזה כזה מוצלח. יד2 די פישלו"
        }
    }
};