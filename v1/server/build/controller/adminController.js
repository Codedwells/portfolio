"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const admin_model_1 = __importDefault(require("../models/admin.model"));
const newAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({
                status: 'error',
                data: {
                    message: 'No field is to be empty',
                    result: '',
                },
            });
            return;
        }
        const hashedPass = yield bcrypt_1.default.hash(password, 10);
        const newAdm = new admin_model_1.default({
            email,
            password: hashedPass,
        });
        yield newAdm.save();
        res.status(200).json({
            status: 'success',
            data: {
                message: 'A new admin has been added',
                result: '',
            },
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: { message: 'loginAdmin: Internal Server Error!!', result: '' },
        });
        console.error('loginAdmin', err.message);
    }
});
exports.newAdmin = newAdmin;
