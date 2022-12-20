import databaseClient from "../database/databaseConnection";
import { User } from "../types/userType";
import dotenv from 'dotenv'


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

    async createUser(user : User) : Promise<User> 
    {
        try
        {
            const connection = await databaseClient.connect();
            const sqlCommand = `INSERT INTO users (user_fname, user_lname, user_email, user_password) 
            VALUES($1, $2, $3, $4) RETURNING *`;
            const result = connection.query(sqlCommand,[user.fname , user.lname , user.email , user.password]);
            connection.release();
            return (await result).rows[0];
        }
        catch(err)
        {
            throw new Error('User cannot be created...${err}');
        }
    }

    async showUser(id: string): Promise<User>
    {
        try
        {
            const sqlCommand = 'SELECT * FROM users WHERE id=($1)'
            const connection = await databaseClient.connect();
            const result = await connection.query(sqlCommand, [id]);
            connection.release();
        
            return result.rows[0];
        }
        catch (err)
        {
            throw new Error(`Couldn't get user with id=${id}. Error: ${err}`)
        }
    }
    

    async deleteUserByID(id: Number)
    {
        try
        {
            const connection = await databaseClient.connect();
            const sqlCommand = 'DELETE FROM users WHERE user_id= $(1)';
            const result = connection.query(sqlCommand,[id]);
            connection.release();
            return (await result).rows[0];
        }
        catch(err)
        {
            throw new Error('User cannot be created...${err}');
        }
    }
}