CREATE DATABASE IF NOT EXISTS ejemplodb;

USE ejemplodb;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) DEFAULT NULL,
    cedula INT(20 ) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO usuarios values ("Aris", 123), ("Bello", 1234),("Martinez", 1235);