import { updatetextEditor } from "./documento.js"

const socket = io()



const selecionarDocumento = (nome) => {
    socket.emit('selecionar_documento', nome, (texto) => {
        updatetextEditor(texto)
    })
}

const emetirTextoEditor = (dados) => {
    socket.emit('texto_editor', dados)
}
socket.on('texto_documento', (texto) => {
    updatetextEditor(texto)
})


export { emetirTextoEditor, selecionarDocumento }