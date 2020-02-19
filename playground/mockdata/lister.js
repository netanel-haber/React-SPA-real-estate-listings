const { listerId, mitigatingCompanyId, otherListerId } = require('../ids');
module.exports = [
    {
        _id: listerId,
        mitigatingCompanyId,
        name: 'יוסי כהן',
        email: "a@g.com",
        phoneNumber: "0547869543"
    },
    {
        _id: otherListerId,
        name: 'מלכי כהנא',
        email: "gloombi@glamba.co.il",
        phoneNumber: "0547769643"
    }
];