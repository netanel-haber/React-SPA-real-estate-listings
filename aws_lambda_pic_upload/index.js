const detect = require('./detect');
const util = require('./util');

exports.handler = async (event) => {
    console.log("Reading options from event:\n", util.inspect(event, {depth: 5}));
    // var srcBucket = event.Records[0].s3.bucket.name;
    // // Object key may have spaces or unicode non-ASCII characters.
    // var srcKey    = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
    // var dstBucket = srcBucket + "-resized";
    // var dstKey    = "resized-" + srcKey;
};




