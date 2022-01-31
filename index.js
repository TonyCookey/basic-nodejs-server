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

    } else {
        response.statusCode = 404
        response.end()

    }
})

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
})
