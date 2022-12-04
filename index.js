const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ['oCBe6x|*Mk30J3E'],
	})
);
app.use(authRouter);
app.use(productsRouter);

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
