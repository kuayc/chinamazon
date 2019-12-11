DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;
CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(35),
department_name VARCHAR (15),
price DECIMAL (10,2),
stock_quantity INT(14),
PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 500, 60 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple", "Produce", 600, 2 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sweater", "Clothes", 700, 75 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dress", "Clothes", 800, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tablet", "Electronics", 900, 67 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shoes", "Clothes", 100, 24 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Smart Phone", "Electronics", 1000, 50 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Camera", "Electronics", 2000, 30 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Curtains", "Home", 100, 78 );
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Boots", "Clothes", 200, 49 );



