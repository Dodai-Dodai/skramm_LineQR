const lineID = '@693jilpw';
const storeName = 'store';
const sendMsg = 'で買い物をしました。';

var encodedstoreName = encodeURIComponent(storeName);
var encodedsendMsg = encodeURIComponent(sendMsg);

var lineURL = 'https://line.me/R/oaMessage/' + lineID + '/' + encodedstoreName + '%0A' + encodedsendMsg ;

console.log(lineURL);

const QRcode = require('qrcode');
QRcode.toFile('code.png', lineURL);