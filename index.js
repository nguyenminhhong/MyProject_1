const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'charset=utf-8');
  res.end('<h1 style="color:red; font-weight:bold">Ho và Ten: Nguyen Minh Hong</h1>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
