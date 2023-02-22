"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MessageSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        required: true,
        default: Date.now(),
    },
});
const Messages = (0, mongoose_1.model)('Messages', MessageSchema);
exports.default = Messages;
