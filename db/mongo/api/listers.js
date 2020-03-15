const { Lister } = require('../index');


const getLister = async (id) =>
    await Lister.findById(id);

const createLister = async (data) => {
    const lister = new Lister(data);
    lister.save();
}


module.exports = { getLister, createLister };