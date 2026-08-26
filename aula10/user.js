var users = JSON.parse(localStorage.getItem("users")) || []; // JSON.parse transforma string em objeto
var userOk = JSON.parse(localStorage.getItem("userOk")) || {}
var oi = document.getElementById("oi");
if (oi && userOk) oi.innerHTML = "Olá " + userOk?.nome

var listaUsers = document.getElementById("listaUsers");
if (listaUsers)
    listaUsers.innerHTML = JSON.stringify(users,null,4)
//for(let i=0;i<users.length;i++){ TESTE DO PROFESSOR  
//  listUsers.innerHTML += JSON.stringify(users[i].nome);}
var formR = document.getElementById("formRegister");
formR?.addEventListener("click", (e) => {// ? igual um if, testa a variavel
    e.preventDefault(); //impede de atualizar a tela

    let client = document.getElementById("cName").value;// apenas os input's tem value
    let mail = document.getElementById("cMail").value;
    let pass = document.getElementById("cPass").value;
    let date = document.getElementById("cDate").value;

    const user = {// objeto anônimo, estrutura ,json
        nome: client,
        email: mail,
        senha: pass,
        nascimento: date,
    }

    users.push(user)
    localStorage.setItem("users", JSON.stringify(users)) // localStorage fica salvo no navegador

    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html";
})

var formL = document.getElementById("formLogin");
formL?.addEventListener("click", (e) => {// esse "e" é um parametro do "addEventListener"
    e.preventDefault(); //impede de atualizar a tela

    let email = document.getElementById("cMailLogin").value;
    // essa variavel só funciona dentro do arrow function do paramentro passado
    let pass = document.getElementById("cPassLogin").value;

    let user = users.find(u => {
        return u.email == email
    })
    if (!user) {// ! not usuario 
        let NoUser = document.getElementById("rUserIncorrect");
        NoUser.innerHTML = JSON.stringify("Usuário Não Encontrado");
        return
    }

    if (user.senha == pass) {
        console.log("Login concluido")
        localStorage.setItem("userOk", JSON.stringify(user))
        window.location.href = "painel.html"

    } else {
        let NoPass = document.getElementById("rPassIncorrect")
        NoPass.innerHTML = JSON.stringify("Senha incorreta");
    }
})