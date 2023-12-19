import express from "express"
import cors from "cors"
import categoriaRouter from "./src/routes/categoria.js"
import usuarioRouter from "./src/routes/usuario.js"

const app = express();

app.use(express.json())
app.use(express.static("public/"))
app.use(cors());

app.use(categoriaRouter)
app.use(usuarioRouter)

app.listen(3333, () => {
    console.log("listening server 3333 port")
})