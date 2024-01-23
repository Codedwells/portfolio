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
exports.getArticles = exports.setArticles = void 0;
const article_model_1 = __importDefault(require("../models/article.model"));
const setArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let { pg } = req.params;
        console.log(pg);
        const query = `
        {
            user(username: "misiochaabel") {
                publication {
                    posts (page:${pg}){
                    title
    				slug
    				brief
    				coverImage
    				dateUpdated
    				dateAdded
                    }
                }
                }
            }
        `;
        const response = yield fetch('https://api.hashnode.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });
        const data = yield response.json();
        const posts = (_a = data.data) === null || _a === void 0 ? void 0 : _a.user.publication.posts;
        var articleInDB = yield article_model_1.default.find({}).sort({ created: 1 }).limit(1);
        if (articleInDB.length < 1 && !!posts) {
            for (let a of posts) {
                const { title, slug, brief, coverImage, dateUpdated, dateAdded } = a;
                const newArticle = new article_model_1.default({
                    title,
                    slug,
                    brief,
                    coverImage,
                    dateUpdated: new Date(dateUpdated).toISOString(),
                    dateAdded: new Date(dateAdded).toISOString(),
                });
                yield newArticle.save();
            }
            res.status(200).json({
                status: 'success',
                data: {
                    message: 'Articles have been added to the database!!',
                    result: '',
                },
            });
            return;
        }
        else if (!!articleInDB[0] && !!posts) {
            for (let a of posts) {
                const { title, slug, brief, coverImage, dateUpdated, dateAdded } = a;
                const isInDB = yield article_model_1.default.findOne({ slug });
                if (isInDB)
                    return;
                const newArticle = new article_model_1.default({
                    title,
                    slug,
                    brief,
                    coverImage,
                    dateUpdated: new Date(dateUpdated).toISOString(),
                    dateAdded: new Date(dateAdded).toISOString(),
                });
                yield newArticle.save();
            }
            res.status(200).json({
                status: 'success',
                data: { message: 'New articles have been update!!', result: '' },
            });
            return;
        }
        res.status(200).json({
            status: 'success',
            data: { message: 'Your aticles are the latest', result: '' },
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: { message: 'setArticle: Internal Server Error!!', result: '' },
        });
        console.error(err.message);
    }
});
exports.setArticles = setArticles;
const getArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var articles = yield article_model_1.default.find({}).sort({ dateAdded: -1 });
        var latest3 = [];
        latest3 = latest3.concat(articles.splice(0, 3));
        res.status(200).json({
            status: 'success',
            data: {
                message: 'Articles have been queried.',
                result: { latest3, articles },
            },
        });
    }
    catch (err) {
        res.status(500).json({
            status: 'error',
            data: { message: 'getArticles: Internal Server Error!!', result: '' },
        });
        console.error(err.message);
    }
});
exports.getArticles = getArticles;
