"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ArticleSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        require: true,
    },
    brief: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    dateAdded: {
        type: String,
        required: true,
    },
    dateUpdated: {
        type: String,
        required: true,
    },
});
const Article = (0, mongoose_1.model)('Article', ArticleSchema);
exports.default = Article;
