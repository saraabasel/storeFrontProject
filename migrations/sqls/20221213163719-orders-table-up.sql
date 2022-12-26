CREATE TABLE orders (

order_id  INT ,
user_id INTEGER ,
order_status VARCHAR(50),
PRIMARY KEY(order_id),
FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);