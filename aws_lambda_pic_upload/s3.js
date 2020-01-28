const S3 = require('aws-sdk/clients/s3');

const s3 = new S3();

const maxSizeObsolescence = 10 * 1000000; // 10 mb
const getTimeCreated = (key) =>
    key.split('.')[1];

const sorter = ({ Key: a }, { Key: b }) => {
    a = getTimeCreated(a);
    b = getTimeCreated(b);
    if (a === b)
        return 0;
    return a > b ? -1 : 1;
};


module.exports = {
    getObj: (Bucket, Key) => {
        return s3.getObject({
            Bucket,
            Key
        }).promise();
    },
    delObj: (Bucket, Key) => {
        return s3.deleteObject({
            Bucket,
            Key
        }).promise()
    },
    getObsoleteKeys: (Bucket, Prefix) => {
        return s3.listObjectsV2({
            Bucket,
            Prefix
        }).promise().then(({ Contents }) => {
            let sortedByDate = (Contents.sort((sorter)));
            let sizeCounter = 0;
            let i;
            for (i = 0; i < sortedByDate.length; i++) {
                let { Size: size } = sortedByDate[i];
                if (sizeCounter + size > maxSizeObsolescence)
                    break;
                sizeCounter += size;
            }
            return sortedByDate.slice(i).map(({ Key }) => Key);
        });
    },
    markObjectSafe: (Bucket, Key) => {
        return s3.putObjectTagging({
            Bucket,
            Key,
            Tagging: {
                TagSet: [{ Key: 'isSafe', Value: "true" }]
            }
        }).promise();
    }
}
