var mysql = require('mysql');

var con = mysql.createConnection({
host : 'localhost',
user : 'root',
password : ''
});

con.connect(function(err){
if (err) throw err;
console.log("successfully connected with database");

con.query("create database mydbwithnode", function(err, result){
	if (err) throw err;
	console.log("database 'mydbwithnode' created successfully");
});
});
