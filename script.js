const perguntas = [
  {
    pergunta: "Quanto é 2 + 3?",
    alternativas: ["4", "5", "6", "7"],
    correta: 1,
    imagem: "./imagens/q1-soma-basica.svg"
  },
  {
    pergunta: "Qual forma tem 4 lados iguais?",
    alternativas: ["Triângulo", "Quadrado", "Círculo", "Retângulo"],
    correta: 1,
    imagem: "./imagens/q2-quadrado.svg"
  },
  {
    pergunta: "Tenho 3 maçãs e ganho 2. Quantas tenho agora?",
    alternativas: ["3", "4", "5", "6"],
    correta: 2,
    imagem: "./imagens/q3-maças.svg"
  },
  {
    pergunta: "Qual forma NÃO tem cantos?",
    alternativas: ["Quadrado", "Triângulo", "Círculo", "Retângulo"],
    correta: 2,
    imagem: "./imagens/q4-circulo-sem-cantos.svg"
  },
  {
    pergunta: "Quanto é 10 - 4?",
    alternativas: ["5", "6", "7", "8"],
    correta: 1,
    imagem: "./imagens/q5-subtracao-10-4.svg"
  },
  {
    pergunta: "Quantos lados tem um triângulo?",
    alternativas: ["2", "3", "4", "5"],
    correta: 1,
    imagem: "./imagens/q6-triangulo-lados.svg"
  },
  {
    pergunta: "Tenho 5 bolinhas e ganho 2. Quantas ficam?",
    alternativas: ["5", "6", "7", "8"],
    correta: 2,
    imagem: "./imagens/q7-bolinhas.svg"
  },
  {
    pergunta: "Qual número vem depois de 7?",
    alternativas: ["6", "7", "8", "9"],
    correta: 2,
    imagem: "./imagens/q8-sequencia-numeros.svg"
  },
  {
    pergunta: "Tenho 6 moedas. Perco 2. Quantas ficam?",
    alternativas: ["3", "4", "5", "6"],
    correta: 1,
    imagem: "./imagens/q9-moedas.svg"
  },
  {
    pergunta: "Qual forma tem 4 lados?",
    alternativas: ["Círculo", "Triângulo", "Retângulo", "Estrela"],
    correta: 2,
    imagem: "./imagens/q10-retangulo.svg"
  }
];

let indice = 0;
let estrelas = 0;

function mostrarPergunta() {
  const atual = perguntas[indice];

  document.getElementById("pergunta").innerText = atual.pergunta;
  document.getElementById("feedback").innerText = "";
  document.getElementById("btnProximo").style.display = "none";

  // imagem
  const img = document.getElementById("imagemPergunta");
  img.src = atual.imagem;
  img.style.display = "block";

  // barra
  document.getElementById("barra-progresso").style.width =
    ((indice + 1) / perguntas.length) * 100 + "%";

  // alternativas
  const alternativas = document.getElementById("alternativas");
  alternativas.innerHTML = "";

  atual.alternativas.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.className = "alternativa";
    btn.innerText = texto;
    btn.onclick = () => verificar(i);
    alternativas.appendChild(btn);
  });
}

function verificar(escolha) {
  const correta = perguntas[indice].correta;
  const botoes = document.querySelectorAll(".alternativa");

  botoes.forEach(b => b.disabled = true);

  if (escolha === correta) {
    estrelas++;
    document.getElementById("feedback").innerHTML = "✅ Muito bem! +1 estrela 🌟";
  } else {
    document.getElementById("feedback").innerHTML =
      "❌ Quase! A resposta certa era: <b>" +
      perguntas[indice].alternativas[correta] +
      "</b>";
  }

  document.getElementById("pontuacao").innerText = "🌟 Estrelas: " + estrelas;
  document.getElementById("btnProximo").style.display = "block";
}

function proximaPergunta() {
  indice++;

  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    document.getElementById("quiz").innerHTML =
      "<h2>Missão Cumprida! 🚀</h2>" +
      "<p>Você fez " + estrelas + " de " + perguntas.length + " estrelas!</p>";
  }
}

window.onload = mostrarPergunta;