import databaseClient from '../database/databaseConnection';
import { Order } from '../types/orderType';


export default class OrderModel
{
    async getAllOrders(userID: string) : Promise<Order[]>
    {
        try
        {
            const connection = await databaseClient.connect();
            const sqlCommand = 'SELECT * FROM orders WHERE user_id=($1)';
            const result = await connection.query(sqlCommand,[userID]);
            connection.release();
            return (await result).rows;
        }
        catch(err)
        {
            throw new Error(`Couldn't get all orders...${err}`);
        }
    }

    async getCurrentOrdersByUserID(userID : string) :Promise<Order[]>
    {
        try
        {
            const connection = await databaseClient.connect();
            const sqlCommand = 'SELECT * FROM orders WHERE user_id=($1) AND order_status=($2)';
            const result = await connection.query(sqlCommand,[userID,'active']);
            connection.release();
            return (await result).rows;
        }
        catch(err)
        {
            console.log(`${err}`);
            throw new Error(`Cannot get order for the user_id = ${userID}`);
        }
    }
    async getCompletedOrdersByUserID (userID : string) :Promise<Order[]>
    {
        try
        {
            const connection = await databaseClient.connect();
            const sqlCommand = 'SELECT * FROM orders WHERE user_id=($1) AND order_status=($2)';
            const result = await connection.query(sqlCommand,[userID,'completed']);
           
            connection.release();
            return (await result).rows;
        }
        catch(err)
        {
            throw new Error(`Cannot get order for the user with id = ${userID}...${err}`);
        }
    }
}