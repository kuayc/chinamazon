import { createConnection } from "mysql";
import { prompt } from "inquirer";
import "console.table";
const connection = createConnection({
  host: "localhost",
  // Your port; if not 3306
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "2579",
  database: "bamazonDB"
});
connection.connect(function(err) {
  if (err) {
    console.log("connected as id " + err.stack);
  }
  loadManagerMenu();
});
function loadManagerMenu() {
  connection.query("SELECT * FROM products", function(error, res) {
    loadManagerOptions(res);
  });
}
function loadManagerOptions(products) {
  prompt({
    type: "list",
    name: "choice",
    choices: [
      "viewProductsForSale",
      "viewLowInventory",
      "addToInventory",
      "addNewProduct",
      "quit"
    ],
    message: "What would you like to do?"
  }).then(function(val) {
    switch (val.choice) {
      case "viewProductsForSale":
        console.table(products);
        loadManagerMenu();
        break;
      case "viewLowInventory":
        loadLowInvetory();
        break;
      case "addToInventory":
        addToInventory(products);
        break;
      case "addNewProduct":
        askManagerForNewProduct(products);
        break;
      default:
        process.exit(0);
        break;
    }
  });
}
function loadLowInventory() {
  connection.query("SELECT * FROM products WHERE stock_quanity <= 5", function(
    err,
    res
  ) {
    if (err) throw err;
    console.table(res);
    loadManagerMenu();
  });
}
function addToInventory(inventory) {
  console.table(inventory);
  prompt([
    {
      type: "input",
      name: "choice",
      message:
        "What is the ID of the item of the item you would like to add to the inventory?",
      validate: function(val) {
        return !isNaN(val);
      }
    }
  ]).then(function(val) {
    var choiceID = parseInt(val.choice);
    var product = checkInventory(choiceID);
    if (product) {
      askManagerForNewProduct(product);
    } else {
      loadManagerMenu();
    }
  });
}
function quit(choice) {
  if (choice === "q") {
    process.exit(0);
  }
}
