var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbwithnode"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM mytablewithnode WHERE name = 'peter'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});