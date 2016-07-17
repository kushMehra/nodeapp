const fs = require('fs');
const http = require('http');
const hostname = '127.0.0.1';
const port = 1337;

http.createServer(function(req,res) {
  fs.readFile('index.html', function(err,data){
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
});
}).listen(port, hostname);
console.log('Server running at http://' + hostname + ':' + port + '/');