//Fazendo o meu front se conectar com o backend

import { emetirTextoEditor, selecionarDocumento } from "./socket-front-documento.js"

const paramentros = new URLSearchParams(window.location.search)
const nomeDocumento = paramentros.get('nome')

const textoEditor = document.getElementById('editor-texto')
const tituloDocumento = document.getElementById('titulo-documento')

tituloDocumento.textContent = nomeDocumento || 'Documento sem Titulo'

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener('keyup', () => {
    emetirTextoEditor({
        texto: textoEditor.value,
        nomeDocumento
    })
})

const updatetextEditor = (texto) => {
    textoEditor.value = texto
}

export { updatetextEditor }

