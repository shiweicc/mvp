DROP DATABASE IF EXISTS recipes;
CREATE DATABASE recipes;

USE recipes;

DROP SCHEMA IF EXISTS categories;
CREATE TABLE categories (
  id INT NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
  -- UNIQUE (category_name)
);

DROP SCHEMA IF EXISTS meals;
CREATE TABLE meals (
  id INT NOT NULL AUTO_INCREMENT,
  meal_name VARCHAR(100) NOT NULL,
  instructions VARCHAR(1000),
  category VARCHAR(100),
  youtube VARCHAR(500),
  ingredients LONGTEXT,
  PRIMARY KEY (id)
);


  -- FOREIGN KEY (category_id) REFERENCES categories(id)