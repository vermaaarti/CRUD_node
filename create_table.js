// var mysql = require('mysql');

// var con = mysql.createConnection({
// host: 'localhost',
// user : 'root',
// password : '',
// db : 'mydbwithnode'
// });

// con.connect(function(err){
// if (err) throw err;
// console.log("successfully connected with database");
// var sql = "create table tablewithnode(name varchar(10), age int, phone varchar(10));"
// con.query(sql, function(err,result){
//     if (err) throw err;
//    console.log("table 'tablewithnode' created successfully");
// });
// });

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbwithnode"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected with database");
  var sql = "CREATE TABLE mytablewithnode (id INT, name VARCHAR(20), age INT, phone VARCHAR(10))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created successfully..");
  });
});