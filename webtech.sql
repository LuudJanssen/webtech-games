-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 15 jan 2017 om 15:25
-- Serverversie: 5.7.14
-- PHP-versie: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webtech`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `games`
--

CREATE TABLE `games` (
  `gameId` varchar(24) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `location` text NOT NULL,
  `genre` text NOT NULL,
  `dateAdded` timestamp NOT NULL,
  `timesPlayed` int(24) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `games`
--

INSERT INTO `games` (`gameId`, `name`, `description`, `location`, `genre`, `dateAdded`, `timesPlayed`) VALUES
('snakegame', 'Snake Game', 'A snake needs food', 'snakegame', 'highscore', '2017-01-15 14:11:47', 5),
('battleship', 'Battleship', 'Sink all enemy ships', 'battleship', 'highscore', '2017-01-15 14:14:05', 7);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `highscore`
--

CREATE TABLE `highscore` (
  `id` int(16) NOT NULL,
  `username` text NOT NULL,
  `gameId` text NOT NULL,
  `userId` text NOT NULL,
  `highscore` int(24) NOT NULL,
  `date` timestamp NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `webtech.webtechsite_game`
--

CREATE TABLE `webtech.webtechsite_game` (
  `gameId` varchar(24) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `location` text NOT NULL,
  `genre` text NOT NULL,
  `dateAdded` timestamp NOT NULL,
  `timesPlayed` int(24) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `webtech.webtechsite_game`
--

INSERT INTO `webtech.webtechsite_game` (`gameId`, `name`, `description`, `location`, `genre`, `dateAdded`, `timesPlayed`) VALUES
('', 'Snake Game', 'A snake needs food', 'snakegame', 'highscore', '2017-01-15 15:22:35', 5);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`gameId`);

--
-- Indexen voor tabel `highscore`
--
ALTER TABLE `highscore`
  ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `webtech.webtechsite_game`
--
ALTER TABLE `webtech.webtechsite_game`
  ADD PRIMARY KEY (`gameId`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `highscore`
--
ALTER TABLE `highscore`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
