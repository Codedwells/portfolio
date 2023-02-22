"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_1 = __importDefault(require("./messages"));
const admin_1 = __importDefault(require("./admin"));
const article_1 = __importDefault(require("./article"));
const router = (0, express_1.Router)();
router.use('/messages', messages_1.default);
router.use('/admin', admin_1.default);
router.use('/article', article_1.default);
exports.default = router;
