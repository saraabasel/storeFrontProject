import express from 'express'
import orderRouter from './orderRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';

const router = express.Router();

router.use('/users', userRouter);
router.use('/products',productRouter);
router.use('/orders',orderRouter);


export default router;