var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbwithnode"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE mytablewithnode SET name = 'peter' WHERE name = 'john'";
  //var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    // console.log(result.affectedRows + " records updated");
  });
});