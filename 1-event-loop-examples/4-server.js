const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('Hello World')
})

console.log('Server listening on port: 5000....');