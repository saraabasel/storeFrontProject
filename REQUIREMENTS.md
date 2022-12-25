# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 


##### DATABASE SCHEMAS 
#### Users Table 

#### Products Table ####

product_id (INT) | product_name (VARCHAR(50)) | product_price(INT) | product_category(VARCHAR(50)) | number_of_sells(INT)
------------+--------------+---------------+------------------+-----------------

3-Orders Table

4-ProductOrder Table



## API Endpoints
#### Products
- Index [DONE] 
- Show [DONE]
- Create [token required] []
- [OPTIONAL] Top 5 most popular products
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

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