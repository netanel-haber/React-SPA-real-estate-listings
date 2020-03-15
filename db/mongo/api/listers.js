const { Lister } = require('../index');


const getLister = async (id) =>
    await Lister.findById(id);

const createLister = async (data, options = {}) => {
    const lister = new Lister(data);
    return lister.save(options);
}

const validateLister = (data) => {
    return new Lister(data).validate();
}


module.exports = { getLister, createLister, validateLister };