import express from 'express';
import * as UserController  from '../controllers/usersController';
import { authenticateUser } from '../middlewares/authMiddleware';


const userRouter = express.Router();

userRouter.get('/', UserController.getAllUsers);

userRouter.get('/:id', UserController.showUser);
 
userRouter.post('/' , UserController.createUser);



export default userRouter;