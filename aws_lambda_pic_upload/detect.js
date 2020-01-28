var mmm = require('mmmagic'),
Magic = mmm.Magic;
var magic = new Magic(mmm.MAGIC_MIME_TYPE);

const detectIfImage = (buffer) => {
    return new Promise((res, rej) => {
        magic.detect(buffer, (err, result) => {
            if (err) rej(err);
            else res(result.split('/')[0]==="image");
        });
    });
};

module.exports = detectIfImage;