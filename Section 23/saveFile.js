const fs = require('fs');

fs.writeFile("new.txt","Hi my name is sartk", (err)=>{
    if(err) throw err;
    console.log("file created successfully");
});