const express=require('express');
const app=express();
const fs=require('fs');
const http=require('http');
const db=require('./config/db');
var connection= db.connection;

/*connection.query ('select * from users', function(error, results){
    if (results){
        console.log(results);
    }
    else{
        console.log(error);
    }
});*/


app.listen(80);