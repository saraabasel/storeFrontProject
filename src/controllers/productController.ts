import {Request , Response } from 'express';
import ProductModel from "../models/productModel";
import { Product } from '../types/productType';


const productModel = new ProductModel();

export async function getAllProducts(request : Request , response : Response)
{
    try
    {
        const allProducts = await productModel.getAllProducts();
        response.send(
            {
                status: 200,
                data: allProducts
            });
    }
    catch(err)
    {
        throw new Error(`Something went wrong while trying to get all products...${err}`);
    }
}

export async function showProduct(request : Request , response : Response)
{
    try
    {
        const selectedProduct = await productModel.showProduct(request.params.id);
        if(!selectedProduct) 
        {
            response.send('Cannot find a product with id = ' + request.params.id)
            return;
        };
        
        response.send(
            {
                status: 200,
                data: selectedProduct
            });
    }
    catch(err)
    {
        response.send(`Something went wrong while trying to get the product with id=${request.params.id}...${err}`);
    }
}

export async function createProduct(request : Request , response : Response)
{
    try 
    {
        const createdProduct : Product = 
        {
            product_id: request.body.id,
            product_name: request.body.name,
            product_price: request.body.price,
            product_category: request.body.category,
            number_of_sells: request.body.sells_number
        };
        
        const result = await productModel.createProduct(createdProduct);
        response.send(
            {
                status: 200,
                data: result 
            }
        );
    }
    catch(err)
    {  
        response.send(`Something went wrong while trying to create a product ... ${err}`);
    }
}