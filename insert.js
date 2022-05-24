
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
  var sql = "INSERT INTO mytablewithnode (name, age,phone) VALUES ('john', 30, 1234567897)";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Data inserted successfully..");
  });
});