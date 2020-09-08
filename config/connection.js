// Require MySQL - the node module
const mysql = require("mysql");

//create connection
let connection;
if (process.env.JAWSDB_URL) { // HEROKU deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { // localhost deployment
    connection = mysql.createConnection(
        {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            database: "burgers_db"
        });
}

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

//export connection
module.exports = connection;