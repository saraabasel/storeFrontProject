import express from 'express';
import * as ProductController from '../controllers/productController';
import { authenticationMiddleware } from '../middlewares/authMiddleware';


const productRouter = express.Router();

productRouter.get('/', ProductController.getAllProducts);

productRouter.get('/:id', ProductController.showProduct);

productRouter.post ('/' , authenticationMiddleware ,ProductController.createProduct);

export default productRouter;