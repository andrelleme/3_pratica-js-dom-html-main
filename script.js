// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

function modificar() {
  
  const mensagens = [
    "Oi",
    "Professor",
    "Lucas",
    ":)"
  ];


  const elementosMensagens = document.getElementsByClassName('mensagem2');

  
  for (let i = 0; i < elementosMensagens.length; i++) {
    elementosMensagens[i].textContent = mensagens[i];
  }
}