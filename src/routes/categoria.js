import { Router } from 'express'

const categoriaRouters = Router()

let categoria = [
    {
        id: 1234,
        nome: "Sabores de sorvetes",
        sabores: [
            {
                id: 1,
                nome: "Coco"
            },
            {
                id: 2,
                nome: "Pavê"
            },
            {
                id: 3,
                nome: "Nata goiaba"
            },
            {
                id: 4,
                nome: "Sedução"
            },
            {
                id: 5,
                nome: "Brigadeiro"
            },
            {
                id: 6,
                nome: "Delicia de abacaxi"
            },
            {
                id: 7,
                nome: "Amendoim"
            },
            {
                id: 8,
                nome: "Romeu e Julieta"
            },
            {
                id: 9,
                nome: "Chocolate"
            },
            {
                id: 10,
                nome: "Morango"
            },
            {
                id: 11,
                nome: "Graviola"
            },
            {
                id: 12,
                nome: "Prestigio"
            },
            {
                id: 13,
                nome: "Napolitano"
            },
            {
                id: 14,
                nome: "Toffe (Doce Leite com Passas)"
            },
            {
                id: 15,
                nome: "Creme"
            },
            {
                id: 16,
                nome: "Kiwi"
            },
            {
                id: 17,
                nome: "Castanha"
            },
            {
                id: 18,
                nome: "Chocolate Branco"
            },
            {
                id: 19,
                nome: "Sonho de Valsa"
            },
            {
                id: 20,
                nome: "Açaí com Leite Ninho"
            },
            {
                id: 21,
                nome: "Creme com Passas"
            },
            {
                id: 22,
                nome: "Ninho com Nutella"
            },


        ]
    },
    {
        id: 12345,
        nome: "Taças Especiais",
        sabores: [
            {
                id: 23,
                nome: "Mill Shake"
            },
            {
                id: 24,
                nome: "Milk Shake com Ovo Malte"
            },
            {
                id: 25,
                nome: "Colegial (Duas Bolas + Complementos)"
            },
            {
                id: 26,
                nome: "Sundae (3 Bolas + Complementos)"
            },
            {
                id: 27,
                nome: "Sundae Tropical (Uma Bola de Sorvete + Salada de Frutas)"
            },
            {
                id: 28,
                nome: "Sundae Tropical (Duas Bolas de Sorvete + Salada de Frutas)"
            },
            {
                id: 29,
                nome: "Brownie com Sorvete"
            },
            {
                id: 30,
                nome: "Banana Split"
            },
            {
                id: 31,
                nome: "Salada de Frutas"
            }
        ]
    }, {
        id: 54321,
        nome: "Sabores Selecionados de Picolé",
        sabores: [
            {
                id: 33,
                nome: "Coco"
            },
            {
                id: 34,
                nome: "Morango"
            },
            {
                id: 35,
                nome: "Chocolate"
            },
            {
                id: 36,
                nome: "Amendoim"
            },
            {
                id: 37,
                nome: "Graviola"
            },
            {
                id: 38,
                nome: "Limão"
            },
            {
                id: 39,
                nome: "Frutas Tropicais"
            },
            {
                id: 40,
                nome: "Maracujá"
            },
            {
                id: 41,
                nome: "Goiaba"
            },
            {
                id: 42,
                nome: "Açaí"
            },
            {
                id: 43,
                nome: "Iogurte"
            },
            {
                id: 44,
                nome: "Manga"
            }
        ]
    }, {
        id: 154646,
        nome: "Sabores de Picolés de Leite",
        sabores: [
            {
                id: 45,
                nome: "Picolé de Leite Condensado"
            },
            {
                id: 46,
                nome: "Picolé de Chocolate com Leite"
            },
            {
                id: 47,
                nome: "Picolé de Doce de Leite"
            },
            {
                id: 48,
                nome: "Picolé de Leite Ninho"
            }
        ]
    },{
        id: 41564564,
        nome: "Sabores de Picolé Stick",
        sabores: [
            {
                id: 49,
                nome: "Picolé Stick de Morango"
            },
            {
                id: 50,
                nome: "Picolé Stick de Uva"
            },
            {
                id: 51,
                nome: "Picolé Stick de Coco"
            },
            {
                id: 52,
                nome: "Picolé Stick de Abacaxi"
            }
        ]
    }
    
    
    
]

categoriaRouters.post("/api/categorias/sabor", (requisicao, resposta) => {
    const dados = requisicao.body
    categoria.find(c => c.id == dados.categoriaId).sabores.push({
        id: new Date().getTime().toString(),
        nome: dados.nome
    })
    return resposta.status(204).json();
})

categoriaRouters.post("/api/categorias", (requisicao, resposta) => {
    const dados = requisicao.body
    categoria.push({
        id: new Date().getTime().toString(),
        nome: dados.nome,
        sabores: []
    })
    return resposta.status(204).json();
})

categoriaRouters.put("/api/categorias", (requisicao, resposta) => {
    const dados = requisicao.body
    categoria.find(c => c.id == dados.categoriaId).nome = dados.nome;
    return resposta.status(204).json();
})

categoriaRouters.delete("/api/categorias", (requisicao, resposta) => {
    const dados = requisicao.body
    categoria = categoria.filter(c => c.id != dados.categoriaId);
    return resposta.status(204).json();
})

categoriaRouters.delete("/api/categorias/sabor", (requisicao, resposta) => {
    const dados = requisicao.body

    categoria = categoria.map(c => {

        if(c.id == dados.categoriaId){

            c.sabores = c.sabores.filter(sabor => sabor.id != dados.saborId)

            return c;
        }

        return c;
    });
    return resposta.status(204).json();
})

categoriaRouters.put("/api/categorias/sabor", (requisicao, resposta) => {
    const dados = requisicao.body

    categoria = categoria.map(c => {

        if(c.id == dados.categoriaId){

            c.sabores = c.sabores.map(sabor => {
                if (sabor.id == dados.saborId) {
                    sabor.nome = dados.nome;
                }

                return sabor;
            })

            return c;
        }

        return c;
    });
    return resposta.status(204).json();
})


categoriaRouters.get("/api/categorias", (request, response) => {
    return response.status(200).json(categoria)
})

export default categoriaRouters