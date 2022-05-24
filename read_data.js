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
  var sql = "SELECT * FROM mytablewithnode";

  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log("Data read successfully..");
    console.log(result);
  });
});

//if you want to filter data use where statement


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "mydbwithnode"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM mytablewithnode WHERE name = 'john'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });