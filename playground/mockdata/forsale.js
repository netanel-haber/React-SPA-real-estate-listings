const { listerId, otherListerId } = require('../ids');

module.exports = (lis = listerId, price) => {
    return {
        listing: {
            listerId: lis,
            // pictureKeys: ['property-images/6/12b0a93b-b3f5-454b-8a1b-80f7b7efb27a.1580838564327.jpeg',
            //     'property-images/6/2c43ffc8-d78a-4b0f-808f-22fa7d07bc1a.1580903874863.jpeg',
            //     'property-images/6/46609425-8720-42d3-8907-4d0a2a4fea24.1580839529483.jpeg'],
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