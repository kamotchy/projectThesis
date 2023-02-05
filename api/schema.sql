USE PROJECTTHESIS;

DROP TABLE IF EXISTS ACCOUNT;

CREATE TABLE ACCOUNT(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_digest TEXT NOT NULL
);