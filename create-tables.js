const sequelize = require('./db/db');
(async function() {
    sequelize.query(`-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-06-2020 a las 02:14:55
-- Versión del servidor: 10.1.40-MariaDB
-- Versión de PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: delilah
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla estados
--

CREATE TABLE estados (
  ID int(11) NOT NULL,
  nombre_estado varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla estados
--

INSERT INTO estados (ID, nombre_estado) VALUES
(1, 'NUEVO'),
(2, 'CONFIRMADO'),
(3, 'PREPARANDO'),
(4, 'ENVIANDO'),
(5, 'CANCELADO'),
(6, 'ENTREGADO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla favoritos
--

CREATE TABLE favoritos (
  ID int(11) NOT NULL,
  id_usuario int(11) NOT NULL,
  id_producto int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla favoritos
--

INSERT INTO favoritos (ID, id_usuario, id_producto) VALUES
(1, 1, 1),
(2, 3, 3),
(3, 4, 5),
(4, 5, 1),
(5, 7, 2),
(6, 7, 6),
(7, 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla items
--

CREATE TABLE items (
  ID int(11) NOT NULL,
  id_pedido int(11) NOT NULL,
  id_producto int(11) NOT NULL,
  cantidad int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla items
--

INSERT INTO items (ID, id_pedido, id_producto, cantidad) VALUES
(1, 2, 1, 2),
(2, 1, 4, 4),
(3, 3, 2, 1),
(4, 1, 1, 2),
(5, 3, 2, 5),
(6, 3, 2, 5),
(7, 3, 2, 5),
(8, 4, 3, 2),
(9, 4, 2, 2),
(10, 12, 1, 1),
(12, 20, 1, 2),
(13, 21, 1, 2),
(14, 21, 1, 2),
(15, 22, 1, 2),
(16, 22, 1, 3),
(17, 22, 1, 2),
(18, 22, 1, 3),
(19, 24, 1, 2),
(20, 24, 1, 4),
(21, 25, 1, 2),
(22, 25, 1, 4),
(23, 26, 2, 3),
(24, 26, 1, 4),
(25, 26, 2, 3),
(26, 26, 1, 4),
(27, 28, 2, 3),
(28, 28, 1, 4),
(29, 28, 3, 3),
(30, 29, 2, 3),
(31, 29, 1, 4),
(32, 29, 3, 3),
(33, 30, 2, 2),
(34, 30, 1, 2),
(35, 30, 3, 2),
(36, 31, 2, 2),
(37, 31, 3, 2),
(38, 32, 6, 2),
(39, 32, 1, 2),
(40, 33, 2, 2),
(41, 33, 1, 4),
(42, 34, 1, 2),
(43, 34, 1, 2),
(44, 35, 1, 2),
(45, 35, 1, 1),
(46, 36, 1, 2),
(47, 36, 1, 1),
(48, 37, 1, 2),
(49, 37, 1, 4),
(50, 38, 1, 5),
(51, 38, 2, 4),
(52, 39, 1, 5),
(53, 39, 1, 4),
(54, 40, 1, 1),
(55, 40, 1, 2),
(56, 41, 1, 4),
(57, 41, 2, 2),
(58, 42, 1, 4),
(59, 42, 2, 2),
(60, 43, 1, 4),
(61, 43, 2, 2),
(62, 44, 1, 4),
(63, 44, 2, 2),
(64, 45, 1, 4),
(65, 45, 2, 2),
(66, 46, 1, 4),
(67, 46, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla pedidos
--

CREATE TABLE pedidos (
  ID int(11) NOT NULL,
  id_estado int(11) NOT NULL,
  dt datetime NOT NULL,
  id_usuario int(11) NOT NULL,
  card tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla pedidos
--

INSERT INTO pedidos (ID, id_estado, dt, id_usuario, card) VALUES
(1, 2, '2020-11-05 14:29:36', 1, 1),
(2, 2, '2020-11-05 15:29:36', 4, 0),
(3, 1, '2020-11-05 11:19:36', 1, 1),
(4, 1, '2020-11-05 14:29:36', 7, 0),
(5, 1, '2020-11-05 14:29:36', 2, 1),
(7, 1, '2020-11-05 14:27:36', 2, 0),
(27, 1, '2020-06-04 22:10:06', 2, 0),
(28, 1, '2020-06-04 22:36:47', 2, 1),
(29, 1, '2020-06-04 22:39:11', 2, 1),
(30, 1, '2020-06-04 22:47:27', 2, 1),
(31, 1, '2020-06-04 23:55:58', 2, 1),
(32, 1, '2020-06-05 01:53:54', 2, 0),
(33, 1, '2020-06-10 22:26:20', 7, 0),
(34, 1, '2020-06-10 22:29:26', 7, 0),
(35, 1, '2020-06-10 22:30:29', 7, 0),
(36, 1, '2020-06-10 22:30:47', 7, 0),
(37, 1, '2020-06-10 22:31:46', 7, 0),
(39, 1, '2020-06-10 22:38:53', 7, 0),
(40, 1, '2020-06-10 22:40:14', 7, 0),
(41, 1, '2020-06-10 23:15:58', 7, 0),
(42, 1, '2020-06-10 23:18:50', 7, 0),
(43, 1, '2020-06-10 23:20:20', 7, 0),
(44, 1, '2020-06-10 23:23:51', 7, 0),
(45, 1, '2020-06-10 23:26:05', 7, 0),
(46, 1, '2020-06-10 23:27:32', 7, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla productos
--

CREATE TABLE productos (
  ID int(11) NOT NULL,
  nombre_producto varchar(60) NOT NULL,
  imagen varchar(255) NOT NULL,
  PRECIO decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla productos
--

INSERT INTO productos (ID, nombre_producto, imagen, PRECIO) VALUES
(1, 'Hamburguesa', 'https://img.interempresas.net/fotos/1622791.jpeg', '180.00'),
(2, 'Pizza Muzzarella', 'https://rojoynegro.com.ar/pedidos/wp-content/uploads/2019/08/muzza-510x340.jpg', '240.00'),
(3, 'Milanesa de Carne', 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/08/como-cocinar-milanesas-de-pollo-sin-aceite.jpg', '175.00'),
(4, 'Patas de Pollo Fritas', 'https://t2.rg.ltmcdn.com/es/images/5/0/7/img_patitas_de_pollo_rebozadas_7705_600.jpg', '300.00'),
(5, 'Choripan Bonaerense', 'https://dla.cdncimeco.com/uploads/2019/10/image5dbb002e4461c.jpg', '50.00'),
(6, 'Empanada de queso Muzzarella', 'https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-empanadas-queso-empanadas-queso-empanadas-receta-empanadas-848x477.jpg', '280.00'),
(7, 'Salchicha hervida con miel', 'lolo.jpg', '98.00'),
(8, 'Empanada de Salmón de Muzzarella', 'URL.jpg', '280.00'),
(9, 'Lechuga', 'https://img.net/fotos/1622791.jpeg', '19.00'),
(10, 'Hamburguesa', 'https://img.interempresas.net/fotos/1622791.jpeg', '180.00'),
(11, 'Leechón al Vino Tinto', 'https://img.interempresas.net/fotos/1622791.jpeg', '580.00'),
(12, 'Salchichas con Mayonesa', 'https://img.interempresas.net/fotos/1622791.jpeg', '380.00'),
(13, 'Pan con Mayonesa', 'https://img.interempresas.net/fotos/1622791.jpeg', '180.00'),
(14, 'Miel con Salsa de Avena Rústica', 'https://img.interempresas.net/fotos/1622791.jpeg', '880.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla usuarios
--

CREATE TABLE usuarios (
  ID int(11) NOT NULL,
  nombre varchar(60) NOT NULL,
  nombre_apellido varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  tel varchar(60) NOT NULL,
  direccion varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  es_admin tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla usuarios
--

INSERT INTO usuarios (ID, nombre, nombre_apellido, email, tel, direccion, password, es_admin) VALUES
(1, 'joan89', 'Juan Rivers', 'joanrivers@gmail.com', '2494603366', 'Avenida Siempre Viva 266', '$2b$10$a.i6DEgLBMamWOXaRwAtKubD9hWQN0GypS53K/qlkbfKQlrt9WtZe', 0),
(2, 'Rombomondo', 'Ruben Blades', 'rblades@rblades.com', '249675876', 'Avenida Peron 1920', '$2b$10$8kDoMDT2nsm.cDgrEQY0JeGb3OnFsgeittN3.Em3TrqhXOJd87twq', 1),
(3, 'ramonaflowers', 'Ramona Flowers', 'ramonalaflores@gmail.com', '249786333', 'Lunghi 333', '$2b$10$i1cZnFRmWmKV/e.Sb0ZaFOtpoSRK1I1z8HbuFsUvSiCwJVX1ePKxS', 0),
(4, 'rodolf78', 'Rodolfo Napier', 'ralf.napier@gmail.com', '24983452', 'Los Aires Buenos 3456', '$2b$10$LtUyPTGw9A6woNwSo9e.0eipG1OFzCEpFNcnSIlIoehAAxdMwRoSS', 0),
(5, 'Flormen', 'Flor Menotti', 'fmenotti@gmail.com', '249453678', 'Rodriguez 963', '$2b$10$hpSe.4cgvWL12Ug.klX9gesD47Eb2XHa7Q4kiN5T0e2iBtqKeHmxG', 0),
(6, 'cris', 'Cris Fernandez', 'fernandez@gmail.com', '249453278', 'Juana Lombardi 367', '$2b$10$jsmBx.I2QY/zh4HAuJ/1yu1QLyWSCV6aMp8H.X0dxb7qBI0l.k7aa', 0),
(7, 'marta', 'Marta Tomillo', 'tomillo@gmail.com', '249452275', 'Lomo 1367', '$2b$10$oBHkH1wRX3J9oofh3Gi/tefL0WjTYJfUNaGGKRd8xSXkMcb90dqEG', 0),
(8, 'leona', 'lara Tomillo', 'Lara@gmail.com', '249222275', 'Lomo 1267', '$2b$10$Vd5K4dq3TTGM1aGMFPBGL.00BC6xqCbYVIoZT5Q48v0o7/JvXQd6C', 0),
(9, 'Rulo', 'Jorge Ramas', 'ramas@gmail.com', '249488275', 'Tomo 1367', '$2b$10$XDwFmM8NYv6uUnhZSblk9OLrTFYjbGfGVG4ZXVRGY4t4fsM9cdM2y', 0),
(10, 'Jeff', 'Myname', 'mynameisjeff@gmail.com', '249452275', 'myj 1367', '$2b$10$M6lM/.tANOPsSfBm8gsfh.pPqmCRpw40QsYvhY5DtSKx2zBW2zRrC', 0),
(11, 'Joff', 'Mynadame', 'mymameisjeff@gmail.com', '249452375', 'myf 1367', '$2b$10$ayxObgqwxqtMz5shQcJKfuwZUmyv8qO.K6MRs2Ke5HZEGAGSc7SM2', 0),
(12, 'Rudolph', 'Barals Don', 'mym@gmail.com', '2494532375', 'lol 1367', '$2b$10$tDpRC.eci0JA0iM02uw5T.fGKLSa3.zDAFmfmRCoYI7fyBtCZtUQq', 0),
(13, 'Radolph', 'Berals Dom', 'myt@gmail.com', '2494662375', 'lo 367', '$2b$10$VEeBb9XfnsjYRl4eFnV0U.lmKIVm/uGfL6RtPPJJxuQ4QfD.vNhpG', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla estados
--
ALTER TABLE estados
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla favoritos
--
ALTER TABLE favoritos
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla items
--
ALTER TABLE items
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla pedidos
--
ALTER TABLE pedidos
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla productos
--
ALTER TABLE productos
  ADD PRIMARY KEY (ID);

--
-- Indices de la tabla usuarios
--
ALTER TABLE usuarios
  ADD PRIMARY KEY (ID);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla estados
--
ALTER TABLE estados
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla favoritos
--
ALTER TABLE favoritos
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla items
--
ALTER TABLE items
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de la tabla pedidos
--
ALTER TABLE pedidos
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla productos
--
ALTER TABLE productos
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla usuarios
--
ALTER TABLE usuarios
  MODIFY ID int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;
`).then(resultados => console.log(resultados)).catch(e => console.log(e))
})();
console.log("dog")