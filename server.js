// npm init
// npm install express
// npm install -g nodemon -> nodemon server.js -> powershell : set-executionpolicy unrestricted


const express = require('express');
const app = express();

app.listen(7777, function(){
    console.log('listening on 7777')
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html')
});
