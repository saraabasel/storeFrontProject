import config from "../configuration/config";
import { Pool } from 'pg'


    const databaseClient = new Pool (
    {
        host: config.postgres_host,
        database: config.postgres_database,
        user: config.postgres_user,
        password: config.postgres_password,
        port: config.postgres_port
    });



export default databaseClient;