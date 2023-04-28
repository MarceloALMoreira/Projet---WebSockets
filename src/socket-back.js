import io from "./server.js"

io.on('connection', (socket) => {
    console.log('Cliente se conectou! ID:', socket.id)

    socket.on('texto_editor', (texto) => {
        socket.broadcast.emit('texto_editor_clientes', texto)
    })

    socket.on("disconnect", (motivo) => {
        console.log(`Cliente "${socket.id}" desconectado!
        Motivo: ${motivo}`);
    });

    io.on("connection", (socket) => {
        socket.on("dados_usuario", (dados) => {
            socket.broadcast.emit("dados_usuario_clientes", dados);
        });
    });
})  