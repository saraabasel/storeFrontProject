import config from '../configuration/config';
import databaseClient from '../database/databaseConnection';
import { Product } from '../types/productType';


export default class ProductModel
{

    async  getAllProducts() : Promise<Product[]> 
    {
        try
        {            
            const connection = await databaseClient.connect();            
            const sqlCommand = 'SELECT * FROM products';
            const result = await connection.query(sqlCommand);
            connection.release();
            return (await result).rows;

        }
        catch(err)
        {
            throw new Error(`Cannot get all products..${err}`);  
        }

    }

    async showProduct(id: string) : Promise<Product>
    {
        try
        {
            const connection = await databaseClient.connect();
            const sqlCommand = 'SELECT * FROM products WHERE product_id=($1)';
            const result = await connection.query(sqlCommand,[id]);
            connection.release();
            return (await result).rows[0];

        }
        catch(err)
        {
            throw new Error(`Couldn't get product with id=${id}. Error: ${err}`)
        }
    }

    async createProduct(product:Product)
    {
        try
        {
            const sqlCommand = 'INSERT INTO products (product_id,product_name,product_price,product_category,number_of_sells) VALUES ($1,$2,$3,$4,$5) RETURNING *';

            const connection = await databaseClient.connect();
            const result = databaseClient.query(sqlCommand,[product.product_id,product.product_name,product.product_price,product.product_category,product.number_of_sells]);
            connection.release();
            return (await result).rows[0];
        }
        catch
        {}
    }
}
