CREATE TABLE orders (

order_id SERIAL PRIMARY KEY,
user_id FOREIGN KEY REFeRENCES users(user_id),
order_status VARCHAR(50),
);