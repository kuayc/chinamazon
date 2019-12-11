const inquirer = require("inquirer");
class Programmer {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  printInfo() {
    console.log(`
   Name: ${this.userName}
   Position: ${this.password}
   `);
  }
}
inquirer
  .prompt([
    {
      name: "action",
      message: "Would you like to post or bid"
    }
  ])
  .then(function(answers) {
    if (answers.name === "bid") {
      const mysql = require("mysql");
      if (answers.name === "post") const mysql = require("mysql");
      const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "greatBayDB"
      });
    }
    function readProducts() {
      console.log("Selecting all products...\n");
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
      });
    }
  });
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "2579",
  database: "bamazonDB"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});
function createProduct() {
  console.log("Inserting a new product...\n");
  let query = connection.query(
    "INSERT INTO products SET ?",
    {
      item: "Vanilla",
      price: 5.0,
      quantity: 100
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " product inserted!\n");
      updateProduct();
    }
  );
  console.log(query.sql);
}
function updateProduct() {
  console.log("Updating all Rocky Road quantities...\n");
  var query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "vanilla"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products updated!\n");
      deleteProduct();
    }
  );
  console.log(query.sql);
}
function deleteProduct() {
  console.log("Deleting all strawberry icecream...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
      flavor: "strawberry"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products deleted!\n");
      readProducts();
    }
  );
}
function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
