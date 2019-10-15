const express=require('express');
const app=express();
//const fs=require('fs');
const PORT = 3000;
const routes = require('./routes/router');
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'assets')));
// app.use("/css",  express.static(__dirname + '/assets/stylesheets'));
// app.use("/js", express.static(__dirname + '/assets/javascripts'));
// app.use("/img",  express.static(__dirname + '/assets/images'));

app.use('/', routes);
//const http=require('http');
//const db=require('./config/db');
//var connection= db.connection;

/*connection.query ('select * from users', function(error, results){
    if (results){
        console.log(results);
    }
    else{
        console.log(error);
    }
});*/


app.listen(PORT, err => {
  if (err) return console.log(`Cannot Listen on PORT: ${PORT}`);
  console.log(`Server is Listening on: http://localhost:${PORT}/`);
});