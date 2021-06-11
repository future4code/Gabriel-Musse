CREATE TABLE Cookenu_User (
id VARCHAR(250) PRIMARY KEY UNIQUE,
name VARCHAR(250) NOT NULL,
email VARCHAR(250) NOT NULL UNIQUE,
password VARCHAR(250) NOT NULL
);

DROP TABLE Cookenu_User;

SELECT * FROM Cookenu_User;

DELETE FROM Cookenu_User WHERE name = "Alice";

CREATE TABLE Cookenu_Recipe (
id VARCHAR(250) PRIMARY KEY UNIQUE,
user_id VARCHAR(250),
title VARCHAR(250) NOT NULL,
description VARCHAR(250) NOT NULL,
createdAt DATE NOT NULL,
FOREIGN KEY (user_id) REFERENCES Cookenu_User(id)
);

SELECT * FROM Cookenu_Recipe;

DROP TABLE Cookenu_Recipe;

CREATE TABLE Cookenu_Followers (
user_follower_id VARCHAR(250),
user_to_follow_id VARCHAR(250),
FOREIGN KEY (user_follower_id) REFERENCES Cookenu_User(id),
FOREIGN KEY (user_to_follow_id) REFERENCES Cookenu_User(id)
);

SELECT * FROM Cookenu_Followers;


DELETE FROM Cookenu_Followers WHERE user_follower_id = "bc257b4f-9c53-4f4f-b86e-78d034733aa2";