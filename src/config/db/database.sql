CREATE DATABASE IF NOT EXISTS ejemplodb;

USE ejemplodb;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT(10) NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) DEFAULT NULL,
    description VARCHAR(200) DEFAULT NULL,
    status VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO usuarios values ("Aris", "Joven 25","Vivo" ), ("Bello", "En pruebas","Algo"),("Martinez", "1235","Prueba");