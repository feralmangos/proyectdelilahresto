CREATE TABLE usuarios (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR (60) NOT NULL,
    nombre_apellido VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    tel VARCHAR (60) NOT NULL,
    direccion VARCHAR (255) NOT NULL,
    password  NOT NULL,
    es_admin boolean 
);

CREATE TABLE productos (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nombre_producto VARCHAR (60) NOT NULL,
    imagen VARCHAR (255) NOT NULL,
    precio INT NOT NULL,
);

CREATE TABLE pedidos (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    id_estado INT NOT NULL,
    dt DATETIME NOT NULL,
    id_usuario INT NOT NULL,
    card boolean
 );

 CREATE TABLE items(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     id_pedido INT NOT NULL,
     id_producto INT NOT NULL,
     cantidad INT NOT NULL
 );

 CREATE TABLE favoritos(
     ID INT PRIMARY KEY AUTO_INCREMENT,
     id_usuario INT NOT NULL,
     id_producto INT NOT NULL
 )

 CREATE TABLE estados(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    nombre_estado VARCHAR(60) 
 )





