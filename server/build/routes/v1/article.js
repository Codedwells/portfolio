"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const article_Controller_1 = require("../../controller/article.Controller");
const router = (0, express_1.Router)();
router.get('/all', article_Controller_1.getArticles);
router.get('/:pg', article_Controller_1.setArticles);
exports.default = router;
