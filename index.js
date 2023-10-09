const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
	let fileName = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

	fs.readFile(fileName, (err, data) => {
		console.log(fileName);
		if (err) {
			res.writeHead(404, { 'Content-Type': 'text/html' });
			res.end('<p>Error 404</>', 'utf-8');
			return res.end();
		}

		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(data, 'utf-8');
		return res.end();
	});
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`The server is listening on port ${port}`));
