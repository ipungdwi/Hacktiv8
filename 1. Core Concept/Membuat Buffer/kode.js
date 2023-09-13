// const buf = Buffer.allocUnsafe(100);

const { buffer } = require("stream/consumers")

// const len = buf.write('halo dari kode');

// console.log("Octets written :" +len);


// const buf = Buffer.allocUnsafe(26);
// for(var i = 0; i < 26; i++) {
//     buf[i] = i + 97;
// }

// console.log(buf.toString('ascii'));
// console.log(buf.toString('ascii', 0,5));
// console.log(buf.toString('utf8'));
// console.log(buf.toString(undefined, 0,5));



// Buffer TO JSON

const buf = new Buffer('Kita sedang belajar di Kode');

const json = buf.toJSON(buf);

console.log(json);