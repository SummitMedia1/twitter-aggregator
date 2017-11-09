CREATE DATABASE  `user_data`;
USE `user_data`;

CREATE TABLE `user_data`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `pass_hash` VARCHAR(60) NOT NULL,
  `subscribed` INT DEFAULT 0,
  `admin` INT DEFAULT 0,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC));
