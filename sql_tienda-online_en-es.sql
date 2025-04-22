-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2025 a las 12:47:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `phpmyadmin`
--
CREATE DATABASE IF NOT EXISTS `phpmyadmin` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `phpmyadmin`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__bookmark`
--

CREATE TABLE `pma__bookmark` (
  `id` int(10) UNSIGNED NOT NULL,
  `dbase` varchar(255) NOT NULL DEFAULT '',
  `user` varchar(255) NOT NULL DEFAULT '',
  `label` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `query` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Bookmarks';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__central_columns`
--

CREATE TABLE `pma__central_columns` (
  `db_name` varchar(64) NOT NULL,
  `col_name` varchar(64) NOT NULL,
  `col_type` varchar(64) NOT NULL,
  `col_length` text DEFAULT NULL,
  `col_collation` varchar(64) NOT NULL,
  `col_isNull` tinyint(1) NOT NULL,
  `col_extra` varchar(255) DEFAULT '',
  `col_default` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Central list of columns';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__column_info`
--

CREATE TABLE `pma__column_info` (
  `id` int(5) UNSIGNED NOT NULL,
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `column_name` varchar(64) NOT NULL DEFAULT '',
  `comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `mimetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `transformation` varchar(255) NOT NULL DEFAULT '',
  `transformation_options` varchar(255) NOT NULL DEFAULT '',
  `input_transformation` varchar(255) NOT NULL DEFAULT '',
  `input_transformation_options` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Column information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__designer_settings`
--

CREATE TABLE `pma__designer_settings` (
  `username` varchar(64) NOT NULL,
  `settings_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Settings related to Designer';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__export_templates`
--

CREATE TABLE `pma__export_templates` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL,
  `export_type` varchar(10) NOT NULL,
  `template_name` varchar(64) NOT NULL,
  `template_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved export templates';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__favorite`
--

CREATE TABLE `pma__favorite` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Favorite tables';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__history`
--

CREATE TABLE `pma__history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db` varchar(64) NOT NULL DEFAULT '',
  `table` varchar(64) NOT NULL DEFAULT '',
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp(),
  `sqlquery` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='SQL history for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__navigationhiding`
--

CREATE TABLE `pma__navigationhiding` (
  `username` varchar(64) NOT NULL,
  `item_name` varchar(64) NOT NULL,
  `item_type` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Hidden items of navigation tree';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__pdf_pages`
--

CREATE TABLE `pma__pdf_pages` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `page_nr` int(10) UNSIGNED NOT NULL,
  `page_descr` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='PDF relation pages for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__recent`
--

CREATE TABLE `pma__recent` (
  `username` varchar(64) NOT NULL,
  `tables` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Recently accessed tables';

--
-- Volcado de datos para la tabla `pma__recent`
--

INSERT INTO `pma__recent` (`username`, `tables`) VALUES
('root', '[{\"db\":\"plantas\",\"table\":\"plants\"},{\"db\":\"plantas_es\",\"table\":\"plantas_procesadas\"},{\"db\":\"plantas_es\",\"table\":\"plantas\"},{\"db\":\"plantas_es\",\"table\":\"plants\"},{\"db\":\"plantas\",\"table\":\"plant_tracker\"}]');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__relation`
--

CREATE TABLE `pma__relation` (
  `master_db` varchar(64) NOT NULL DEFAULT '',
  `master_table` varchar(64) NOT NULL DEFAULT '',
  `master_field` varchar(64) NOT NULL DEFAULT '',
  `foreign_db` varchar(64) NOT NULL DEFAULT '',
  `foreign_table` varchar(64) NOT NULL DEFAULT '',
  `foreign_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Relation table';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__savedsearches`
--

CREATE TABLE `pma__savedsearches` (
  `id` int(5) UNSIGNED NOT NULL,
  `username` varchar(64) NOT NULL DEFAULT '',
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `search_name` varchar(64) NOT NULL DEFAULT '',
  `search_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Saved searches';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_coords`
--

CREATE TABLE `pma__table_coords` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `pdf_page_number` int(11) NOT NULL DEFAULT 0,
  `x` float UNSIGNED NOT NULL DEFAULT 0,
  `y` float UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table coordinates for phpMyAdmin PDF output';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_info`
--

CREATE TABLE `pma__table_info` (
  `db_name` varchar(64) NOT NULL DEFAULT '',
  `table_name` varchar(64) NOT NULL DEFAULT '',
  `display_field` varchar(64) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Table information for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__table_uiprefs`
--

CREATE TABLE `pma__table_uiprefs` (
  `username` varchar(64) NOT NULL,
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `prefs` text NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Tables'' UI preferences';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__tracking`
--

CREATE TABLE `pma__tracking` (
  `db_name` varchar(64) NOT NULL,
  `table_name` varchar(64) NOT NULL,
  `version` int(10) UNSIGNED NOT NULL,
  `date_created` datetime NOT NULL,
  `date_updated` datetime NOT NULL,
  `schema_snapshot` text NOT NULL,
  `schema_sql` text DEFAULT NULL,
  `data_sql` longtext DEFAULT NULL,
  `tracking` set('UPDATE','REPLACE','INSERT','DELETE','TRUNCATE','CREATE DATABASE','ALTER DATABASE','DROP DATABASE','CREATE TABLE','ALTER TABLE','RENAME TABLE','DROP TABLE','CREATE INDEX','DROP INDEX','CREATE VIEW','ALTER VIEW','DROP VIEW') DEFAULT NULL,
  `tracking_active` int(1) UNSIGNED NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Database changes tracking for phpMyAdmin';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__userconfig`
--

CREATE TABLE `pma__userconfig` (
  `username` varchar(64) NOT NULL,
  `timevalue` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `config_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User preferences storage for phpMyAdmin';

--
-- Volcado de datos para la tabla `pma__userconfig`
--

INSERT INTO `pma__userconfig` (`username`, `timevalue`, `config_data`) VALUES
('root', '2025-04-22 09:14:04', '{\"Console\\/Mode\":\"collapse\",\"lang\":\"es\",\"NavigationWidth\":361}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__usergroups`
--

CREATE TABLE `pma__usergroups` (
  `usergroup` varchar(64) NOT NULL,
  `tab` varchar(64) NOT NULL,
  `allowed` enum('Y','N') NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='User groups with configured menu items';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pma__users`
--

CREATE TABLE `pma__users` (
  `username` varchar(64) NOT NULL,
  `usergroup` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Users and their assignments to user groups';

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pma__central_columns`
--
ALTER TABLE `pma__central_columns`
  ADD PRIMARY KEY (`db_name`,`col_name`);

--
-- Indices de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `db_name` (`db_name`,`table_name`,`column_name`);

--
-- Indices de la tabla `pma__designer_settings`
--
ALTER TABLE `pma__designer_settings`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_user_type_template` (`username`,`export_type`,`template_name`);

--
-- Indices de la tabla `pma__favorite`
--
ALTER TABLE `pma__favorite`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `username` (`username`,`db`,`table`,`timevalue`);

--
-- Indices de la tabla `pma__navigationhiding`
--
ALTER TABLE `pma__navigationhiding`
  ADD PRIMARY KEY (`username`,`item_name`,`item_type`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  ADD PRIMARY KEY (`page_nr`),
  ADD KEY `db_name` (`db_name`);

--
-- Indices de la tabla `pma__recent`
--
ALTER TABLE `pma__recent`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__relation`
--
ALTER TABLE `pma__relation`
  ADD PRIMARY KEY (`master_db`,`master_table`,`master_field`),
  ADD KEY `foreign_field` (`foreign_db`,`foreign_table`);

--
-- Indices de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `u_savedsearches_username_dbname` (`username`,`db_name`,`search_name`);

--
-- Indices de la tabla `pma__table_coords`
--
ALTER TABLE `pma__table_coords`
  ADD PRIMARY KEY (`db_name`,`table_name`,`pdf_page_number`);

--
-- Indices de la tabla `pma__table_info`
--
ALTER TABLE `pma__table_info`
  ADD PRIMARY KEY (`db_name`,`table_name`);

--
-- Indices de la tabla `pma__table_uiprefs`
--
ALTER TABLE `pma__table_uiprefs`
  ADD PRIMARY KEY (`username`,`db_name`,`table_name`);

--
-- Indices de la tabla `pma__tracking`
--
ALTER TABLE `pma__tracking`
  ADD PRIMARY KEY (`db_name`,`table_name`,`version`);

--
-- Indices de la tabla `pma__userconfig`
--
ALTER TABLE `pma__userconfig`
  ADD PRIMARY KEY (`username`);

--
-- Indices de la tabla `pma__usergroups`
--
ALTER TABLE `pma__usergroups`
  ADD PRIMARY KEY (`usergroup`,`tab`,`allowed`);

--
-- Indices de la tabla `pma__users`
--
ALTER TABLE `pma__users`
  ADD PRIMARY KEY (`username`,`usergroup`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pma__bookmark`
--
ALTER TABLE `pma__bookmark`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__column_info`
--
ALTER TABLE `pma__column_info`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__export_templates`
--
ALTER TABLE `pma__export_templates`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__history`
--
ALTER TABLE `pma__history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__pdf_pages`
--
ALTER TABLE `pma__pdf_pages`
  MODIFY `page_nr` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pma__savedsearches`
--
ALTER TABLE `pma__savedsearches`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- Base de datos: `plantas`
--
CREATE DATABASE IF NOT EXISTS `plantas` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `plantas`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plants`
--

CREATE TABLE `plants` (
  `id` int(11) NOT NULL,
  `plant_id` int(11) NOT NULL,
  `common_name` varchar(255) DEFAULT NULL,
  `scientific_name` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`scientific_name`)),
  `family` varchar(255) DEFAULT NULL,
  `origin` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`origin`)),
  `type` varchar(255) DEFAULT NULL,
  `cycle` varchar(100) DEFAULT NULL,
  `watering` varchar(100) DEFAULT NULL,
  `sunlight` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`sunlight`)),
  `care_level` varchar(100) DEFAULT NULL,
  `growth_rate` varchar(100) DEFAULT NULL,
  `maintenance_level` varchar(100) DEFAULT NULL,
  `flowering_season` varchar(255) DEFAULT NULL,
  `flower_color` varchar(255) DEFAULT NULL,
  `leaf_color` varchar(255) DEFAULT NULL,
  `height` decimal(10,2) DEFAULT NULL,
  `height_unit` varchar(20) DEFAULT NULL,
  `spread` decimal(10,2) DEFAULT NULL,
  `spread_unit` varchar(20) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `soil` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`soil`)),
  `propagation` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`propagation`)),
  `hardiness_min` int(11) DEFAULT NULL,
  `hardiness_max` int(11) DEFAULT NULL,
  `indoor` tinyint(1) DEFAULT NULL,
  `poisonous_to_humans` tinyint(1) DEFAULT NULL,
  `poisonous_to_pets` tinyint(1) DEFAULT NULL,
  `edible_fruit` tinyint(1) DEFAULT NULL,
  `harvest_season` varchar(255) DEFAULT NULL,
  `fruit_nutritional_value` text DEFAULT NULL,
  `attracts` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`attracts`)),
  `pest_susceptibility` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`pest_susceptibility`)),
  `drought_tolerant` tinyint(1) DEFAULT NULL,
  `flowers` tinyint(1) DEFAULT NULL,
  `hardiness_location_map` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `plants`
