const mongoose = require('mongoose');
module.exports = {
    listerId: mongoose.Types.ObjectId(),
    mitigatingCompanyId: mongoose.Types.ObjectId(),
    otherListerId: mongoose.Types.ObjectId()
}