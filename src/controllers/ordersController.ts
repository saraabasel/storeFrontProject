import {Request , Response } from 'express';
import OrderModel from '../models/orderModel';


const orderModel = new OrderModel();

export async function getAllOrders(request : Request , response : Response)
{
    try
    {
        const loggedinUserID = response.locals.decodedJWT.user.user_id;
        if(loggedinUserID == request.params.id)
        {
            const allOrders = await orderModel.getAllOrders(request.params.id);
            if(!allOrders)
            {
                response.send(`No orders are found.`);
                return;
            }
            response.send({
                status : 200,
                data : allOrders
            })
        }
        else
        {
            response.send('You do not have access to view this page.');
            return;
        }
    }
    catch(err)
    {

    }
}
export async function getCurrentOrdersByUserID(request : Request , response : Response)
{
    try
    {
        const loggedinUserID = response.locals.decodedJWT.user.user_id;
        if(loggedinUserID == request.params.id)
        {
            const currentOrders = await orderModel.getCurrentOrdersByUserID(request.params.id);
            if(!currentOrders) {
                response.send(`No active orders are found.`)
                return;}

            response.send({
                status: 200,
                data : currentOrders
            });
        }
        else
        {
            response.send('You do not have access to view this page.');
            return;
        } 
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
        const loggedinUserID = response.locals.decodedJWT.user.user_id;
        if(loggedinUserID == request.params.id)
        {
            const completedOrders = await orderModel.getCompletedOrdersByUserID(request.params.id);
            if(!completedOrders) {
                response.send(`No active orders are found for user with id = ${request.params.id}`);
                return;
            }
            response.send({
                status: 200,
                data : completedOrders
            });
        }
        else
        {
            response.send('You do not have access to view this page.');
            return;
        }
    }
    catch(err)
    {
        throw new Error(`Something went wrong while trying to get all completed orders...${err}`);
    }
}