import config from '../../configuration/config';
import databaseClient from '../../database/databaseConnection';
import OrderModel from '../../models/orderModel';

const orderModel = new OrderModel();

describe("Order Model" , () => {

    beforeAll(async () =>  {

        const connection = await databaseClient.connect();
        const insertCommand = 'INSERT INTO orders (order_id,user_id,order_status) VALUES (1,1,"active")';
const result = await connection.query(insertCommand,[1,1,'active']);
console.log(result);
        connection.release();
    });

    it('getCurrentOrdersByUserID function should exist', () =>
    { 
        expect(orderModel.getCurrentOrdersByUserID).toBeDefined();
    })

    it('getCurrentOrdersByUserID function should return all the active order for the user', async () => 
    { 
       const result = await orderModel.getCurrentOrdersByUserID("1");
       console.log(result);
       expect(result.length).toEqual(1);
    })

    it('getCompletedOrdersByUserID function should exist', () =>
    { 
        expect(orderModel.getCompletedOrdersByUserID).toBeDefined();
    })

    it('getCurrentOrdersByUserID function should return all the completed order for the user', async () => 
    { 
       const result = await orderModel.getCompletedOrdersByUserID("1");
       expect(result.length).toEqual(0);
    })
})