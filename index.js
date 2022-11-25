const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
	res.send(`
    	<div>
            <form method="POST">
                <input name="email" type="email" placeholder="email"/>
                <input name="password" type="password" placeholder="password"/>
                <input name="passwordConfirmation" type="password" placeholder="password confirmation"/>
                <button>Sign Up</button>
            </form>
        </div>
    `);
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.send('Account created!!!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
