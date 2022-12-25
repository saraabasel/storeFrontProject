import express from 'express';
import * as OrdersController from '../controllers/ordersController';


const orderRouter = express.Router();

orderRouter.get('/' , OrdersController.getAllOrders)
orderRouter.get('/current/:id' , OrdersController.getCurrentOrdersByUserID);
orderRouter.get('/completed/:id' , OrdersController.getCompletedOrdersByUserID);


export default orderRouter;