import {Request , Response } from 'express';
import OrderModel from '../models/orderModel';
import jwt from 'jsonwebtoken';
import config from '../configuration/config';


const orderModel = new OrderModel();

export async function getAllOrders(request : Request , response : Response)
{
    try
    {
        const allOrders = await orderModel.getAllOrders();
        if(!allOrders) {response.send(`No orders are found.`);}
        response.send({
            status : 200,
            data : allOrders
        })
    }
    catch(err)
    {

    }
}
export async function getCurrentOrdersByUserID(request : Request , response : Response)
{
    try
    {
        jwt.verify(request.body.token,config.json_token);
    }
    catch(err)
    {
        response.status(401);
        response.json(`Invalid token...${err}`);
        return;
    }
    try
    {
        const currentOrders = await orderModel.getCurrentOrdersByUserID(request.params.id);
        if(!currentOrders) {response.send(`No active orders are found for user with id = ${request.params.id}`);}
        response.send(
            {
                status: 200,
                data : currentOrders
            }
        );
    }
    catch(err)
    {
        throw new Error(`Something went wrong while trying to get all active orders...${err}`);
    }
}

export async function getCompletedOrdersByUserID(request : Request , response : Response)
{
    try
    {
        jwt.verify(request.body.token,config.json_token);
    }
    catch(err)
    {
        response.status(401);
        response.json(`Invalid token...${err}`);
        return;
    }
    try
    {
        const completedOrders = await orderModel.getCompletedOrdersByUserID(request.params.id);
        if(!completedOrders) {response.send(`No active orders are found for user with id = ${request.params.id}`);}
        response.send(
            {
                status: 200,
                data : completedOrders
            }
        );
    }
    catch(err)
    {
        throw new Error(`${err}`);

    }
}