DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2018 Viper ACR", "Dodge", 180000, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2006 LFA", "Lexus", 250000, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1965 Mustang", "Ford", 80000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2006 Supra", "Toyota", 60000, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2018 NSX", "Acura", 85000, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2019 Bug", "VW", 30000, 5000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2020 M5", "BMW", 120000, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1920 Model T", "Ford", 250000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("1952 Type 52", "Bugatti", 5000000, 1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2020 Veyron", "Bugatti", 2000000, 4);
