import { NextFunction, Request, Response } from "express";
import databaseClient from "../database/databaseConnection";
import { User } from "../types/userType";
import config from '../configuration/config';
import bcrypt from 'bcrypt'

export async function authenticateUser(request : Request , response : Response , next : NextFunction) : Promise<User | null>
{
    try
    {
        const connection  = await databaseClient.connect();
        const sqlCommand = 'SELECT user_password FROM users WHERE user_email=($1)';
        const result = await  connection.query(sqlCommand,[request.body.email]);
        if(result.rows.length)
        {
            const user = result.rows[0];
            if(bcrypt.compareSync(request.body.password + config.bcrypt_password, user.password))
            { 
                next();
                return user;
            }
        }
        next();
        return null;
    }
    catch(err)
    {
        throw new Error(`Incorrect email or password...${err}`);
    }

}