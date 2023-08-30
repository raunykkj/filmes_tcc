-- CREATE DATABASE filmes;

USE filmes;

CREATE TABLE `USUARIOS` (
	`usu_cod` INT NOT NULL AUTO_INCREMENT,
	`usu_email` varchar(128) NOT NULL,
	`usu_nome` varchar(64) NOT NULL,
	`usu_dtnasc` DATE NOT NULL,
	`usu_celular` char(14) NOT NULL,
	`usu_senha` varchar(128) NOT NULL,
	`usu_adm` bit NOT NULL,
	PRIMARY KEY (`usu_cod`)
);

CREATE TABLE `USUARIOS_FILMES` (
	`usfm_cod` INT NOT NULL AUTO_INCREMENT,
	`perf_cod` INT NOT NULL,
	`fme_cod` INT NOT NULL,
	`usfm_curtida` bit NOT NULL,
	`usfm_assitido` bit NOT NULL,
	`usfm_assistindo` bit NOT NULL,
	`ufsm_tempo` TIME,
	`ufsm_comentario` varchar(256),
	`ufsm_moderacao` bit NOT NULL,
	PRIMARY KEY (`usfm_cod`)
);

CREATE TABLE `FILME_ATORES` (
	`fme_cod` INT NOT NULL,
	`at_cod` INT NOT NULL,
	`fme_at_papel` varchar(48) NOT NULL,
	PRIMARY KEY (`fme_cod`,`at_cod`)
);

CREATE TABLE `ATORES` (
	`at_cod` INT NOT NULL AUTO_INCREMENT,
	`at_nome` varchar(100) NOT NULL,
	`at_dtnasc` DATE,
	`at_img` varchar(128),
	PRIMARY KEY (`at_cod`)
);

CREATE TABLE `PERFIS` (
	`perf_cod` INT NOT NULL AUTO_INCREMENT,
	`usu_cod` INT NOT NULL,
	`perf_foto` varchar(128) NOT NULL,
	`perf_nome` varchar(16) NOT NULL,
	PRIMARY KEY (`perf_cod`)
);

CREATE TABLE `FILMES` (
	`fme_cod` INT NOT NULL AUTO_INCREMENT,
	`fme_nome` varchar(100) NOT NULL,
	`fme_diretor` varchar(100) NOT NULL,
	`fme_lancamento` DATE NOT NULL,
	`fme_genero` tinyint NOT NULL,
	`fme_sinopse` varchar(960) NOT NULL,
	`fme_duracao` INT NOT NULL,
	`fme_idioma` varchar(100) NOT NULL,
	`fme_classificacao` tinyint NOT NULL,
	`fme_estudio` varchar(100) NOT NULL,
	`fme_link` varchar(256) NOT NULL,
	PRIMARY KEY (`fme_cod`)
);

ALTER TABLE `USUARIOS_FILMES` ADD CONSTRAINT `USUARIOS_FILMES_fk0` FOREIGN KEY (`perf_cod`) REFERENCES `PERFIS`(`perf_cod`);

ALTER TABLE `USUARIOS_FILMES` ADD CONSTRAINT `USUARIOS_FILMES_fk1` FOREIGN KEY (`fme_cod`) REFERENCES `FILMES`(`fme_cod`);

ALTER TABLE `FILME_ATORES` ADD CONSTRAINT `FILME_ATORES_fk0` FOREIGN KEY (`fme_cod`) REFERENCES `FILMES`(`fme_cod`);

ALTER TABLE `FILME_ATORES` ADD CONSTRAINT `FILME_ATORES_fk1` FOREIGN KEY (`at_cod`) REFERENCES `ATORES`(`at_cod`);

ALTER TABLE `PERFIS` ADD CONSTRAINT `PERFIS_fk0` FOREIGN KEY (`usu_cod`) REFERENCES `USUARIOS`(`usu_cod`);







