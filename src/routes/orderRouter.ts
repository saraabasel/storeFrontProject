import express from 'express';
import * as OrdersController from '../controllers/ordersController';
import { authenticationMiddleware } from '../middlewares/authMiddleware';


const orderRouter = express.Router();

orderRouter.get('/:id' ,authenticationMiddleware, OrdersController.getAllOrders)
orderRouter.get('/current/:id' , authenticationMiddleware, OrdersController.getCurrentOrdersByUserID);
orderRouter.get('/completed/:id' , authenticationMiddleware, OrdersController.getCompletedOrdersByUserID);


export default orderRouter;