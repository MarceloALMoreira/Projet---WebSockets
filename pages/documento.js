//Fazendo o meu front se conectar com o backend

import { emetirTextoEditor } from "./socket-front-documento.js"

const paramentros = new URLSearchParams(window.location.search)
const nomeDocumento = paramentros.get('nome')

const textoEditor = document.getElementById('editor-texto')
const tituloDocumento = document.getElementById('titulo-documento')
tituloDocumento.textContent = nomeDocumento

textoEditor.addEventListener('keyup', () => {
    emetirTextoEditor(textoEditor.value)
})

const updatetextEditor = (texto) => {
    textoEditor.value = texto
}

export { updatetextEditor }

