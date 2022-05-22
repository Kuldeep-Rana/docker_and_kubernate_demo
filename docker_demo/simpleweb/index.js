const express  = require("express");

const app = express();

app.get('/', (req,res) =>{
    res.send("Hello from node app");
});

app.listen(9999, () =>{
    console.log('listing on port 9999');
});