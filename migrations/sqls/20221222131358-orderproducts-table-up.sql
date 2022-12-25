CREATE TABLE order_products
(
    order_id INTEGER , 
    product_id INTEGER,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    PRIMARY KEY (order_id,product_id)
);