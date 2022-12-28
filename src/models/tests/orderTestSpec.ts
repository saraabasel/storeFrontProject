import databaseClient from '../../database/databaseConnection';
import OrderModel from '../../models/orderModel';

const orderModel = new OrderModel();

describe("Order Model" , () => {

    it('getCurrentOrdersByUserID function should exist', () =>
    { 
        expect(orderModel.getCurrentOrdersByUserID).toBeDefined();
    })

    it('getCurrentOrdersByUserID function should return all the active order for the user', async () => 
    { 
       const result = await orderModel.getCurrentOrdersByUserID("1");
       expect(result.length).toEqual(0);
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