const express = require('express');
const app = express();
const PieSocket = require("piesocket-nodejs");

const piesocket = new PieSocket({
    clusterId: 'demo',
    apiKey: 'oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm',
    secret: 'd8129f82f8dd71910aa4a7efa30a7297'
});

function getRandomNumber(min, max){
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}


setInterval(function(){
    console.log("Sending new graph data");
    piesocket.publish("piesocket-realtime-chart", "chart-data" , [
        getRandomNumber(1, 10), 
        getRandomNumber(1, 10), 
        getRandomNumber(1, 10), 
        getRandomNumber(1, 10), 
        getRandomNumber(1, 10), 
        getRandomNumber(1, 10)
    ]);
}, 1000);

app.use(express.static(__dirname + '/public'));

app.listen('3000');
console.log('Server running on: http://localhost:3000');