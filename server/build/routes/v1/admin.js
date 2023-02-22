"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adminController_1 = require("../../controller/adminController");
const router = (0, express_1.Router)();
router.post('/newAdmin', adminController_1.newAdmin);
exports.default = router;
