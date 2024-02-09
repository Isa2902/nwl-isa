const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para se referir a um arquivo externo de script JavaScript?",
    respostas: [
      "<scrip src='script.js'></scrip>",
      "<javascript src='script.js'></javascript>",
      "<js src='script.js'></js>"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "="
    ],
    correta: 1
  },
  {
    pergunta: "Qual método JavaScript é usado para remover os espaços em branco do início e do final de uma string?",
    respostas: [
      "trim()",
      "strip()",
      "removeWhitespace()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual função JavaScript é usada para imprimir algo no console?",
    respostas: [
      "console.log()",
      "print()",
      "log()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual função JavaScript é usada para converter uma string em um número inteiro?",
    respostas: [
      "parseInt()",
      "stringToNumber()",
      "toInteger()",
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'push()' faz em JavaScript?",
    respostas: [
      "Adiciona um elemento no início de um array",
      "Remove o último elemento de um array",
      "Adiciona um elemento ao final de um array",
    ],
    correta: 2
  },
  {
    pergunta: "Qual declaração JavaScript é usada para declarar uma variável?",
    respostas: [
      "var",
      "variable",
      "int",
    ],
    correta: 0
  },
  {
    pergunta: "Qual método JavaScript é usado para selecionar elementos HTML?",
    respostas: [
      "getElementById()",
      "querySelector()",
      "selectElement()",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a saída do código: console.log(2 + '2' - 1)?",
    respostas: [
      "22",
      "3",
      "NaN",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador ternário em JavaScript?",
    respostas: [
      "Executar um loop",
      "Comparar dois valores",
      "Realizar uma operação condicional",
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) {
 const quizItem = template.content.cloneNode(true)
 quizItem.querySelector('h3').textContent = item.pergunta

 for(let resposta of item.respostas) {
   const dt = quizItem.querySelector('dl dt').cloneNode(true)
   dt.querySelector('span').textContent = resposta
   dt.querySelector('input').setAttribute('name', 'pergunta' - perguntas.indexOf(item))
   dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)

    }
    
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  }

   quizItem.querySelector('dl').appendChild(dt)
 }

 quizItem.querySelector('dl dt').remove()

 //coloca a pergunta na tela
 quiz.appendChild(quizItem)
}