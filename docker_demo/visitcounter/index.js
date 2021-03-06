const express = require('express');
const redis = require('redis');

const process = require('process');

const app = express();
const redisClient = redis.createClient(
    { 
        host: 'redis-server',
        port: 6379
    }
);
redisClient.set("visits", 0);
app.get("/",(req,resp) =>{
    process.exit(0); // remove this line to execute actaul implementation

    console.log('visit counter');
    redisClient.get("visits", (err,visits) =>{
        visits = parseInt(visits)+1;
        resp.send("total visits are "+visits);
        redisClient.set("visits",visits);
    });
});

app.listen(7777,()=>{
    console.log('listing on port 7777');
});