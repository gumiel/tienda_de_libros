-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-03-2021 a las 23:54:22
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda_libros`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autors`
--

CREATE TABLE `autors` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `nacionalidad` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autors`
--

INSERT INTO `autors` (`id`, `nombre`, `edad`, `nacionalidad`, `createdAt`, `updatedAt`) VALUES
(1, 'Albert Camus', 33, 'España', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Albert Camus', 33, 'España', '2021-03-24 21:51:58', '2021-03-24 21:51:58'),
(3, 'Henry Perez gumiel', 33, 'Boliviano', '2021-03-27 22:50:46', '2021-03-27 22:50:46'),
(4, 'Edgar Allan Poe', 54, 'Estado unidence', '2021-03-28 21:13:39', '2021-03-28 21:25:15'),
(5, 'Henry James', 83, 'Estado unidence', '2021-03-28 21:25:39', '2021-03-28 21:27:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carritos`
--

CREATE TABLE `carritos` (
  `id` int(11) NOT NULL,
  `nit` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carritos`
--

INSERT INTO `carritos` (`id`, `nit`, `name`, `createdAt`, `updatedAt`) VALUES
(1, NULL, NULL, '2021-03-27 18:59:12', '2021-03-27 18:59:12'),
(2, NULL, NULL, '2021-03-27 18:59:13', '2021-03-27 18:59:13'),
(3, NULL, NULL, '2021-03-27 19:00:36', '2021-03-27 19:00:36'),
(4, NULL, NULL, '2021-03-27 19:01:35', '2021-03-27 19:01:35'),
(5, NULL, NULL, '2021-03-27 19:02:12', '2021-03-27 19:02:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `autorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `titulo`, `descripcion`, `precio`, `createdAt`, `updatedAt`, `autorId`) VALUES
(3, 'la odisea', 'novela literaria900', '900.00', '0000-00-00 00:00:00', '2021-03-27 15:37:35', 1),
(6, NULL, NULL, NULL, '2021-03-27 15:55:57', '2021-03-27 15:55:57', NULL),
(7, NULL, NULL, NULL, '2021-03-27 15:56:35', '2021-03-27 15:56:35', NULL),
(8, NULL, NULL, NULL, '2021-03-27 15:57:06', '2021-03-27 15:57:06', NULL),
(9, NULL, NULL, NULL, '2021-03-27 15:57:18', '2021-03-27 15:57:18', NULL),
(10, 'la odisea111', 'novela literaria111', '111.00', '2021-03-27 15:58:45', '2021-03-27 23:11:35', 1),
(16, 'la odisea111', 'novela literaria111', '111.00', '2021-03-27 16:02:19', '2021-03-27 23:12:12', 1),
(17, 'la odisea111', 'novela literaria111', '111.00', '2021-03-27 16:03:13', '2021-03-27 16:03:13', NULL),
(18, 'la odisea111', 'novela literaria111', '111.00', '2021-03-27 16:03:36', '2021-03-27 16:03:36', NULL),
(19, 'la odisea111', 'novela literaria111', '111.00', '2021-03-27 16:03:59', '2021-03-27 16:03:59', NULL),
(20, 'la odisea111', 'novela literaria111', '111.00', '2021-03-27 16:04:48', '2021-03-27 16:04:48', NULL),
(21, 'la iliada', 'novela literaria', '211.00', '2021-03-28 20:32:05', '2021-03-28 21:07:19', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libro_carritos`
--

CREATE TABLE `libro_carritos` (
  `id` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `libroId` int(11) DEFAULT NULL,
  `carritoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libro_carritos`
--

INSERT INTO `libro_carritos` (`id`, `cantidad`, `createdAt`, `updatedAt`, `libroId`, `carritoId`) VALUES
(12, 5, '2021-03-28 20:57:23', '2021-03-28 20:57:23', 3, 1),
(13, 5, '2021-03-28 21:01:54', '2021-03-28 21:01:54', 3, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210324233103-create-autor.js'),
('20210324233130-create-libro.js'),
('20210324233141-create-libro-carrito.js'),
('20210324233147-create-carrito.js'),
('20210324235405-add-autorid-to-libro-associations.js'),
('20210325000541-add-libroid-to-libro_carrito-associations.js'),
('20210325000753-add-carritoid-to-libro_carrito-associations.js');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autors`
--
ALTER TABLE `autors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carritos`
--
ALTER TABLE `carritos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Libros_autorId_foreign_idx` (`autorId`);

--
-- Indices de la tabla `libro_carritos`
--
ALTER TABLE `libro_carritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Libro_carritos_libroId_foreign_idx` (`libroId`),
  ADD KEY `Libro_carritos_carritoId_foreign_idx` (`carritoId`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autors`
--
ALTER TABLE `autors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `carritos`
--
ALTER TABLE `carritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `libro_carritos`
--
ALTER TABLE `libro_carritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `Libros_autorId_foreign_idx` FOREIGN KEY (`autorId`) REFERENCES `autors` (`id`);

--
-- Filtros para la tabla `libro_carritos`
--
ALTER TABLE `libro_carritos`
  ADD CONSTRAINT `Libro_carritos_carritoId_foreign_idx` FOREIGN KEY (`carritoId`) REFERENCES `carritos` (`id`),
  ADD CONSTRAINT `Libro_carritos_libroId_foreign_idx` FOREIGN KEY (`libroId`) REFERENCES `libros` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
