//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("adicionar").addEventListener("click", adicionarAmigo);
  document.getElementById("sortear").addEventListener("click", sortearAmigo);
});

function limparCampoDeEntrada() {
  document.querySelector("input").value = "";
}

function adicionarAmigo() {
  let nomeDigitado = document.querySelector("input").value.trim();
  if (!nomeDigitado) {
    alert("Por favor, insira um nome.");
    return;
  }
  amigos.push(nomeDigitado);
  atualizarListaDeAmigos();
  limparCampoDeEntrada();
}

function atualizarListaDeAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Por favor, insira pelo menos 2 nomes antes de sortear.");
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  exibirSorteado(indiceAleatorio);
}

function exibirSorteado(indice) {
  document.getElementById("resultado").textContent = amigos[indice];
}

