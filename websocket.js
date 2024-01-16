module.exports = async function (io){
    console.log("⚡ Web-socket initialized");

    // middlewares
    // io.use(wsAuthMiddleware);

    // connection
    io.on("connection", (socket) => {
        console.log(`⚡: ${socket.id} user just connected!\n`);

        // // Rendering controllers
        // events?.map((x) => {
        //     const req_info = {
        //         request_id: uuid(),
        //         kind: "Web Socket",
        //     };
        //     const context = {
        //         socket,
        //         io,
        //         event: x.event,
        //         req_info,
        //         auth: socket.handshake.auth,
        //     };
        //     if (!x.event || !x.controller) {
        //         return console.log(
        //             "No route or controller provided in route :",
        //             x.id
        //         );
        //     }
        //     socket.on(x.event, (...payload) => {
        //         // Controller
        //         x.controller(payload, context);

        //         // Logger - to log anything in a particular block => just add a function in logger property in that object.
        //         if (x?.logger) {
        //             x.logger(payload);
        //         }
        //     });
        // });
        socket.on('ping',(payload)=>{
            io.emit('ping',{
                success:true,
                data:"pong"
            })
        })

        socket.on("disconnect", () => {
            console.log("🔥: A user disconnected\n");
        });
    });
}