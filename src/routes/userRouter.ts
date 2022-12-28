import express from 'express';
import * as UserController  from '../controllers/usersController';
import { authenticationMiddleware } from '../middlewares/authMiddleware';


const userRouter = express.Router();

userRouter.get('/', authenticationMiddleware ,UserController.getAllUsers);

userRouter.get('/:id', authenticationMiddleware , UserController.showUser);
 
userRouter.post('/' , UserController.createUser);



export default userRouter;