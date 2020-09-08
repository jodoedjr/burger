// Import connection.js
const connection = require("../config/connection");

////////////////////////////////////////////////
// Helper Functions
////////////////////////////////////////////////
function printQuestionMarks(num) { // returns a string of "?,?,?" with a 'num' number of question marks
    let arr = [];
    // for non-identifier values 
    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString(); // returns a string similar to "?, ?, ?"
}

function printDoubleQuestionMarks(num) { // returns a string like "??, ??, ??", for MySQL query identifiers like table names and column names
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push("??");
    }
    return arr.toString();// returns a string similar to "??, ??, ??"
}

function objToSql(ob){// converts key/value pairs to SQL syntax
    let arr = [];
    for(let key in ob){
        let value = ob[key];
        //check if key is inherited from parent class
        //only do following logic if property belongs specifically to ob
        if(Object.hasOwnProperty.call(ob, key)){
            //check if key value is a string with spaces, if so encapsulate with quote marks (day: 'Field Day' -> "day ='Field Day'"")
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            //else {devoured: true} -> ["devoured=true"];
            arr.push(key + "=" + value);
        }
    }
    return arr.toString(); // return string of sql syntax based off ob keys and values
}


////////////////////////////////////////////////
// ORM Object for Export: selectAll(), insertOne(), updateOne()
////////////////////////////////////////////////
const orm = {
    selectAll: function (tableInput, cb) { // get all entries from tableInput
        const queryString = "SELECT * FROM ? ;";
        connection.query(queryString, tableInput, function (err, result) {
            if (err) throw err;
            cb(result); // run callback function on results
        });
    },
    insertOne: function (tableInput, cols, vals, cb) {
        // creates a query string for inserting into tableInput, with strings of "?, ?, ?" for cols and vals
        // INSERT INTO table (??, ??, ??) VALUES (?, ?, ?);
        let queryString = `INSERT INTO ${tableInput} (${printDoubleQuestionMarks(cols.length)}) VALUES (${printQuestionMarks(vals.length)});`;
        const fullQueryString = connection.query(queryString, [cols, vals], function (err, result) {
            if (err) throw err;
            console.log(fullQueryString);
            cb(result); // run callback function on results
        });
    },
    updateOne: function (tableInput, objColVals, condition, cb){
        // UPDATE burgers SET devoured=true WHERE id=3;
        let queryString = `UPDATE ${tableInput} SET ${objToSql(objColVals)} WHERE ?;`;
        const fullQueryString = connection.query(queryString, [condition], function(err, results){
            if (err) throw err;
            console.log(fullQueryString);
            cb(result); // run callback function on results
        })
    }
}

// Export ORM for models
module.exports = orm;