//Import Express - for server
const express = require("express");
const path = require("path");

//create PORT, 8080 for local testing, process.env.PORT for deployment on web server
const PORT = process.env.PORT || 8080; 

//instantiate app
const app = express();

//Set server to serve static content from the "public" directory
app.use(express.static("public"));
app.use("/assets",express.static("asset"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set Handlebars as renderer
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes from router and link them to the server
const routes = require("./controllers/burgers_controller");
app.use(routes);

//Start PORT listener
app.listen(PORT, function() {
    //Log when server starts
    console.log("Server listening on: http://localhost:" + PORT);
});