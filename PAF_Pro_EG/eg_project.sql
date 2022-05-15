-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220507.f68a18df64
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 15, 2022 at 12:48 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eg_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `billing`
--

CREATE TABLE `billing` (
  `B_ID` int(11) NOT NULL,
  `B_Cus_ID` varchar(20) NOT NULL,
  `B_Cus_Name` varchar(50) NOT NULL,
  `B_Cus_Email` varchar(50) NOT NULL,
  `B_Cus_Contact` varchar(10) NOT NULL,
  `B_Use_Points` double NOT NULL,
  `B_Use_Val` double NOT NULL,
  `B_Add_Charge` double NOT NULL,
  `B_Prev_Outsand` double NOT NULL,
  `B_Tot_Amt_Pay` double NOT NULL,
  `B_Red_Nor` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `billing`
--

INSERT INTO `billing` (`B_ID`, `B_Cus_ID`, `B_Cus_Name`, `B_Cus_Email`, `B_Cus_Contact`, `B_Use_Points`, `B_Use_Val`, `B_Add_Charge`, `B_Prev_Outsand`, `B_Tot_Amt_Pay`, `B_Red_Nor`) VALUES
(1, '1000', 'Mr.Sandaruwan Rajapaksha', 'sandaruwan@gmail.com', '0778020500', 100, 2000, 1000, 2000, 5000, 'Normal'),
(2, '2000', 'Miss.Lihini Lekani', 'lihini@gmail.com', '0771234567', 200, 4000, 1000, 3000, 8000, 'Normal'),
(3, '3000', 'Mr.Nimal Perera', 'nimal@gmail.com', '0119876543', 300, 6000, 1000, 3000, 10000, 'Red'),
(4, '4000', 'Miss.Nethmi Fernando', 'nethmi@gmail.com', '0782864537', 400, 8000, 1000, 5000, 14000, 'Red');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `billing`
--
ALTER TABLE `billing`
  ADD PRIMARY KEY (`B_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `billing`
--
ALTER TABLE `billing`
  MODIFY `B_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



