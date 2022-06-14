const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Cara, tem que estar vendo direitinho, mas se tudo der certo, os ventos do norte sopram que sim.",
  "Obviamente que sim né querido, que perguntinha hein 0.o",
  "Pior que não meu chapa. Mas acontece, bola pra frente!",
  "Cara se você for ver direitnho, isso aí ja esta no caminho para dar certo",
  "Sim senhor!",
  "Infelizmente não vou conseguir te falar, pois estamos passando por problemas técnicos. Mas se quiser voltar amanha para tentar novamente, sera muito bem vindo! :)",
  "Error 404",
  "Se for uma sexta feira, pode ter certeza que vai tudo dar certo!",
  "Prefiro deixar pra te contar sobre isso mais tarde",
  "Vai dar bom!. Se não der, pode vir aqui cobrar",
  "Já deu né pai, esqueça tudo, ta brincando ? Forget fio ~~Sons de assovio~~",
  "Principe, isso vai acabar não acontecendo, mas acontece, faz parte da vida",
  "Meia noite te conto"
]

// clicar em fazer pergunta
function mostrar() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  // sumir a resposta depois de 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}

