"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserByID = exports.createUser = exports.getAllUsers = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const userModel = new userModel_1.default();
async function getAllUsers(_request, response) {
    try {
        const allUsers = await userModel.getAllUsers();
        if (!allUsers)
            return;
        response.send({
            status: 200,
            message: "All users returned successfully",
            data: allUsers,
        });
    }
    catch (err) {
        console.log(err);
    }
}
exports.getAllUsers = getAllUsers;
async function createUser(user) {
}
exports.createUser = createUser;
async function deleteUserByID() {
}
exports.deleteUserByID = deleteUserByID;
