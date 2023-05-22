const http = require('http')

const server = http.createServer((req, res)=> {

   if(req.url === '/'){
      res.end('Welcome to our home page')
   }

   if(req.url === '/about'){
   res.end('Here is a little bit of our history')
   }

   res.end(`

   <h1>Opps We can not seem to find your page</h1>
   <a href = "/">Go back to home page </a>

   `)

})
server.listen(5000)