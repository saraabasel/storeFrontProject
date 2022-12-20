import express from 'express';
import * as UserController  from '../controllers/usersController';


const userRouter = express.Router();

userRouter.get('/', UserController.getAllUsers);

userRouter.post('/', () => {

    console.log('POST Method');
});

userRouter.delete('/', () => {

    console.log('DELETE Method');
});

userRouter.patch('/', () => {

    console.log('Patch Method');
});



export default userRouter;