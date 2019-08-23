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




function displayAll() {

    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Name: " + res[i].product_name + " " + res[i].department_name + " || Price: " + res[i].price + " || Quantity: " + res[i].stock_quantity + " || ID: " + res[i].item_id);
            console.log("");
        }
    });
    chooseProduct();
}



function chooseProduct() {
    inquirer.prompt([
        {
            name: "ID",
            type: "input",
            message: "Please enter the ID of the item you would like to purchase.",
            filter: Number
        },
        {
            name: "Quantity",
            type: "input",
            message: "How many items do you wish to purchase?",
            filter: Number
        },
    ]).then(function (answers) {
        var inputQuantity = answers.Quantity;
        var inputID = answers.ID;
        purchase(inputID, inputQuantity);
    }
    )
};

function purchase(inputID, inputQuantity){
    var query2 = 'Select * FROM products WHERE item_id = ' + inputID;
    connection.query(query2, function (err, res) {
        if(err){console.log(err)};
        var stockQuantity = res[0].stock_quantity;
        var price = res[0].price;
        checkQuantity(inputID, inputQuantity, stockQuantity, price);

    });
}


function checkQuantity(inputID, inputQuantity, stockQuantity, price) {
    if (inputQuantity > stockQuantity) {
        console.log("Insufficient Quantity, please select a different product or a lower quantity!");
        
        displayAll();
    }
    if (inputQuantity <= stockQuantity) {
        var newStock = (stockQuantity - inputQuantity);
        console.log("Your total cost is " + (inputQuantity * price));
        connection.query("UPDATE products SET ? WHERE ?", [{
            stock_quantity: newStock
        }, {
            item_id: inputID
        }], function(err, res) {});

        displayAll();
    }
};


	



