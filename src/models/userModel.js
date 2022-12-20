"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const databaseConnection_1 = __importDefault(require("../database/databaseConnection"));
class UserModel {
    async getAllUsers() {
        try {
            const connection = await databaseConnection_1.default.connect();
            const sqlCommand = 'SELECT * FROM users';
            const result = connection.query(sqlCommand);
            connection.release();
            return (await result).rows;
        }
        catch (err) {
            throw new Error('Cannot get all users.. ${err}');
        }
    }
    async createUser(user) {
        try {
            const connection = await databaseConnection_1.default.connect();
            const sqlCommand = `INSERT INTO users (user_fname, user_lname, user_email, user_password) 
            VALUES($1, $2, $3, $4) RETURNING *`;
            const result = connection.query(sqlCommand, [user.fname, user.lname, user.email, user.password]);
            connection.release();
            return (await result).rows[0];
        }
        catch (err) {
            throw new Error('User cannot be created...${err}');
        }
    }
    async showUser(id) {
        try {
            const sqlCommand = 'SELECT * FROM users WHERE id=($1)';
            const connection = await databaseConnection_1.default.connect();
            const result = await connection.query(sqlCommand, [id]);
            connection.release();
            return result.rows[0];
        }
        catch (err) {
            throw new Error(`Couldn't get user with id=${id}. Error: ${err}`);
        }
    }
    async deleteUserByID(id) {
        try {
            const connection = await databaseConnection_1.default.connect();
            const sqlCommand = 'DELETE FROM users WHERE user_id= $(1)';
            const result = connection.query(sqlCommand, [id]);
            connection.release();
            return (await result).rows[0];
        }
        catch (err) {
            throw new Error('User cannot be created...${err}');
        }
    }
}
exports.default = UserModel;
