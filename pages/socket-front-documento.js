import { updatetextEditor } from "./documento.js"
const socket = io()




const emetirTextoEditor = (texto) => {
    socket.emit('texto_editor', texto)
}

socket.on('texto_editor_clientes', (texto) => {
    updatetextEditor(texto)
})

export { emetirTextoEditor }