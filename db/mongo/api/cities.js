const { Cities } = require('../index');


function getMatchingStreets(regex) {
    return Cities.aggregate([
        {
            '$match': {
                'streets': {
                    '$in': [
                        regex
                    ]
                }
            }
        }, {
            '$unwind': {
                'path': '$streets'
            }
        }, {
            '$match': {
                'streets': regex
            }
        }
    ]).then(res => res.map(({ city, streets }) => [city, streets])
        .reduce((acc, [city, street]) =>
            ({
                ...acc,
                [city]: acc[city] ? [...acc[city], street] : [street]
            }), {}))
}

module.exports = { getMatchingStreets };