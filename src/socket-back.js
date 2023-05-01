import io from "./server.js"

const documentos = [

    {
        nome: 'JavaScript',
        texto: 'texto de none...'
    },
    {
        nome: 'Node',
        texto: 'texto de node...'
    },
    {
        nome: 'Socket.io',
        texto: 'texto de socket.io...'
    },
]

io.on('connection', (socket) => {
    console.log('Cliente se conectou! ID:', socket.id)


    socket.on('selecionar_documento', (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento.texto)

        const documento = encontrarDocumento(nomeDocumento)

        if (documento) {
            devolverTexto(documento.texto)
        }
    })

    socket.on('texto_editor', ({ texto, nomeDocumento }) => {

        const documento = encontrarDocumento(nomeDocumento)

        if (documento) {
            documento.texto = texto

            socket.to(nomeDocumento).emit('texto_editor_clientes', texto)
        }
    })
})


const encontrarDocumento = (nome) => {
    const documento = documentos.find((documento) => {
        return documento.nome === nome
    })
    return documento
}


// socket.on("disconnect", (motivo) => {
//     console.log(`Cliente "${socket.id}" desconectado!
//     Motivo: ${motivo}`);
// });

// io.on("connection", (socket) => {
//     socket.on("dados_usuario", (dados) => {
//         socket.broadcast.emit("dados_usuario_clientes", dados);
//     });
// });





