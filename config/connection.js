var mysql = require("mysql");

JAWSDB_URL='mysql://ksjtvg44ohdhzn0m:w535nvvpg9o7ak9o@axxb6a0z2kydkco3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/x7eelb3ngvbqpwzi';

var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "lol",
        database: "burgers_db" 
    });
};

connection.connect(function(err) {
    console.log('hello');
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

module.exports = connection;