import databaseClient from '../../database/databaseConnection';
import UserModel from '../userModel';
import { User } from '../../types/userType';

const userModel = new UserModel();

describe("User Model" , () => {   
      
    beforeEach(function() {
    });

    afterEach(function() {
     
    });

    beforeAll(async () =>  {

        const user : User = 
        {
            user_id: 1 ,
            user_fname: 'Sara',
            user_lname: 'basel',
            user_email: 'sarabasel@gmail.com',
            user_password: 'test'
        }
        await userModel.createUser(user);
    });

    it('getAllUsers function should exist', () =>
    { 
        expect(userModel.getAllUsers).toBeDefined();
    })

    it('getAllUsers function should return a list of users', async () =>
    {
        const result = await userModel.getAllUsers();
        expect(result.length).toEqual(1);
    });

    it('showUser function should exist', () =>
    { 
        expect(userModel.showUser).toBeDefined();
    })

    it('showUser function should return the correct user', async () => {
        const result = await userModel.showUser("1");
        expect(result.user_fname).toEqual('Sara');
        expect(result.user_email).toEqual('sarabasel@gmail.com');
      });

      it('createUser function should exist', () =>
    { 
        expect(userModel.showUser).toBeDefined();
    })


    it('createUser function should add a user', async () => {
        const result = await userModel.createUser({
            user_id: 2 ,
            user_fname: 'Sara',
            user_lname: 'basel',
            user_email: 'sarabaseltest@gmail.com',
            user_password: 'test'
            });
        expect(result.user_fname).toEqual('Sara');
      });
});