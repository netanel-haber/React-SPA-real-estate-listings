const jwt = require("jsonwebtoken");


function genToken(payload, expiresIn) {
    return new Promise((res, rej) => {
        jwt.sign({ payload }, process.env.SECRET, { expiresIn: expiresIn }, (err, token) => {
            (err) ?
                rej(err) :
                res(token);
        });
    })
}

function verifyToken(token) {
    return new Promise((res, rej) => {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                rej(err)
            }
            else {
                res(decoded)
            }
        });
    })
}

module.exports = { genToken, verifyToken }