CREATE TABLE users (
user_id  INT ,
user_fname VARCHAR(50),
user_lname VARCHAR(50),
user_email VARCHAR UNIQUE,
user_password VARCHAR,
PRIMARY KEY(user_id)
);