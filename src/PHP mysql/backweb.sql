-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2018-01-18 09:44:43
-- 服务器版本： 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backweb`
--

-- --------------------------------------------------------

--
-- 表的结构 `bw_user_login`
--

CREATE TABLE `bw_user_login` (
  `编号` int(11) NOT NULL,
  `用户名` varchar(20) NOT NULL,
  `密码` varchar(20) NOT NULL,
  `权限` varchar(20) NOT NULL,
  `err_times` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `bw_user_login`
--

INSERT INTO `bw_user_login` (`编号`, `用户名`, `密码`, `权限`, `err_times`) VALUES
(1, 'admin', 'admin', '1', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bw_user_login`
--
ALTER TABLE `bw_user_login`
  ADD PRIMARY KEY (`编号`),
  ADD UNIQUE KEY `编号` (`编号`),
  ADD KEY `编号_2` (`编号`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
