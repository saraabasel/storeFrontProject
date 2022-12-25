import { Product } from '../../types/productType';
import  ProductModel from '../../models/productModel'
import databaseClient from '../../database/databaseConnection';


const productModel = new ProductModel();

describe("Product Model" , () => {   
      
    beforeAll(async () =>  {

        const connection = await databaseClient.connect();
        const sqlCommand = 'DELETE FROM products';
        await connection.query(sqlCommand);
        connection.release();
        
        const product : Product = 
        {
            product_id: 2,
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

    it('getAllProducts function should return a list of products', async () =>
    {
        const result = await productModel.getAllProducts();
        expect(result.length).toEqual(1);
    });

    it('showProduct function should exist', () =>
    { 
        expect(productModel.showProduct).toBeDefined();
    })

    it('showProduct function should return the correct product', async () => {
        const result = await productModel.showProduct("2");
        expect(result).toEqual({
            product_id: 2,
            product_name: 'Smart Watch',
            product_price: 2000,
            product_category: 'Electronics',
            number_of_sells: 6
        });
      });

    it('createProduct function should exist', () =>
    { 
        expect(productModel.showProduct).toBeDefined();
    })

    it('createProduct function should add a product', async () => {
        const result = await productModel.createProduct({
          product_id: 1 ,
          product_name: 'Smart Watch',
          product_price: 3000 ,
          product_category: 'Electronics',
          number_of_sells: 5
            });
        expect(result).toEqual({
            product_id: 1 ,
            product_name: 'Smart Watch',
            product_price: 3000 ,
            product_category: 'Electronics',
            number_of_sells: 5
        });
      });
});