--

INSERT INTO `plants` (`id`, `plant_id`, `common_name`, `scientific_name`, `family`, `origin`, `type`, `cycle`, `watering`, `sunlight`, `care_level`, `growth_rate`, `maintenance_level`, `flowering_season`, `flower_color`, `leaf_color`, `height`, `height_unit`, `spread`, `spread_unit`, `description`, `soil`, `propagation`, `hardiness_min`, `hardiness_max`, `indoor`, `poisonous_to_humans`, `poisonous_to_pets`, `edible_fruit`, `harvest_season`, `fruit_nutritional_value`, `attracts`, `pest_susceptibility`, `drought_tolerant`, `flowers`, `hardiness_location_map`, `created_at`) VALUES
(2, 1, 'European Silver Fir', '[\"Abies alba\"]', NULL, '[\"Austria\",\"Germany\",\"Switzerland\",\"France\",\"Italy\",\"Slovenia\",\"Croatia\",\"Bosnia and Herzegovina\",\"Serbia\",\"Montenegro\",\"Albania\",\"Bulgaria\",\"Romania\",\"Ukraine\",\"Poland\",\"Czech Republic\",\"Slovakia\",\"Hungary\"]', 'tree', 'Perennial', 'Frequent', '[\"full sun\"]', 'Medium', 'High', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'European Silver Fir (Abies alba) is an amazing coniferous species native to mountainous regions of central Europe and the Balkans. It is an evergreen tree with a narrow, pyramidal shape and long, soft needles. Its bark is scaly grey-brown and its branches are highly ornamental due to its conical-shaped silver-tinged needles. It is pruned for use as an ornamental evergreen hedging and screening plant, and is also popular for use as a Christmas tree. Young trees grow quickly and have strong, flexible branches which makes them perfect for use as windbreaks. The European Silver Fir is an impressive species, making it ideal for gardens and public spaces.', '[]', '[\"Cutting\",\"Grafting Propagation\",\"Layering Propagation\",\"Seed Propagation\",\"Air Layering Propagation\",\"Tissue Culture\"]', 7, 7, 0, 0, 0, 0, NULL, NULL, '[]', '[]', NULL, NULL, NULL, '2025-04-16 10:41:39'),
(3, 2, 'Pyramidalis Silver Fir', '[\"Abies alba \'Pyramidalis\'\"]', NULL, '[\"Austria\",\"Germany\",\"Switzerland\",\"Italy\",\"France\",\"Slovenia\",\"Croatia\"]', 'tree', 'Perennial', 'Average', '[\"full sun\"]', 'Medium', 'Low', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Pyramidalis Silver Fir (Abies alba \'Pyramidalis\') is an amazing coniferous tree species. Its narrow, elegant pyramidal shape makes it ideal for landscapes with limited space. This species features bright silver-green foliage year-round and distinctive yellowish brown cones that hold its unique shape for years. It also displays purple-tinged shoots in the spring and a showy red bark in the winter. Its slow growth and hardiness make it an ideal addition to any landscape. The Pyramidalis Silver Fir also requires minimal maintenance and can be an excellent companion for many other plants in the garden. From small yards to large gardens, this species will create a majestic and interesting landscape.', '[]', '[\"Cutting\",\"Grafting Propagation\",\"Layering Propagation\",\"Seed Propagation\"]', 4, 4, 0, 0, 0, 0, NULL, NULL, '[]', '[]', NULL, NULL, NULL, '2025-04-16 10:51:16'),
(4, 3, 'White Fir', '[\"Abies concolor\"]', 'Pinaceae', '[\"Western United States\",\"Mexico\"]', 'tree', 'Perennial', 'Average', '[\"Full sun\",\"part shade\"]', 'Moderate', 'Low', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'White Fir (Abies concolor) is an amazing evergreen tree species found in the western United States. It has a distinct white bark that fades to a yellowish hue on the lower branches and a graceful, conical shape. The beautiful Blue-green needles of White Fir are soft and tufted at the end and release a pleasant Christmas-like aroma when crushed. This sturdy species can grow up to 300 feet tall and over 140 years old, making it one of the longest living species in the world. It is highly adaptable, drought-tolerant, and very low maintenance with minimal pruning requirements. White Fir is an excellent choice for privacy screens, windbreaks, and living Christmas trees.', '[\"Acidic\",\" Rocky \",\" gravelly \",\" dry\",\" Well-drained\"]', '[\"Seed Propagation\",\"Hardwood Cuttings\"]', 3, 3, 0, 0, 0, 0, NULL, NULL, '[]', '[\"Aphids\",\"adelgids\",\" Canker\",\"sap rot\",\" Dieback\",\" Root rot\",\"  Pest resistant\",\" Disease resistant \"]', NULL, NULL, NULL, '2025-04-16 11:15:03'),
(5, 4, 'Candicans White Fir', '[\"Abies concolor \'Candicans\'\"]', NULL, '[\"United States\"]', 'tree', 'Perennial', 'Average', '[\"full sun\"]', 'Medium', 'Low', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Candicans White Fir is one of the most amazing species of fir tree. Its vibrant, powdery-white needles make it a real show-stopper in the winter and spring. The light color is also resistant to bronzing or discoloration, so the brilliant hue is maintained for many years. It also has a unique branch structure with a strong central leader and shorter lateral branches creating an eye-catching silhouette. This species is hardy and tolerant to a variety of soil types, making it a great choice for difficult areas. Its fast growth rate creates an impressive display quickly, making it an excellent choice to add curb appeal to your landscape.', '[]', '[\"Cutting\",\"Grafting Propagation\",\"Layering Propagation\",\"Air Layering Propagation\",\"Seed Propagation\"]', 4, 4, 0, 0, 0, 0, NULL, NULL, '[]', '[]', NULL, NULL, NULL, '2025-04-16 11:18:23'),
(6, 5, 'Fraser Fir', '[\"Abies fraseri\"]', 'Pinaceae', '[\"Southeastern United States\"]', 'tree', 'Perennial', 'Frequent', '[\"full sun\",\"part shade\",\"filtered shade\"]', 'Medium', 'Moderate', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Fraser Fir (Abies fraseri) is an amazing tree species with many great qualities. It is a dense evergreen conifer native to the Appalachian mountains. Its pyramidal shape and glossy dark green needles, that curve upward, make it a beautiful and popular Christmas tree. Its needles are short, soft, flat and pleasant to the touch. It has been found to be highly resistant to pests, diseases, and environmental stress. Additionally, it has superior winter hardiness and a strong wood that produces very little sap. This incredible species is perfect for a variety of evergreen applications and is guaranteed to bring a unique and beautiful look to any landscape.', '[\"Well-drained\"]', '[\"Seed Propagation\",\"Seed Propagation\",\"Seed Propagation\",\"Cutting\",\"Grafting Propagation\",\"Layering Propagation\",\"Tissue Culture\"]', 6, 6, 0, 0, 0, 0, NULL, NULL, '[]', '[\"Aphids\",\"adelgids\",\"  Pest resistant\",\" Disease resistant \"]', NULL, NULL, NULL, '2025-04-21 10:32:03'),
(7, 6, 'Golden Korean Fir', '[\"Abies koreana \'Aurea\'\"]', 'Pinaceae', '[\"North and South Korea\"]', 'tree', 'Perennial', 'Average', '[\"Full sun\",\"part shade\"]', 'Medium', 'Low', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'The Golden Korean Fir is truly awe inspiring. Its stunning golden-green foliage and soft pink cones make it a majestic wonder to behold. This evergreen tree grows quickly and is remarkably tough and resistant to brittleness. Its branches form a distinctive cone shape that gives it a modern, contemporary look. Its needles are soft and full of pleasant aroma. This amazing specimen requires minimal maintenance and is an ideal focal point for landscaping and garden design. Its unique foliage, easy upkeep and attitude of durability make it a stunning and reliable addition to any garden.', '[\"Well-drained\"]', '[\"Cutting\",\"Grafting Propagation\",\"Layering Propagation\",\"Seed Propagation\",\"Air Layering Propagation\"]', 6, 6, 0, 0, 0, 0, NULL, NULL, '[]', '[\"Aphids\",\"adelgids\",\" Blight\",\"needle cast\",\" Caterpillar\",\"cutworm\",\" Root rot\",\" Rust\",\"  Pest resistant\",\" Disease resistant\",\" Deer resistant\",\" Drought resistant \"]', NULL, NULL, NULL, '2025-04-22 10:32:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plant_tracker`
--

CREATE TABLE `plant_tracker` (
  `id` int(11) NOT NULL,
  `last_plant_id` int(11) NOT NULL DEFAULT 0,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `plant_tracker`
--

INSERT INTO `plant_tracker` (`id`, `last_plant_id`, `updated_at`) VALUES
(2, 6, '2025-04-22 10:32:02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `plants`
--
ALTER TABLE `plants`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plant_tracker`
--
ALTER TABLE `plant_tracker`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `plants`
--
ALTER TABLE `plants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `plant_tracker`
--
ALTER TABLE `plant_tracker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Base de datos: `plantas_es`
--
CREATE DATABASE IF NOT EXISTS `plantas_es` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `plantas_es`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas`
--

CREATE TABLE `plantas` (
  `id` int(11) NOT NULL,
  `id_planta` int(11) NOT NULL,
  `nombre_comun` varchar(255) DEFAULT NULL,
  `nombre_cientifico` text DEFAULT NULL,
  `familia` varchar(255) DEFAULT NULL,
  `origen` text DEFAULT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `ciclo` varchar(100) DEFAULT NULL,
  `riego` varchar(100) DEFAULT NULL,
  `luz_solar` text DEFAULT NULL,
  `nivel_cuidado` varchar(100) DEFAULT NULL,
  `velocidad_crecimiento` varchar(100) DEFAULT NULL,
  `nivel_mantenimiento` varchar(100) DEFAULT NULL,
  `temporada_floracion` varchar(255) DEFAULT NULL,
  `color_flor` varchar(255) DEFAULT NULL,
  `color_hojas` varchar(255) DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `unidad_altura` varchar(20) DEFAULT NULL,
  `extension` float DEFAULT NULL,
  `unidad_extension` varchar(20) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `suelo` text DEFAULT NULL,
  `propagacion` text DEFAULT NULL,
  `resistencia_min` int(11) DEFAULT NULL,
  `resistencia_max` int(11) DEFAULT NULL,
  `interior` tinyint(1) DEFAULT NULL,
  `venenosa_humanos` tinyint(1) DEFAULT NULL,
  `venenosa_mascotas` tinyint(1) DEFAULT NULL,
  `fruto_comestible` tinyint(1) DEFAULT NULL,
  `temporada_cosecha` varchar(255) DEFAULT NULL,
  `valor_nutricional_fruto` text DEFAULT NULL,
  `atrae` text DEFAULT NULL,
  `susceptibilidad_plagas` text DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `plantas`
--

INSERT INTO `plantas` (`id`, `id_planta`, `nombre_comun`, `nombre_cientifico`, `familia`, `origen`, `tipo`, `ciclo`, `riego`, `luz_solar`, `nivel_cuidado`, `velocidad_crecimiento`, `nivel_mantenimiento`, `temporada_floracion`, `color_flor`, `color_hojas`, `altura`, `unidad_altura`, `extension`, `unidad_extension`, `descripcion`, `suelo`, `propagacion`, `resistencia_min`, `resistencia_max`, `interior`, `venenosa_humanos`, `venenosa_mascotas`, `fruto_comestible`, `temporada_cosecha`, `valor_nutricional_fruto`, `atrae`, `susceptibilidad_plagas`, `fecha_creacion`) VALUES
(3, 401, 'Abelia brillante', '[\"Abelia grandiflora \'Hopleys\' MISS LEMON\"]', 'Caprifoliaceae', '[\"China\"]', 'Arbusto cadáver', 'Perenne', 'Promedio', '[\"Sol completo\",\"tono de pieza\"]', 'Medio', 'Alto', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Glossy Abelia (Abelia Grandiflora \'Miss\' Miss Lemon) es una especie de planta increíble que tiene mucho que ofrecer. ', '[]', '[\"Propagaci\\u00f3n del tallo\",\"Propagaci\\u00f3n de capas\",\"Divisi\\u00f3n\",\"Propagaci\\u00f3n de injerto\"]', 6, 9, 0, 0, 0, 0, NULL, NULL, '[]', '[]', '2025-04-22 09:07:23'),
(4, 402, 'Abelia brillante', '[\"Abelia grandiflora \'Kaleidoscope\'\"]', 'Caprifoliaceae', '[\"China\"]', 'Arbusto cadáver', 'Perenne', 'Promedio', '[\"Sol completo\",\"tono de pieza\"]', 'Medio', 'Bajo', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Glossy Abelia (Abelia grandiflora \'Kaleidoscope\') es uno de los arbustos florecientes más hermosos. ', '[]', '[\"Corte\",\"Propagaci\\u00f3n de capas\",\"Propagaci\\u00f3n de injerto\",\"Divisi\\u00f3n\",\"Propagaci\\u00f3n de semillas\"]', 5, 9, 0, 0, 0, 0, NULL, NULL, '[]', '[]', '2025-04-22 09:08:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantas_procesadas`
--

CREATE TABLE `plantas_procesadas` (
  `id` int(11) NOT NULL,
  `plant_id` int(11) NOT NULL,
  `fecha_procesado` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `plantas_procesadas`
--

INSERT INTO `plantas_procesadas` (`id`, `plant_id`, `fecha_procesado`) VALUES
(1, 401, '2025-04-22 09:07:23'),
(2, 402, '2025-04-22 09:08:29');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `plantas`
--
ALTER TABLE `plantas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `plantas_procesadas`
--
ALTER TABLE `plantas_procesadas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `plant_id` (`plant_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `plantas`
--
ALTER TABLE `plantas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `plantas_procesadas`
--
ALTER TABLE `plantas_procesadas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Base de datos: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
