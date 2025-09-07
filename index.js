const express = require('express');

const app = express();

app.get('/', (_, res) => {
	res.send('getting / is successful!');
});

app.listen(8080, () => {
	console.log('App is bootstrapped on Port 8080');
});
