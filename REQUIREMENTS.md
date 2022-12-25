# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### PRODUCTS
# Index
    GET http://localhost:3000/products

# Show
    GET  http://localhost:3000/products/:id

# Create [token required]
    POST http://localhost:3000/products
    example for request body = {
            "id": "1",
            "name": "",
            "price": "",
            "category": "",
            "sells_number": ""   
            "token": ""     
}
- [OPTIONAL] Top 5 most popular products [Not implemented]
- [OPTIONAL] Products by category (args: product category)[Not implemented]

#### USERS
# Index [token required]
    GET http://localhost:3000/users 
    Request body should be provided with the token
    example: { "token":"brYeW0766HqA" }

# Show [token required] 
    GET  http://localhost:3000/users/:id
    Request body should be provided with the token
    example: {"token":"brYeW0766HqA" }


# Create N[token required] 
    POST http://localhost:3000/users
    example for request body = {
    "id" : "",
    "fname" : "",
    "lname" : "",
    "email" : "",
    "password": ""
}

#### ORDERS
- Current Order by user (args: user id)[token required] 
    GET http://localhost:3000/orders/current/:user_id
    Request body should be provided with the token
    example: {"token":"brYeW0766HqA" }

- [OPTIONAL] Completed Orders by user (args: user id)[token required] 
    GET http://localhost:3000/orders/completed/:user_id
    Request body should be provided with the token
    example: {"token":"brYeW0766HqA" }

## DATABASE SCHEMA
# USERS
     user_id | user_fname | user_lname | user_email |user_password
    ---------+------------+------------+------------+--------------

# PRODUCTS
     product_id | product_name | product_price | product_category | number_of_sells
    ------------+--------------+---------------+------------------+-----------------
              1 | IphoneX      |         17000 | Electronics      |              50
              2 | IphoneXS     |         17000 | Electronics      |              50

# ORDERS

     order_id | user_id | order_status
    ----------+---------+--------------

# ORDER_PRODUCTS
    order_id | product_id | quantity
    ----------+------------+----------


## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password`

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
