import databaseClient from '../database/databaseConnection';
import { Product } from '../types/productType';


export class ProductModel {

    async  getAllProducts() : Promise<Product[]> 
    {
        const connection = await databaseClient.connect();
        const sqlCommand = 'SELECT * FROM products';
        const result = connection.query(sqlCommand);
        connection.release();
        return (await result).rows;
    }
}