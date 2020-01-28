const detect = require('./detect');
const util = require('util');

const { getObj, delObj, getObsoleteKeys, markObjectSafe } = require('./s3');

exports.handler = async (event) => {
    console.log("Reading options from event:\n", util.inspect(event, { depth: 5 }));
    const { s3 } = event.Records[0];
    const { object, bucket } = s3;
    const srcBucket = bucket.name;
    const srcKey = object.key;
    try {
        let { Body } = await getObj(srcBucket, srcKey);
        let isImage = await detect(Body);
        if (!isImage) {
            await delObj(srcBucket, srcKey);
            console.log(`object ${srcBucket}/${srcKey} deleted for security reasons [NOT_AN_IMAGE]`);
        }
        else {
            await markObjectSafe(srcBucket, srcKey);
        }
        return await Promise.all(getObsoleteKeys.map(key => {
            console.log(`Deleting ${key}`);
            return delObj(srcBucket, key)
        }));
    }
    catch (ex) {
        throw new Error(`Entered a problem. err: [${ex}]. \n while processing event.`);
    }
};
