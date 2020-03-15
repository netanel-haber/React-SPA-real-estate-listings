const { Lister } = require('../index');


const getLister = (id) => Lister.findById(id);

const getListerByEmail = (email) => Lister.findOne({ email })

const createLister = async (data, options = {}) => {
    const lister = new Lister(data);
    return lister.save(options);
}

const validateLister = (data) => {
    return new Lister(data).validate();
}


module.exports = { getLister, getListerByEmail, createLister, validateLister };