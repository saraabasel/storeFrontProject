CREATE TABLE users (
user_id SERIAL PRIMARY KEY ,
user_fname VARCHAR(50),
user_lname VARCHAR(50),
user_email VARCHAR UNIQUE,
user_password VARCHAR
);