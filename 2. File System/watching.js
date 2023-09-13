const fs = require('fs');

const watcher = fs.watch('./file');

watcher.on('change', function(event, filename){
    console.log(`${event} pada file ${filename}`);
})