const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to the homepage')
    }
    if(req.url==='/about'){
        res.end('Devansh welcomes you')
    }
   
        res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href = "/">Try this</a>
    `)
    
    
})

server.listen(5000);