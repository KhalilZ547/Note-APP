-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mvp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mvp` DEFAULT CHARACTER SET utf8 ;
USE `mvp` ;

-- -----------------------------------------------------
-- Table `mvp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`users` (
  `idusers` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusers`),
  UNIQUE INDEX `idusers_UNIQUE` (`idusers` ASC) VISIBLE,
  UNIQUE INDEX `password_UNIQUE` (`password` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mvp`.`notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mvp`.`notes` (
  `idnotes` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `content` LONGTEXT NOT NULL,
  `users_idusers` INT NULL,
  INDEX `fk_notes_users_idx` (`users_idusers` ASC) VISIBLE,
  PRIMARY KEY (`idnotes`),
  CONSTRAINT `fk_notes_users`
    FOREIGN KEY (`users_idusers`)
    REFERENCES `mvp`.`users` (`idusers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
