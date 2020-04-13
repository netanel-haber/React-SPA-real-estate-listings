const { phoneNumber, email, name } = require('./users/validation');

module.exports ={
    name,
    lastName: name,
    phoneNumber,
    email
};