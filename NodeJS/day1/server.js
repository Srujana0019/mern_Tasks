const { constants } = require('node:buffer');
const http = require('node:http');

let server = http.createServer(function(req,res){
    res.write("hello");
    res.end();
});

server.listen(4000, ()=>{
    console.log("server in 4000");
})