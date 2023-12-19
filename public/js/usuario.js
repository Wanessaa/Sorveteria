window.addEventListener("load", main)

async function main() {

}

async function deslogar () {
    sessionStorage.removeItem("auth_wanessa");
    // fazer redirect para a pagina de auth 
}


let loginForm = document.getElementById("meuForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

    let response = await fetch('http://localhost:3333/api/usuario/autenticar', {
          method: 'POST',
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            senha: senha
          })
    })
   console.log(response.status == 204)
    if (response.status == 204) {
        // aqui poderia ir um jwt
        let data = sessionStorage.setItem("auth_wanessa", response.body);

        window.location.href = "/cardapio.html"
    } else {
        alert("email ou senha incorreta!")

    }
});