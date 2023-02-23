'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const morgan_1 = __importDefault(require('morgan'));
const compression_1 = __importDefault(require('compression'));
const dotenv_1 = __importDefault(require('dotenv'));
const cors_2 = __importDefault(require('cors'));
const body_parser_1 = require('body-parser');
const connectDb_1 = __importDefault(require('./connectDb'));
const router_1 = __importDefault(require('./routes/router'));
const path_1 = __importDefault(require('path'));
dotenv_1.default.config();
const PORT = process.env.PORT;
/** Middleware */
const app = (0, express_1.default)();
app.use((0, compression_1.default)());
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)());
app.use(
	(0, cors_2.default)({
		origin: ['https://abeldev.netlify.app', 'https://abeldev.site'],
	})
);
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use((0, body_parser_1.json)());

app.use('/', (req, res) => {
	res.set('Access-Control-Allow-Origin', 'https://abeldev.site');
});

/** Static */
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
/** Routes */
app.use('/', router_1.default);
(0, connectDb_1.default)();
app.listen(PORT || 5000, () => {
	console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
