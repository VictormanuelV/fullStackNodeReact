CREATE DATABASE db_system;
USE db_system;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    email VARCHAR(100),
    pass VARCHAR(200),
    fono VARCHAR(9),
    latitud DECIMAL(10,6),
    longitud DECIMAL(10,6)
);

CREATE TABLE trabajador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    email VARCHAR(100),
    pass VARCHAR(200),
    fono VARCHAR(9),
    latitud DECIMAL(10,6),
    longitud DECIMAL(10,6)
);

CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT
);

CREATE TABLE necesidad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200),
    descripcion TEXT,
    fecha_pub TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_fin TIMESTAMP,
    id_cliente INT,
    id_cat INT,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id),
    FOREIGN KEY (id_cat) REFERENCES categoria(id)
);

CREATE TABLE trabajo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_ini TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_fin TIMESTAMP,
    id_trabajador INT,
    id_necesidad INT,
    puntaje INT,
    FOREIGN KEY (id_trabajador) REFERENCES trabajador(id),
    FOREIGN KEY (id_necesidad) REFERENCES necesidad(id)
);

CREATE TABLE especialidad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_trabajador INT,
    id_cat INT,
    nombre VARCHAR(200),
    FOREIGN KEY (id_trabajador) REFERENCES trabajador(id),
    FOREIGN KEY (id_cat) REFERENCES categoria(id)
);