# Storefront Backend Project
# Steps to run the project

    1- run 'npm install' to install all needed package
    2- Create .env file in root directory
        The env file should contain the following variables
        POSTGRES_HOST=*****
        POSTGRES_DB=*****
        POSTGRES_TEST_DB=*****
        POSTGRES_USER=*****
        POSTGRES_PASSWORD=******
        BCRYPT_PASSWORD=*****
        SALT_ROUNDS=*****
        JSON_TOKEN=*****
        POSTGRES_PORT=****
        ENV=*****
    3- run 'npm run build' to build the project
    4- run 'db-migrate up' to create all the needed tables in the database
    5- run 'npm run start' to start the server
    6- run 'npm run test' to run all the tests

### Ports

Server is running on port 3000
Database is running on port 5432 [Can be set from .env file]

### Database Connection

1- Run 'db-migrate up' to create all the needed schemas 
2- Connect to the database using psql or pgadmin
    Note that: the database should be defined in .env file