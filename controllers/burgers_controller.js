//Import express (for router), and the burger model for db access
const express = require("express");
const burger = require("../models/burger")

//create router
const router = express.Router();

////////////////////////////////////////////////
// Router Routes
////////////////////////////////////////////////

//GET - GET ALL DB ENTRIES
router.get("/", function (req, res) {
    burger.selectAll(function (data) { // callback function for model/orm
        const hbsObject = { // create object for handlebars that contains key burgers paired returned burger db info
            burgers: data
        };
        console.log(hbsObject); // console log object
        res.render("index", hbsObject); // render object with handlebars
    });
});

//POST API - ADD DB ENTRY
router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], // column names
        [req.body.burger_name, req.body.devoured], // vals from body of post request
        function (result) { // callback function
            //responds with json object of new db entry id
            res.json({ id: result.insertID });
        });
});

//PUT API - UPDATE DB ENTRY
router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition: ", condition);

    burger.updateOne({
        devoured: req.body.devoured //object Column: Value for devoured
    }, condition, // condition for WHERE, condition is "id = #"
        function (result) {// callback function to test if db was updated
            if (result.changedRows == 0){
                //no rows were updated, ID does not exist, 404
                return res.status(404).end();
            } else { // rows were updated
                res.status(200).end(); // send good status
            }
        }
    );
});

//NO DELETE FUNCTION

// Export routes for server.js
module.exports = router;