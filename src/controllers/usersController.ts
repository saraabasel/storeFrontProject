import {  Request, Response } from "express";
import  UserModel  from "../models/userModel";
import { User } from "../types/userType";
import jwt from 'jsonwebtoken';
import config from "../configuration/config";


const userModel : UserModel = new UserModel();

export async function getAllUsers(request: Request , response: Response)  
{
        try
        {
            const allUsers = await userModel.getAllUsers();
            if (!allUsers) { response.send('No users are found.')};
            response.send({
              status: 200,
              data: allUsers
            });
        }
        catch(err)
        {
            throw new Error(`Something went wrong while trying to get all users...${err}`);
        }
}

export async function showUser(request :Request , response:Response) 
{
    try
    {
        const selectedUser = await userModel.showUser(request.params.id);
        if(!selectedUser) {response.send('Cannot find a user with id = ' + request.params.id)}
        response.send({
            status:200,
            data: selectedUser
        });
    }
    catch(err)
    {
    }
}

export async function createUser(request : Request , response : Response)
{
    try
    {
        const user : User = 
        {
            id: request.body.id,
            fname: request.body.fname,
            lname: request.body.lname,
            email: request.body.email,
            password: request.body.password
        }
        
        const newUser = await userModel.createUser(user);
        var token = jwt.sign({user : newUser} , config.json_token);
        response.send
            ({
                status : 200,
                data: token
            });
    }
    catch(err)
    {
        response.send(`Something went wrong while trying to create a user... ${err}`);
    }
}
