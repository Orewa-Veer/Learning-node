const { error } = require('console');
const fs= require('fs');
fs.readdir('./',(error,file)=>{
    if(error) console.log(error);
    else console.log(file);
    
})
