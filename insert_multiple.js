
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
  var sql = "INSERT INTO mytablewithnode (name, age,phone) VALUES ?";
  var data = [
   ['john', 30, 1234567897],
   ['selena', 20, 1456474597],
   ['william', 32, 0976567897],
   ['john Doe', 26, 9834555895]
  ]
  con.query(sql,[data], function (err, result) {
    if (err) throw err;
    console.log("More data inserted successfully..");
  });
});