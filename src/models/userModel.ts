import bcrypt from 'bcrypt';
import config from '../configuration/config';
import databaseClient from "../database/databaseConnection";
import { User } from "../types/userType";


export default class UserModel
{
    async getAllUsers() : Promise<User[]>
    {
      try
        {
            const connection = await databaseClient.connect();
            const sqlCommand = 'SELECT * FROM users';
            const result = connection.query(sqlCommand);
            connection.release();
            return (await result).rows;
        }
        catch(err)
        {
            throw new Error('Cannot get all users.. ${err}');
        } 
    }

    
    async showUser(id: string): Promise<User>
    {
        try
        {    
            const sqlCommand = 'SELECT user_id,user_fname,user_lname,user_email FROM users WHERE user_id=($1)'
            const connection = await databaseClient.connect();
            const result = await connection.query(sqlCommand, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err)
        {
            throw new Error(`Couldn't get user with id=${id}... Error: ${err}`)
        }
    }
    
    async createUser(user : User) : Promise<User> 
    {
        try
        {
            const connection = await databaseClient.connect();

            const sqlCommand = `INSERT INTO users (user_id,user_fname, user_lname, user_email, user_password) 
            VALUES($1, $2, $3, $4, $5) RETURNING user_fname, user_lname, user_email`;

            const hashedPassword = bcrypt.hashSync(user.user_password+config.bcrypt_password,Number(config.salt_rounds));
            
            const result = await connection.query(sqlCommand,[user.user_id,user.user_fname , user.user_lname , user.user_email , hashedPassword]);
            
            connection.release();
            return (await result).rows[0];
        }
        catch(err)
        {
            throw new Error(`User cannot be created...${err}`);
        }
    }

    async deleteUserByID(id: Number)
    {
        try
        {   
            const connection = await databaseClient.connect();
            const sqlCommand = 'DELETE FROM users WHERE user_id= $(1)';
            connection.query(sqlCommand,[id]);
            connection.release();
        }
        catch(err)
        {
            throw new Error('Something wrong happened while trying to delete the user....${err}');
        }
    }


}