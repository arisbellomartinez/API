-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS ejemplodb;

-- Use the created database
USE ejemplodb;

-- Create a table 'usuarios' if it doesn't exist
CREATE TABLE IF NOT EXISTS usuarios (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) DEFAULT NULL,
    description VARCHAR(200) DEFAULT NULL,
    status VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS auth (
    id INT(10) AUTO_INCREMENT,
    usuario VARCHAR(20) DEFAULT NULL,
    password VARCHAR(100) DEFAULT NULL,
    PRIMARY KEY (id)
);

-- Insert data into the 'usuarios' table
INSERT INTO usuarios VALUES 
    (1,"Aris", "Joven 25", "Vivo"),
    (2,"Bello", "En pruebas", "Algo"),
    (3,"Martinez", "1235", "Prueba");
