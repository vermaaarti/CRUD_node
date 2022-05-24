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
  var sql = "CREATE TABLE mytablewithnode (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), age INT, phone VARCHAR(10))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created successfully..");
  });
});