const http = require('http')  
const server = http.createServer(function (req, res) {  
    console.log('server created')
    res.write("hello world")
    res.end()
})  
server.listen(3500) ;