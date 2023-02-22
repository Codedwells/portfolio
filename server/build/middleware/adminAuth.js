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
exports.AdminAuth = void 0;
const admin_model_1 = __importDefault(require("../models/admin.model"));
const AdminAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body();
        const isAdm = yield admin_model_1.default.findOne({ email });
        if (!isAdm[0]) {
            res.status(400).json({
                status: 'error',
                data: {
                    message: 'Sorry you are not an admin.',
                    result: '',
                },
            });
            return;
        }
        next();
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: { message: 'Internal Server Error!!', result: '' },
        });
        console.error(err.message);
    }
});
exports.AdminAuth = AdminAuth;
