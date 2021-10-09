CREATE DATABASE redSocialMonnet;

USE redSocialMonnet;

--Usuarios
CREATE TABLE users(
	idUser INT NOT NULL IDENTITY(1,1),
	[name] VARCHAR(50) NOT NULL,
	lastNameP VARCHAR(50) NOT NULL,
	lastNameM VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	[password] VARCHAR(50) NOT NULL,
	PRIMARY KEY (idUser)
);

--Registros usuarios
INSERT INTO users ([name],lastNameP,lastNameM,email,[password]) VALUES(
	'Mónica','González','Chacón','monik196901@gmail.com','Moni1234'
);

SELECT * FROM users;

-- Tablas ya con relacion foranea
CREATE TABLE profiles(
	idProfile INT NOT NULL IDENTITY(1,1),
	idUser INT NOT NULL,
	photo VARBINARY(MAX) NOT NULL,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
	age INT NOT NULL,
	studies VARCHAR(500) NOT NULL,
	languages VARCHAR(500) NOT NULL,
	linkedIn VARCHAR(100) NOT NULL,
	hobbies VARCHAR(500) NOT NULL,
	extraKnowledge VARCHAR(500) NOT NULL,
	PRIMARY KEY (idProfile),
	FOREIGN KEY (idUser) REFERENCES users(idUser) ON DELETE CASCADE
);

--Registros 

SELECT * FROM profiles;

CREATE TABLE feedback(
	idFeedback INT NOT NULL IDENTITY(1,1),
	idProfile INT NOT NULL,
	comment VARCHAR(300) NOT NULL,
	PRIMARY KEY (idFeedback),
	FOREIGN KEY (idProfile) REFERENCES profiles(idProfile) ON DELETE CASCADE
);

--Registros 

SELECT * FROM feedback;