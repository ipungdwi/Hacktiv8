const fs = require('fs');

// fs.writeFile('./file/watch.txt','Menulis dengan menggunakan write File', (err) =>{
//     if(err) return console.error(err);
// })


//----------Menulis dengan WriteFileSync
// try{
//     fs.writeFileSync('./file/watch.txt', ' Menulis dengan writefile sync', {mode: 0o755})
// } catch(err){
//     console.error(err);
// }

//Menulis dengan Buffer
var buffer = new Buffer([0x48, 0x65, 0x6c, 0x6c]);
fs.writeFile('./file/watch.txt', buffer, function(err) {
    if(err) return console.error(err);
})