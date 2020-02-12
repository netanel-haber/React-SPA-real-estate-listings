const { commercial } = require('./validation').level1types;
const schemaFactory = require('./schema-factory/schemaFactory');

module.exports = schemaFactory(
    [{}, commercial, false],
    [{ divided: Boolean, rentedUntil: Date, meetingRoom: Boolean, bathrooms: Boolean }, false],
    [{
        cameras: Boolean,
        ITRoom: Boolean,
        highCeiling: Boolean,
        loadingRamp: Boolean,
        underground: Boolean,
        kitchenette: Boolean,
        alarm: Boolean,
    }]
);