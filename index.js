const express = require('express');
const redis = require('redis');

const app = express();
const redisClient = redis.createClient({
	host: 'redis-server',
	port: 6379,
});

redisClient.set('visits', 0);

app.get('/', (_, res) => {
	redisClient.get('visits', (err, visits) => {
		res.send(`Number of visitors: ${visits}`);
		redisClient.set('visits', parseInt(visits) + 1);
	});
});

app.listen(8080, () => {
	console.log('App is bootstrapped on Port 8080');
});
