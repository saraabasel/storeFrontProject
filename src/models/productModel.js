"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const databaseConnection_1 = __importDefault(require("../database/databaseConnection"));
class ProductModel {
    async getAllProducts() {
        const connection = await databaseConnection_1.default.connect();
        const sqlCommand = 'SELECT * FROM products';
        const result = connection.query(sqlCommand);
        connection.release();
        return (await result).rows;
    }
}
exports.ProductModel = ProductModel;
