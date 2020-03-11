const { listerId } = require('../ids');
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
            rooms: 34,
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