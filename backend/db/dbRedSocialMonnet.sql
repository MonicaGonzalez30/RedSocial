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
	PRIMARY KEY (email)
);

--Registros usuarios
INSERT INTO users ([name],lastNameP,lastNameM,email,[password]) VALUES(
	'Mónica','González','Chacón','monik196901@gmail.com','Moni1234'
);
INSERT INTO users ([name],lastNameP,lastNameM,email,[password]) VALUES(
	'Vanesa','González','Chacón','vanesa@gmail.com','vanesaS01'
);

SELECT * FROM users;

--Amistades
CREATE TABLE friendships(
	idFriendship INT NOT NULL IDENTITY(1,1),
	emailSend VARCHAR(50) NOT NULL,
	emailReceive VARCHAR(50) NOT NULL,
	[status] VARCHAR(10) NOT NULL,
	PRIMARY KEY (idFriendship)
);

--Registros 
INSERT INTO friendships (emailSend,emailReceive,[status]) VALUES(
	'vanesa@gmail.com','monik196901@gmail.com','Enviado'
);

SELECT * FROM friendships;

-- Tablas ya con relacion foranea
--Perfiles
CREATE TABLE profiles(
	idProfile INT NOT NULL IDENTITY(1,1),
	email VARCHAR(50) NOT NULL,
	photo VARCHAR(600) NOT NULL,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(50) NOT NULL,
	age INT NOT NULL,
	studies VARCHAR(500) NOT NULL,
	languages VARCHAR(500) NOT NULL,
	linkedIn VARCHAR(100) NOT NULL,
	hobbies VARCHAR(500) NOT NULL,
	extraKnowledge VARCHAR(500) NOT NULL,
	PRIMARY KEY (idProfile),
	FOREIGN KEY (email) REFERENCES users(email) ON DELETE CASCADE
);

--Registros 
INSERT INTO profiles (email,photo,city,country,age,studies,languages,linkedIn,hobbies,extraKnowledge) VALUES(
	'monik196901@gmail.com',
	'https://lh3.googleusercontent.com/ogw/ADea4I5G9X0D3CsU7FTZ3qydwjoQ0hWu7tKmyfpvrkZf=s83-c-mo',
	'Nezahualcóyotl',
	'México',
	17,
	'CECyT 14 Luis Enrique Erro, Certificación en Microsoft Office',
	'Español, Ingles Nivel B1',
	'www.linkedin.com/in/monica-gonzalez-chacon',
	'Escuchar música, dibujar, salir a pasear, ver anime, series y peliculas.',
	'JavasCript, HTML, CSS, Node.Js, Express, Bases de datos SQL'
);

SELECT * FROM profiles;

--Recomendaciones (comentarios)
CREATE TABLE feedback(
	idFeedback INT NOT NULL IDENTITY(1,1),
	email VARCHAR(50) NOT NULL,
	comment VARCHAR(300) NOT NULL,
	PRIMARY KEY (idFeedback),
	FOREIGN KEY (email) REFERENCES users(email) ON DELETE CASCADE
);

--Registros 
INSERT INTO feedback (email,comment) VALUES(
	'monik196901@gmail.com','El perfil esta muy completo.'
);

SELECT * FROM feedback;