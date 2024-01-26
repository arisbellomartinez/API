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

-- Insert data into the 'usuarios' table
INSERT INTO usuarios VALUES 
    ("Aris", "Joven 25", "Vivo"),
    ("Bello", "En pruebas", "Algo"),
    ("Martinez", "1235", "Prueba");
