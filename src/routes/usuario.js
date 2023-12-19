import { Router } from 'express'

const usuarioRouters = Router()

let usuarios = [
    {
        id: 1,
        email: "lorem@gmail.com",
        senha: "123"
    },
    {
        id: 2,
        email: "ipsum@gmail.com",
        senha: "123"
    },
]

usuarioRouters.post("/api/usuario", (req, res) => {
    const data = req.body

    usuarios.push({
        id: new Date().getTime().toString(),
        email: data.email,
        senha: data.senha
    })
    
    return res.status(204).json();
})


usuarioRouters.post("/api/usuario/autenticar", (req, res) => {
    const data = req.body
    if (usuarios.find(usuario => usuario.email === data.email && usuario.senha == data.senha) !== undefined)
    { console.log("servidor entrou")
        return res.status(204).json();
    }
    
    return res.status(401).json();
})

export default usuarioRouters