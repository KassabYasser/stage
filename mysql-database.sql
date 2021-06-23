-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 22, 2021 at 04:36 PM
-- Server version: 8.0.19
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stage`
--

-- --------------------------------------------------------

--
-- Table structure for table `employe`
--

CREATE TABLE `employe` (
  `id_employe` varchar(254) NOT NULL,
  `nom` varchar(254) NOT NULL,
  `prenom` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `employe`
--

INSERT INTO `employe` (`id_employe`, `nom`, `prenom`) VALUES
('T100', 'Kassab', 'Yasser'),
('T101', 'Hajjam', 'Abdellah'),
('T6', 'mohammed', 'kassab');

-- --------------------------------------------------------

--
-- Table structure for table `fichedendrometrique`
--

CREATE TABLE `fichedendrometrique` (
  `ESSENCE` varchar(100) NOT NULL,
  `DEMASCLE` varchar(100) NOT NULL,
  `CODE` float(2,0) NOT NULL,
  `CLASSE` varchar(100) NOT NULL,
  `DATE_OBSERV` date NOT NULL,
  `FORET_NOM` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fichedendrometrique`
--

INSERT INTO `fichedendrometrique` (`ESSENCE`, `DEMASCLE`, `CODE`, `CLASSE`, `DATE_OBSERV`, `FORET_NOM`) VALUES
('1', '1', 1, '1', '2021-06-21', 'tanger'),
('1', '1', 1, '1', '2021-06-21', 'tanger'),
('1', '1', 1, '1', '2021-06-21', 'tanger');

-- --------------------------------------------------------

--
-- Table structure for table `fichedescription`
--

CREATE TABLE `fichedescription` (
  `ESSENCE` varchar(100) NOT NULL,
  `STDEV_CODE` varchar(100) NOT NULL,
  `COUV_CODE` float(1,0) NOT NULL,
  `FRUCTIFICATION` varchar(100) NOT NULL,
  `REGENERATION` varchar(100) NOT NULL,
  `SEMI_NB` float(5,0) NOT NULL,
  `ETAT_SANITAIRE` float(5,0) NOT NULL,
  `BOIS_GIS` float(1,0) NOT NULL,
  `ECIMAGE` float(3,0) NOT NULL,
  `H_MOY` float(3,0) NOT NULL,
  `C_MOY` float(3,0) NOT NULL,
  `SURFACE` float(3,0) NOT NULL,
  `BRIN_NB` float(3,0) NOT NULL,
  `SOUCHE_NB` float(3,0) NOT NULL,
  `DATE_OBSERV` date NOT NULL,
  `FORET_NOM` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fichedescription`
--

INSERT INTO `fichedescription` (`ESSENCE`, `STDEV_CODE`, `COUV_CODE`, `FRUCTIFICATION`, `REGENERATION`, `SEMI_NB`, `ETAT_SANITAIRE`, `BOIS_GIS`, `ECIMAGE`, `H_MOY`, `C_MOY`, `SURFACE`, `BRIN_NB`, `SOUCHE_NB`, `DATE_OBSERV`, `FORET_NOM`) VALUES
('1', '1', 1, '1', '1', 1, 1, 1, 1, 1, 1, 1, 1, 1, '2021-06-21', 'tanger'),
('1', '1', 1, '1', '1', 1, 1, 1, 1, 1, 1, 1, 1, 1, '2021-06-21', 'tanger'),
('1', '1', 1, '1', '1', 1, 1, 1, 1, 1, 1, 1, 1, 1, '2021-06-21', 'tanger'),
('1', '1', 1, '1', '1', 1, 1, 1, 1, 1, 1, 1, 1, 1, '2021-06-21', 'tanger');

-- --------------------------------------------------------

--
-- Table structure for table `ficheechantillont`
--

CREATE TABLE `ficheechantillont` (
  `ESSENCE` varchar(100) NOT NULL,
  `AECH_ETAGE` varchar(100) DEFAULT NULL,
  `AECH_C1` float(4,0) DEFAULT NULL,
  `AECH_C2` float(4,0) DEFAULT NULL,
  `AECH_EP1` float(4,0) DEFAULT NULL,
  `AECH_EP2` float(4,0) DEFAULT NULL,
  `AECH_LCERNES` float(4,0) DEFAULT NULL,
  `AECH_HT` float(4,0) DEFAULT NULL,
  `AECH_HF` float(4,0) DEFAULT NULL,
  `AECH_HDEM` float(4,0) DEFAULT NULL,
  `DATE_OBSERV` date NOT NULL,
  `FORET_NOM` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- --------------------------------------------------------

--
-- Table structure for table `fichelocalisation`
--

CREATE TABLE `fichelocalisation` (
  `DATE_OBSERV` date NOT NULL,
  `OBSERV_NOM` varchar(50) NOT NULL,
  `FORET_NOM` varchar(50) NOT NULL,
  `TRIAGE` varchar(100) NOT NULL,
  `STRATE` varchar(100) NOT NULL,
  `ALTITUDE` varchar(100) NOT NULL,
  `ORIENTATION` varchar(100) NOT NULL,
  `NBESSENCE` varchar(100) NOT NULL,
  `PARCELLE_NO` varchar(100) NOT NULL,
  `CANTON` varchar(100) NOT NULL,
  `PLACETTE_NO` varchar(100) NOT NULL,
  `PENTE` float(2,0) NOT NULL,
  `PROFONDEUR` float(1,0) NOT NULL,
  `ROCHE_MERE` float(2,0) NOT NULL,
  `AGE_MOY` float(2,0) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `latitude` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fichelocalisation`
--

INSERT INTO `fichelocalisation` (`DATE_OBSERV`, `OBSERV_NOM`, `FORET_NOM`, `TRIAGE`, `STRATE`, `ALTITUDE`, `ORIENTATION`, `NBESSENCE`, `PARCELLE_NO`, `CANTON`, `PLACETTE_NO`, `PENTE`, `PROFONDEUR`, `ROCHE_MERE`, `AGE_MOY`, `longitude`, `latitude`) VALUES
('2021-06-21', 'Kassab', 'tanger', '1', '1', '1', '1', '1', '1', '1', '1', 1, 1, 1, 1, '-7.3929254', '33.680422');

-- --------------------------------------------------------

--
-- Table structure for table `fihcedominant`
--

CREATE TABLE `fihcedominant` (
  `ESSENCE` varchar(100) NOT NULL,
  `ADOM_C` float(4,0) NOT NULL,
  `ADOM_AGE` float(4,0) NOT NULL,
  `ADOM_H` float(4,0) NOT NULL,
  `DATE_OBSERV` date NOT NULL,
  `FORET_NOM` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `fihcedominant`
--

INSERT INTO `fihcedominant` (`ESSENCE`, `ADOM_C`, `ADOM_AGE`, `ADOM_H`, `DATE_OBSERV`, `FORET_NOM`) VALUES
('1', 1, 1, 1, '2021-06-21', 'tanger'),
('1', 1, 1, 1, '2021-06-21', 'tanger');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id_employe` varchar(254) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id_employe`, `email`, `password`) VALUES
('T100', 'abdellahyatrib@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
('T100', 'kassabyasser15@gmail.com', '21232f297a57a5a743894a0e4a801fc3'),
('T6', 'watiyasser@gmail.com', '21232f297a57a5a743894a0e4a801fc3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employe`
--
ALTER TABLE `employe`
  ADD PRIMARY KEY (`id_employe`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`),
  ADD KEY `fk_1` (`id_employe`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `fk_1` FOREIGN KEY (`id_employe`) REFERENCES `employe` (`id_employe`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
