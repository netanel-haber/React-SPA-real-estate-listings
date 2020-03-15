const { listerId, mitigatingCompanyId, otherListerId } = require('../ids');

const { genHash, genSalt } = require('../../server/utilities/hash_salt');

const password1 = "aA1#dsdfjalk";
const sal1 = genSalt();
const hash1 = genHash(password1 + sal1);

const password2 = "bA1#dsdfjalk";
const sal2 = genSalt();
const hash2 = genHash(password2 + sal2);


module.exports = [
    {
        _id: listerId,
        mitigatingCompanyId,
        name: 'יוסי',
        lastName:"כהן",
        email: "a@g.com",
        hash: hash1,
        salt: sal1,
        phoneNumber: "0547869543"
    },
    {
        _id: otherListerId,
        name: 'מלכי',
        lastName:"כהנא",
        email: "gloombi@glamba.co.il",
        hash: hash2,
        salt: sal2,
        phoneNumber: "0547769643"
    }
];