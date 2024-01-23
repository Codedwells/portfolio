"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messagesController_1 = require("../../controller/messagesController");
const router = (0, express_1.Router)();
router.get('/', messagesController_1.getMessage);
router.post('/', messagesController_1.addMessage);
router.delete('/:id', messagesController_1.deleteMessage);
exports.default = router;
