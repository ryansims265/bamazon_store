var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Snapnurse",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    displayAll();
});



function howMany() {
    inquirer
        .prompt({
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?",
        })
        .then(function (answer) {
            var userQuantity = answer;
            
        }
        )
};




function displayAll() {

    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Name: " + res[i].product_name + " " + res[i].department_name + " || Price: " + res[i].price + " || Quantity: " + res[i].stock_quantity) + " || ID: " + res[i].item_id;
        }
    });
    chooseProduct();
}



function chooseProduct() {
    inquirer
        .prompt({
            name: "choose",
            type: "input",
            message: "What is the ID of the item you would like to buy?" + "\n",
        })
        .then(function (answer) {
            var userChoice = answer;
            var query2 = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products WHERE item_id is ?";
            connection.query(query2, { choose: answer.choose }, function (err, res) {
                console.log(res);
            });
            howMany();
        }
        )
};


function checkQuantity(userChoice, userQuantity) {
    if (userQuantity > itemQuantity) {
        console.log("Insufficient Quantity, please select a different product or a lower quantity!");
    }
    if (userQuantity < itemQuantity) {
        console.log("Item Purchased!")
        console.log("Your total cost is" + (userQuantity * price));
    }
};


