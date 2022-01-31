const http = require('http')

const PORT = 8000

const server = http.createServer()

server.on('request', (request, response) => {
    if (request.url === '/user') {
        const body = {
            first_name: 'Tony',
            last_name: 'Cookey',
            age: 24
        }
        response.writeHead(200, {
            'Content-Type': 'application/json',
        }).end(JSON.stringify(body))

    } else if (request.url === '/posts') {
        response.writeHead(200, {
            'Content-Type': 'text/plain',
        }).end('Posts Page')
    } else if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html')
        response.statusCode = 200
        response.write('<h1>Index Page</h1>')
        response.end()

    } else if (req.method === 'POST' && request.url === '/posts') {
        req.on('data', (data) => {
            const post = data.toString();
            console.log('Request:', post);
            friends.push(JSON.parse(post));
        });
        req.pipe(res);
    } else {
        response.statusCode = 404
        response.end()

    }
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
})
