const fs = require('fs');

fs.readFile('./file/kode.html', {encoding: 'utf8'}, (err, content) => {  // callback function
    if(err) return console.error(err);

    console.log(content);
})

