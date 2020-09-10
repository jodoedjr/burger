# Burger    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description 

This application showcases the capabilities of using Node, Express, MySQL, Handlebars, and a homemade ORM to create a web application with persistent data.\
Users may describe their desired burger and select if it has been devoured or not. Uneaten burgers will appear in the left column, while devoured burgers will appear in the right column.\
Buttons on the burger cards allow the user to 'Devour' or 'Make it again', which will change the value of the `devoured` field in the MySQL database.\
Burgers will have css alignment classes selectively applied by the handlebars scripting depending on their `devoured` value.\
The ORM.js file generalizes MySQL queries for use by the burger.js model and burgercontroller.js server route controller.


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

`npm install` - will install mysql-cli locally.\
Consider installing a MySQL GUI editor for ease of use, or use the terminal functionality of mysql-cli.


## Usage 

Please prepare your MySQL database before starting the server.\
`npm start` runs the script `node server.js`\
2020/09/10: Test Deployment at https://morning-ridge-85001.herokuapp.com/
![Image of Deployed Site, Desktop Size](https://github.com/jodoedjr/burger/blob/master/public/assets/images/morning-ridge-85001-herokuapp-com-1024x768desktop.png)


## License

This repo is covered by the MIT license


## Contributing

No contributions allowed. Feel free to clone and modify.


## Tests

No Tests Provided


## Questions

Find me on GitHub at: https://github.com/jodoedjr

