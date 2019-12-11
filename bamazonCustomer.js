const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2579",
  database: "bamazonDB"
});
connection.connect(function(err) {
  if (err) {
    console.log("connected as id " + err.stack);
  }
  loadProducts();
});
function loadProducts() {
  connection.query("SELECT * FROM products", function(error, res) {
    console.table(res);
    promptCustomerItem(res);
  });
}
function promptCustomerItem(inventory) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "what is the ID of the item you would like to purchase?",
        validate: function(val) {
          return !isNaN(val);
        }
      }
    ])
    .then(function(val) {
      checkIfShouldExit(val.choice);
      var choiceId = parseInt(val.choice);
      var product = checkInventory(choiceId, inventory);
      if (product) {
        promptCustomerQuantity(product);
      }
    });
}
function promptCustomerQuantity(product) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "quantity",
        message: "How much would you like to buy?",
        validate: function(val) {
          return val > 0;
        }
      }
    ])
    .then(function(val) {
      checkIfShouldExit(val.choice);
      var quantity = parseInt(val.quantity);
      if (quantity > product.stock_quantity) {
        loadProducts();
        console.log("Insufficient quantity!");
      } else {
        makePurchases(product, quantity);
      }
    });
}
function makePurchases(product, quantity) {
  connection.query(
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product.item_id],
    function(error, res) {
      loadProducts();
    }
  );
}
function checkInventory(choice_id, inventory) {
  for (i = 0; i < inventory.length; i++) {
    if (inventory[i].item_id === choice_id) {
      return inventory[i];
    }
  }
  return null;
}
function checkIfShouldExit(choice) {
  if (choice === "q") {
    process.exit(0);
  }
}
