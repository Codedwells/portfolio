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
exports.deleteMessage = exports.getMessage = exports.addMessage = void 0;
const message_model_1 = __importDefault(require("../models/message.model"));
const addMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) {
            res.status(400).json({
                status: 'error',
                data: { message: 'A field might be empty!!', result: '' },
            });
            return;
        }
        const newMessage = new message_model_1.default({
            name,
            email,
            subject,
            message,
            created: Date.now(),
        });
        yield newMessage.save();
        res.status(200).json({
            status: 'success',
            data: {
                message: 'Your message has been received.I will get back to you as soon as I see it.',
                result: '',
            },
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: { message: 'Internal Server Error!!', result: '' },
        });
        console.error(err.message);
    }
});
exports.addMessage = addMessage;
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield message_model_1.default.find({}).sort({ created: -1 });
        res.status(200).json({
            status: 'success',
            data: { message: 'Data has been queried.', result: messages },
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: { message: 'Internal Server Error!!', result: '' },
        });
        console.error(err.message);
    }
});
exports.getMessage = getMessage;
const deleteMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        let deleted = yield message_model_1.default.findByIdAndDelete({ _id: id });
        if (!deleted) {
            res.status(400).json({
                status: 'error',
                data: { message: 'An error occured please try again!!', result: '' },
            });
            return;
        }
        res
            .status(200)
            .json({ status: 'success', message: 'Message has been removed!!' });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: { message: 'Internal Server Error!!', result: '' },
        });
        console.error(err.message);
    }
});
exports.deleteMessage = deleteMessage;
