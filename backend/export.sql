#! /usr/bin/mysql

CREATE DATABASE  IF NOT EXISTS `oryx_drabt`;
USE `oryx_drabt`;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `name` varchar(36) NOT NULL UNIQUE,
  `password` varchar(36) NOT NULL,
  `email` varchar(5) NOT NULL UNIQUE,
  PRIMARY KEY (`id`),
  KEY `name` (`name`),
  KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `cards`;
CREATE TABLE `cards` (
  `id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `owner` int NOT NULL,
  `text` varchar(50),
  `image` VARBINARY,
  PRIMARY KEY (`id`),
  FOREIGN KEY `owner` REFERENCES users(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `flashcards`;
CREATE TABLE `flashcards` (
  `id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `owner` int NOT NULL,
  `front` int NOT NULL,
  `back` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY `owner` REFERENCES users(`id`),
  FOREIGN KEY `front` REFERENCES cards(`id`),
  FOREIGN KEY `back` REFERENCES cards(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `decks`;
CREATE TABLE `decks` (
  `id` int NOT NULL AUTO_INCREMENT UNIQUE,
  `owner` int NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY `owner` REFERENCES users(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5758 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS `deck_flashcards`;
CREATE TABLE `deck_flashcards` (
  `deck_id` int NOT NULL,
  `flashcard_id` int NOT NULL,
  FOREIGN KEY `deck_id` REFERENCES decks(`id`),
  FOREIGN KEY `flashcard_id` REFERENCES flashcards(`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
