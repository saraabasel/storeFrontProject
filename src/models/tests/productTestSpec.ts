import { Product } from '../../types/productType';
import  ProductModel from '../../models/productModel'
import databaseClient from '../../database/databaseConnection';


const productModel = new ProductModel();

describe("Product Model" , () => {   
      
    beforeEach(function() {
    });

    afterEach(function() {
     
    });

    beforeAll(async () =>  {

        const product : Product = 
        {
            product_id: '2',
            product_name: 'Smart Watch',
            product_price: 2000,
            product_category: 'Electronics',
            number_of_sells: 6
        }
        await productModel.createProduct(product);
    });

    afterAll(async () =>  {

        const connection = await databaseClient.connect();
        const sqlCommand = 'DELETE FROM products';
        await connection.query(sqlCommand);
        connection.release();
    });

    it('getAllProducts function should exist', () =>
    { 
        expect(productModel.getAllProducts).toBeDefined();
    })

    it('getAllProducts method should return a list of products', async () =>
    {
        const result = await productModel.getAllProducts();
        expect(result.length).toEqual(1);
    });

    it('showProduct function should exist', () =>
    { 
        expect(productModel.showProduct).toBeDefined();
    })
});