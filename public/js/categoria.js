window.addEventListener("load", main)

let categorias = [];

async function loadCategorias() {
  
  let data = sessionStorage.getItem("auth_wanessa");

  if (data === null) {
    // redirect para pagina de login
    // rediret do window
  } 

  const resultado = await fetch("http://localhost:3333/api/categorias")
  const converterResultadoParaJson = await resultado.json()
  categorias = converterResultadoParaJson
  
  const divCategoria = document.getElementById("sabores");
  

  let divHtml = ``

  categorias.forEach(categoria => {
    divHtml += `
        <div>
          <h2 class="titulo-secao">${categoria?.nome} <button onclick="addSabor('${categoria.id}')">add sabor</button> <button onclick="deletarCategoria('${categoria.id}')">deletar categoria</button> <button onclick="atualizarCategoria('${categoria.id}')">atualizar categoria</button></h2>
          <div> 
          <ul class="lista-sabores">
            ${categoria.sabores.map(sabor => `
                <li class="item-sabor">
                  ${sabor.nome}
                  <button onclick="deletarSabor('${categoria.id}','${sabor.id}')">deletar sabor</button>
                  <button onclick="atualizarSabor('${categoria.id}','${sabor.id}')">atualizar sabor</button>
                </li>
              `).join("")}
            </div>
          </ul>
        </div>
      `
  });

  divCategoria.innerHTML = divHtml;
}

async function main() {
  loadCategorias()
}

async function addSabor(id) {
  let nome = prompt("Digite o nome do sabor:");

  await fetch('http://localhost:3333/api/categorias/sabor', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoriaId: id,
          nome
        })
  })

  loadCategorias()
}

async function addCategoria(id) {
  let nome = prompt("Digite o nome da categoria:");

  await fetch('http://localhost:3333/api/categorias', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoriaId: id,
          nome,
        })
  })

  loadCategorias()
}

async function atualizarCategoria(id) {
  let nome = prompt("Digite o nome da categoria:");

  await fetch('http://localhost:3333/api/categorias', {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoriaId: id,
          nome
        })
  })

  loadCategorias()
}

async function deletarCategoria(id) {
  await fetch('http://localhost:3333/api/categorias', {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoriaId: id
        })
  })

  loadCategorias()
}

async function deletarSabor(id,saborId) {
  await fetch('http://localhost:3333/api/categorias/sabor', {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoriaId: id,
          saborId,
        })
  })

  loadCategorias()
}

async function atualizarSabor(id,saborId) {
  let nome = prompt("Digite o nome da sabor: ");

  await fetch('http://localhost:3333/api/categorias/sabor', {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoriaId: id,
          saborId,
          nome
        })
  })

  loadCategorias()
}