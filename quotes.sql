-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2021 年 03 月 21 日 11:10
-- 伺服器版本： 5.7.33
-- PHP 版本： 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `wowitsji_WebDev`
--

-- --------------------------------------------------------

--
-- 資料表結構 `quotes`
--

CREATE TABLE `quotes` (
  `quoteID` int(11) NOT NULL,
  `quote` varchar(255) DEFAULT NULL,
  `src` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 傾印資料表的資料 `quotes`
--

INSERT INTO `quotes` (`quoteID`, `quote`, `src`) VALUES
(14, '\"Wow\"', 'Me'),
(15, '\"Woah\"', 'You');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`quoteID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `quotes`
--
ALTER TABLE `quotes`
  MODIFY `quoteID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
