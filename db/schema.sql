/* Schema */

CREATE DATABASE boigas_db;
USE boigas_db;

CREATE TABLE boigas
(
	id int NOT NULL AUTO_INCREMENT,
	boiga_name varchar(255) NOT NULL,
	eaten BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
