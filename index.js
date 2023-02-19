const fs = require('fs');
const ourReadStream = fs.createReadStream(`${__dirname}/bigData.html`, 'utf-8');
ourReadStream.on('data', (data)=>{
    console.log(data)
})