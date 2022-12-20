
CREATE TABLE products 
(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    product_description TEXT,
    product_price INT,
    product_category VARCHAR(100),
    product_sells_number INT
);