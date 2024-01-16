const express = require('express')
const http = require('http');
const { Server } = require('socket.io');
const configs = require('./configs');
const websocket = require('./websocket');
const app = express();
const httpApp = http.createServer(app);

const io = new Server(httpApp,{
    cors:{
        origin:"*"
    },
    path:""
});


app.use('/api/v1',(req,res)=>{
    res.json({
        success:true,
        data:"API/V1"
    })
});

const StartServer = () => {
    httpApp.listen(configs.port, () => {
        console.log(
            `⚡ Server ::   running on PORT:${configs.port} in ${configs.env} mode`
        );
    });
    websocket(io);
};

StartServer();
