const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	const fileName = path.join(__dirname, 'index.html');

	fs.readFile(fileName, (err, data) => {
		if (err) {
			res.status(404).send('<p>Error 404</p>');
		} else {
			res.status(200).send(data.toString('utf-8'));
		}
	});
});

app.get('/about', (req, res) => {
	const fileName = path.join(__dirname, 'about.html');

	fs.readFile(fileName, (err, data) => {
		if (err) {
			res.status(404).send('<p>Error 404</p>');
		} else {
			res.status(200).send(data.toString('utf-8'));
		}
	});
});

app.get('/contact-me', (req, res) => {
	const fileName = path.join(__dirname, 'contact-me.html');

	fs.readFile(fileName, (err, data) => {
		if (err) {
			res.status(404).send('<p>Error 404</p>');
		} else {
			res.status(200).send(data.toString('utf-8'));
		}
	});
});

app.listen(port, () => {
	console.log(`The server is listeing on port ${port}`);
});
