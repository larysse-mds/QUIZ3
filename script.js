const perguntas = [
  {
    pergunta: "No número 405, o algarismo 0 serve para:",
    alternativas: [
      "Representar cinco unidades",
      "Indicar que não há dezenas",
      "Aumentar o valor do número",
      "Representar centenas"
    ],
    correta: 1,
    imagem: "./imagens/q1-405-zero.svg"
  },
  {
    pergunta: "Qual número representa 3 centenas, 0 dezenas e 8 unidades?",
    alternativas: ["308", "380", "38", "3008"],
    correta: 0,
    imagem: "./imagens/q2-308-bloquinhos.svg"
  },
  {
    pergunta: "Qual figura plana possui quatro lados iguais e quatro ângulos retos?",
    alternativas: ["Triângulo", "Círculo", "Retângulo", "Quadrado"],
    correta: 3,
    imagem: "./imagens/q3-quadrado.svg"
  },
  {
    pergunta: "A figura que não possui lados nem vértices é o:",
    alternativas: ["Quadrado", "Triângulo", "Retângulo", "Círculo"],
    correta: 3,
    imagem: "./imagens/q4-circulo.svg"
  },
  {
    pergunta: "Qual é a ordem correta, do menor para o maior número?",
    alternativas: [
      "450 – 320 – 610",
      "320 – 450 – 610",
      "610 – 450 – 320",
      "450 – 610 – 320"
    ],
    correta: 1,
    imagem: "./imagens/q5-ordem-numeros.svg"
  },
  {
    pergunta: "O número 732 escrito por extenso é:",
    alternativas: [
      "Setecentos e trinta e dois",
      "Setenta e três e dois",
      "Setecentos e vinte e três",
      "Seiscentos e trinta e dois"
    ],
    correta: 0,
    imagem: "./imagens/q6-732-extenso.svg"
  },
  {
    pergunta: "Quanto é 358 + 247?",
    alternativas: ["505", "595", "605", "615"],
    correta: 2,
    imagem: "./imagens/q7-soma-358-247.svg"
  },
  {
    pergunta: "Calcule: 800 − 356",
    alternativas: ["454", "444", "456", "544"],
    correta: 1,
    imagem: "./imagens/q8-sub-800-356.svg"
  },
  {
    pergunta: "Maçã: 20, Banana: 35, Laranja: 15. Qual fruta foi mais vendida?",
    alternativas: ["Maçã", "Laranja", "Banana", "Todas igualmente"],
    correta: 2,
    imagem: "./imagens/q9-grafico-frutas-mais.svg"
  },
  {
    pergunta: "No mesmo gráfico de frutas, qual foi a menos vendida?",
    alternativas: ["Banana", "Maçã", "Laranja", "Todas igualmente"],
    correta: 2,
    imagem: "./imagens/q10-grafico-frutas-menos.svg"
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
