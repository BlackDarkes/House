-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Июл 15 2025 г., 01:32
-- Версия сервера: 9.1.0
-- Версия PHP: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `painting`
--

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int NOT NULL,
  `timestamp` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1752264275186, 'PaintingsMigration1752264275186');

-- --------------------------------------------------------

--
-- Структура таблицы `painting`
--

CREATE TABLE `painting` (
  `id` int NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `author` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `param` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` enum('franch','germany','england','') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `painting`
--

INSERT INTO `painting` (`id`, `image`, `author`, `title`, `param`, `price`, `type`) VALUES
(1, 'http://192.168.0.104:8000/public/paintings/01.png', 'Марсель Руссо', 'Охота Амура', 'Холст, масло (50х80) ', '14 500 руб', 'franch'),
(2, 'http://192.168.0.104:8000/public/paintings/02.png', 'Анри Селин', 'Дама с собачкой', 'Акрил, бумага (50х80) ', '16 500 руб', 'franch'),
(3, 'http://192.168.0.104:8000/public/paintings/03.png', 'Франсуа Дюпон', 'Процедура', 'Цветная литография (40х60) ', '20 000 руб', 'franch'),
(4, 'http://192.168.0.104:8000/public/paintings/04.png', 'Луи Детуш', 'Роза', 'Бумага, акрил (50х80) ', '12 000 руб', 'franch'),
(5, 'http://192.168.0.104:8000/public/paintings/05.png', 'Франсуа Дюпон', 'Птичья трапеза', 'Цветная литография (40х60) ', '22 500 руб', 'franch'),
(6, 'http://192.168.0.104:8000/public/paintings/06.png', 'Пьер Моранж', 'Пейзаж с рыбой', 'Цветная литография (40х60) ', '20 000 руб', 'franch'),
(7, 'http://192.168.0.104:8000/public/paintings/07.png', 'Курт Вернер', 'Над городом', 'Цветная литография (40х60) ', '16 000 руб', 'germany'),
(8, 'http://192.168.0.104:8000/public/paintings/08.png', 'Макс Рихтер', 'Птенцы', 'Холст, масло (50х80) ', '14 500 руб', 'germany'),
(9, 'http://192.168.0.104:8000/public/paintings/09.png', 'Мартин Майер', 'Среди листьев', 'Цветная литография (40х60) ', '20 000 руб', 'germany'),
(10, 'http://192.168.0.104:8000/public/paintings/10.png', 'Герман Беккер', 'Яркая птица', 'Цветная литография (40х60) ', '13 000 руб', 'germany'),
(11, 'http://192.168.0.104:8000/public/paintings/11.png', 'Вульф Бауэр', 'Дятлы', 'Бумага, акрил (50х80) ', '20 000 руб', 'germany'),
(12, 'http://192.168.0.104:8000/public/paintings/12.png', 'Вальтер Хартманн', 'Большие воды', 'Бумага, акрил (50х80) ', '23 000 руб', 'germany'),
(13, 'http://192.168.0.104:8000/public/paintings/13.png', 'Пол Смит', 'Дикий зверь', 'Акварель, бумага (50х80) ', '19 500 руб', 'england'),
(14, 'http://192.168.0.104:8000/public/paintings/14.png', 'Джон Уайт', 'Скалистый берег', 'Цветная литография (40х60) ', '17 500 руб', 'england'),
(15, 'http://192.168.0.104:8000/public/paintings/15.png', 'Джим Уотсон', 'Река и горы', 'Акварель, бумага (50х80) ', '20 500 руб', 'england'),
(16, 'http://192.168.0.104:8000/public/paintings/16.png', 'Юджин Зиллион', 'Белый попугай', 'Цветная литография (40х60) ', '15 500 руб', 'england'),
(17, 'http://192.168.0.104:8000/public/paintings/17.png', 'Эрик Гиллман', 'Ночная рыба', 'Бумага, акрил (50х80) ', '12 500 руб', 'england'),
(18, 'http://192.168.0.104:8000/public/paintings/18.png', 'Альфред Барр', 'Рыжий кот', 'Цветная литография (40х60) ', '21 000 руб', 'england');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `painting`
--
ALTER TABLE `painting`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `painting`
--
ALTER TABLE `painting`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
