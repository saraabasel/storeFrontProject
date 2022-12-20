import {  Request, Response } from "express";
import  UserModel  from "../models/userModel";
import { User } from "../types/userType";


const userModel : UserModel = new UserModel();

export async  function getAllUsers(_request: Request , response: Response)  
{
        try
        {
            const allUsers = await userModel.getAllUsers();
            if (!allUsers) return;
            response.send({
              status: 200,
              message: "All users returned successfully",
              data: allUsers,
            });
        }
        catch(err)
        {
            console.log(err)
        }
}

export async function createUser(user: User )
{

}

export async function deleteUserByID()
{

}