import databaseClient from '../../database/databaseConnection';
import UserModel from '../userModel';
import { User } from '../../types/userType';


const userModel = new UserModel();

describe("Product Model" , () => {   
      
    beforeEach(function() {
    });

    afterEach(function() {
     
    });

    beforeAll(async () =>  {

        const user : User = 
        {
            id: 1 ,
            fname: 'Sara',
            lname: 'basil',
            email: 'sarabasel@gmail.com',
            password: 'test'
        }
        await userModel.createUser(user);
    });

    afterAll(async () =>  {

        const connection = await databaseClient.connect();
        const sqlCommand = 'DELETE FROM users';
        await connection.query(sqlCommand);
        connection.release();
    });

    it('getAllUsers function should exist', () =>
    { 
        expect(userModel.getAllUsers).toBeDefined();
    })

    it('getAllUsers method should return a list of products', async () =>
    {
        const result = await userModel.getAllUsers();
        expect(result.length).toEqual(1);
    });

    it('showUser function should exist', () =>
    { 
        expect(userModel.showUser).toBeDefined();
    })
});