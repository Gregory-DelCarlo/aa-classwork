PRAGMA foreign_keys = ON;

DROP TABLE replies;
DROP TABLE questions_follows;
DROP TABLE question_likes;
DROP TABLE questions;
DROP TABLE users;


CREATE TABLE users(
        id INTEGER PRIMARY KEY,
        fname TEXT NOT NULL,
        lname TEXT NOT NULL
    );

CREATE TABLE questions(
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        author_id INTEGER NOT NULL,
        FOREIGN KEY (author_id) REFERENCES users(id)
    );

CREATE TABLE questions_follows (
        id INTEGER PRIMARY KEY,
        user_id INTEGER NOT NULL,
        question_id INTEGER NOT NULL,

        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
        id INTEGER PRIMARY KEY,
        question_id INTEGER NOT NULL,
        parent_id INTEGER,
        user_id INTEGER NOT NULL,
        body TEXT NOT NULL,

        FOREIGN KEY(question_id) REFERENCES questions(id),
        FOREIGN KEY(parent_id) REFERENCES replies(id),
        FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE question_likes(
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,

    FOREIGN KEY(question_id) REFERENCES questions(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO users (fname, lname) VALUES ('John', 'Doe');

INSERT INTO questions (title, body, author_id) VALUES ('primary key not being set', 'get an error', (SELECT id FROM users WHERE fname = 'John'));

INSERT INTO questions_follows (user_id, question_id) VALUES ((SELECT id FROM users WHERE fname = 'John'), (SELECT id FROM questions WHERE id = 1));

INSERT INTO 
    replies(question_id, user_id, body)
VALUES
    (
        (SELECT id from questions where id = 1),
        (SELECT id FROM users WHERE id = 1),
        'Some reply here///'
    );

INSERT INTO 
    replies(question_id, parent_id, user_id, body)
VALUES
    (
        (SELECT id from questions where id = 1),
        (SELECT id FROM users WHERE id = 1),
        (SELECT id FROM replies WHERE id = 1),
        'Some reply to a reply here///'
    );

INSERT INTO 
    question_likes(question_id, user_id)
VALUES
    (
        (SELECT id FROM questions WHERE id = 1),
        (SELECT id FROM users WHERE id = 1)
    );


-- SELECT * FROM questions JOIN questions_follows ON questions.id = questions_follows.question_id JOIN users ON questions_follows.user_id = users.id;
-- select * from users join questions_follows ON users.id = questions_follows.user_id JOIN questions ON questions_follows.question_id = questions.id;
-- sqlite> select * from replies where parent_id = (select id from replies where body like 'some reply here///');