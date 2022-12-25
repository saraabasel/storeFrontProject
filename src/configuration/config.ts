import dotenv from "dotenv";
dotenv.config();

const {
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_TEST_DB,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    BCRYPT_PASSWORD,
    SALT_ROUNDS,
    JSON_TOKEN,
    ENV
} = process.env;


export default {
    postgres_host: POSTGRES_HOST,
    postgres_user: POSTGRES_USER,
    postgres_password: POSTGRES_PASSWORD,
    postgres_database: POSTGRES_DB,
    postgres_test_database: POSTGRES_TEST_DB,
    salt_rounds: SALT_ROUNDS,
    bcrypt_password: BCRYPT_PASSWORD,
    json_token: JSON_TOKEN!,
    environment: ENV
};