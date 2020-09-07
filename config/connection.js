// Require MySQL
const mysql = require("mysql");

//create connection
if (process.env.JAWSDB_URL) { // HEROKU deployment
    const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else { // localhost deployment
    const connection = mysql.createConnection(
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