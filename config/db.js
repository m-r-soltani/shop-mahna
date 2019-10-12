const mysql =require('mysql');
config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'shop'
};

var connection =mysql.createConnection(config);
connection.connect(function(err){
    if (err){
        console.log('error connecting:' + err.stack);
    }
});

module.exports ={
    connection : mysql.createConnection(config)
};