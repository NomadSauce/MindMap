CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes (
    id integer PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT null,
    contents TEXT NOT null,
    created TIMESTAMP NOT NULL DEFAULT now()
);

INSERT INTO notes (title, contents  ) 
VALUES
(
    'NOTE 1', 'SOME BS I MADE UP'
),
(
    'NOTE 2', 'SOME more BS I MADE UP'
);