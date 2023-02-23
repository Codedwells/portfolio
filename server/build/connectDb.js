"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
mongoose_1.default.set('strictQuery', true);
const connectDB = () => {
    mongoose_1.default
        .connect(process.env.MONGO_URL || 'mongodb+srv://nairobiwizz:BmZ7WQhayJFndQd9@portfolio.1fhqqps.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
        console.log('Connected to the DB...');
    })
        .catch((err) => {
        console.log('Error:', err.message);
    });
};
exports.default = connectDB;
