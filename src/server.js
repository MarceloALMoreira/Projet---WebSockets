
import express from 'express'
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const port = process.env.PORT || 3000


//buscando o 
const caminhoAtual = url.fileURLToPath(import.meta.url)
const diretorioPublico = path.join(caminhoAtual, '../..', 'pages')
app.use(express.static(diretorioPublico))


//Crinado um servidor com socket.io
const servidorHttp = http.createServer(app)

servidorHttp.listen(port, () => {
    console.log(`Servidor rodandno em http://localhost:${port}`)
})


//criando a conexão com front

const io = new Server(servidorHttp)

export default io