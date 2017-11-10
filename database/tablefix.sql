ALTER TABLE `user_data`.`users` 
ADD COLUMN `loggedin` TINYINT(4) NULL DEFAULT '0' AFTER `admin`;
