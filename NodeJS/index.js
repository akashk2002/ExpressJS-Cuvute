const { createServer } = require('node:http');

const server = createServer((req, res) => {
  res.end('hello');
});

server.listen(3000, () => {
  console.log('Server is Running');
});

