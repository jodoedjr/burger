//Import ORM functions for database interaction
const orm = require("../config/orm");

//burger model object for exporting to controller
//handles specificity for generalized orm functionss
const burger = { 
    selectAll: function(cb) {//cb is a callback function
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){// cols and vals are arrays
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb){//objColVals is a object of "column name": "value" pairs
        orm.updateOne("burgers", objColVals, contion, function(res) {
            cb(res);
        })
    }
}

//Export database functions for controler js
module.exports = burger;