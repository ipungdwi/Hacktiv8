// var newMod = require('module_name');

// newMod.newFunctionName = function (params) {
//     //function Body
// };

// module.exports = newMod;

var fs = require('fs');

fs.printMessages = function(str) {
    console.log("pesan dari function baru yang sudah ditambahkan ke dalam module")
    console.log(str);
}

module.exports = fs
fs.printMessages("success")