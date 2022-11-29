-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-11-2022 a las 13:39:09
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_sitio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Gran Hermano 2022: el desgarrador llanto de Juan, tras hablar cara a cara con su hijo', 'El último eliminado del reality no pudo contener las lágrimas al hacer una videollamada con el joven que vive en España', 'Juan Reverdito, Daniela Celis, Agustín Guardis, Juan Ignacio Nacho Castañares y Walter Santiago, Alfa, se enfrentaron este domingo en una nueva gala de eliminación de Gran Hermano. De a poco durante toda la noche Santiago Del Moro fue anunciando quiénes eran los salvados por el púbico, hasta que al rededor de las 12.00 recibió al cuarto eliminado del juego que reabrió sus puertas luego de siete años, nuevamente por la pantalla de Telefe.'),
(2, 'Gran Hermano 2022: el desgarrador llanto de Juan, tras hablar cara a cara con su hijo', 'El último eliminado del reality no pudo contener las lágrimas al hacer una videollamada con el joven que vive en España', 'Juan Reverdito, Daniela Celis, Agustín Guardis, Juan Ignacio Nacho Castañares y Walter Santiago, Alfa, se enfrentaron este domingo en una nueva gala de eliminación de Gran Hermano. De a poco durante toda la noche Santiago Del Moro fue anunciando quiénes eran los salvados por el púbico, hasta que al rededor de las 12.00 recibió al cuarto eliminado del juego que reabrió sus puertas luego de siete años, nuevamente por la pantalla de Telefe.'),
(3, 'prueba', '123', '456'),
(4, 'prueba', '123', '456'),
(5, 'prueba', '123', '456'),
(6, 'prueba', '123456', '1235555'),
(7, 'prueba2', '123456', '123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(250) NOT NULL,
  `precio` varchar(10) NOT NULL,
  `descripcion` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `precio`, `descripcion`, `img_id`) VALUES
(9, 'Almohadón Foil dorado', '$3200', '<h4>Funda + almohadón (opcional) 45 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo\r\nEstampado de ambos lados con aplicación de foil dorado en forma de Relleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Lavar a mano, no frotar.\r\nCOMO ES UN PRODUCTO HECHO A MANO EL ESTAMPADO VARÍA ENTRE UNIDADES.', 'gm3crlenbh14y8dzft7p'),
(12, 'Almohadón Foil rosado', '$3200', '<h4>Funda + almohadón (opcional) 45 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo\r\nEstampado de ambos lados con aplicación de foil dorado en forma de Relleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Lavar a mano, no frotar.\r\nCOMO ES UN PRODUCTO HECHO A MANO EL ESTAMPADO VARÍA ENTRE UNIDADES.', 'l6pkbyd8thwdp4071awe'),
(13, 'Amohadón Red tejida', '$3200', '<h4>Funda + almohadón (opcional) 55 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo.\r\nFrente con red de algodón tejida en telar color crudo, sobre tussor color crudo\r\nRelleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Lavar a mano, no frotar.\r\nCOMO ES UN PRODUCTO HECHO A MANO EL ESTAMPADO VARÍA ENTRE UNIDADES.', 'ry3yxfoetxhpvgu63dy0'),
(14, 'Almohadón a rayas negro', '$2800', '<h4>Funda + almohadón (opcional) 45 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo\r\nEstampado de ambos lados.\r\nRelleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Se puede lavar en lavarropas (preferible a mano).\r\nCOMO ES UN PRODUCTO HECHO A MANO LA UBICACIÓN DE LA ESTAMPA VARÍA ENTRE FUNDAS', 'p7yxxyevqgoeoumeih7h'),
(15, 'Almohadón a rayas rosa', '$2800', '<h4>Funda + almohadón (opcional) 45 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo\r\nEstampado de ambos lados.\r\nRelleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Se puede lavar en lavarropas (preferible a mano).\r\nCOMO ES UN PRODUCTO HECHO A MANO LA UBICACIÓN DE LA ESTAMPA VARÍA ENTRE FUNDAS', 'ubo6gazd6tf6y6lirove'),
(16, 'Almohadón Palmas curry', '$2800', '<h4>Funda + almohadón (opcional) 45 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo\r\nEstampado de ambos lados.\r\nRelleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Se puede lavar en lavarropas (preferible a mano).\r\nCOMO ES UN PRODUCTO HECHO A MANO LA UBICACIÓN DE LA ESTAMPA VARÍA ENTRE FUNDAS.', 'rwr4fm3ugplcnaazvbf6'),
(17, 'Almohadón Palmas Pink', '$2800', '<h4>Funda + almohadón (opcional) 45 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo\r\nEstampado de ambos lados.\r\nRelleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Se puede lavar en lavarropas (preferible a mano).\r\nCOMO ES UN PRODUCTO HECHO A MANO LA UBICACIÓN DE LA ESTAMPA VARÍA ENTRE FUNDAS.', 'qelqch5sscgyb3wsbj6y'),
(18, 'Almohadón Palmas Verde', '$2800', '<h4>Funda + almohadón (opcional) 45 cm x 45 cm</h4>\r\nFunda con cierre, tela 100% algodón color crudo\r\nEstampado de ambos lados.\r\nRelleno de guata y vellón siliconado en funda de friselina (opcional).\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Se puede lavar en lavarropas (preferible a mano).\r\nCOMO ES UN PRODUCTO HECHO A MANO LA UBICACIÓN DE LA ESTAMPA VARÍA ENTRE FUNDAS.', 'yyeo8uvr6uxxil2gzbm5'),
(19, 'Contenedor Flor oro', '$1500', '<h4>Contenedor de tela 20cm x 20cm</h4>\r\nEstampado a mano en color azul marino con detalles en foil dorado, tela 100% algodón, color crudo\r\nReforzado con entretela para dar cuerpo.\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Se puede lavar en lavarropas (preferible a mano), no frotar.\r\nCOMO ES UN PRODUCTO HECHO A MANO LA UBICACIÓN DE LA ESTAMPA VARÍA ENTRE UNIDADES.', 'zvps2rgvjzg7oqggpbd8'),
(20, 'Contenedor Flor', '$1200', '<h4>Contenedor de tela 20cm x 20cm</h4>\r\nEstampado a mano en color azul marino, tela 100% algodón, color crudo\r\nReforzado con entretela para dar cuerpo.\r\nCUIDADOS:\r\n-Lavar con agua fría.\r\n-No usar blanqueadores.\r\n-Planchar del revés.\r\n-Se puede lavar en lavarropas (preferible a mano), no frotar.\r\nCOMO ES UN PRODUCTO HECHO A MANO LA UBICACIÓN DE LA ESTAMPA VARÍA ENTRE UNIDADES.\r\n', 'm5icb2efyy8dkzorceab');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'delfina', 'e10adc3949ba59abbe56e057f20f883e');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
