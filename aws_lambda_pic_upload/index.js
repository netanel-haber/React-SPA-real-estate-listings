var mmm = require('mmmagic'),
    Magic = mmm.Magic;

var magic = new Magic(mmm.MAGIC_MIME_TYPE);
magic.detectFile('', function (err, result) {
    if (err) throw err;
    console.log(result);
});



exports.handler = async (event) => {
    console.log("hello from lambda!");
};
