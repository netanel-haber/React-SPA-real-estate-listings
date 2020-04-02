const { userForPost } = require('./connection');
const { v4: uuidv4 } = require('uuid');


const pathPrefix = "property-images";
const postfix = 'jpeg';
const secondsToExpire = 6000;
const maxMbForFile = 20;
const getParams = (id, minusHowMuch) => {
    let stamp = Date.now() - minusHowMuch;
    return {
        Bucket: 'nadlan',
        Fields: {
            "Content-Type": 'image/jpeg',
            key: `${pathPrefix}/${id}/${uuidv4()}.${stamp}.${postfix}`
        },
        Conditions: [
            ['content-length-range', 100, maxMbForFile * 1000000]
        ],
        Expires: secondsToExpire
    }
};


const getPostData = (id, howmany) => {
    let urls = [];
    while (howmany--) {
        urls.push(userForPost.createPresignedPost(getParams(id, howmany)));
    }
    return urls;
}

module.exports = getPostData;