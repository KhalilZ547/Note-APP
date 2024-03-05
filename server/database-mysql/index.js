const mysql = require("mysql2");

const connection = mysql
  .createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mvp",
  })
  .promise();
  
connection.connect()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
 

module.exports = connection;
