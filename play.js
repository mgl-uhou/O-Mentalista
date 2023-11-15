const sortear = () => parseInt(Math.random() * 100)

let num = 0;

do{
  num = sortear();
}while(num === 0);

let tentativas = 5;

const play = () => {
  const texto = document.getElementById("respostaAoChute");
  const chute = parseInt(document.getElementById('chute').value);
  const tentativasHTML = document.getElementById("tentativas");
  const botao = document.getElementById("botao");

  if(chute == ''){
    texto.textContent = "Você deve digitar um número";
  }
  else if(isNaN(chute)){
    texto.textContent = "Você deve digitar um número";
  }
  else if(chute > num && tentativas > 1){
    texto.textContent = "O número chutado é maior que o número escolhido.";
    tentativas--;
    tentativasHTML.textContent = tentativas;
    document.getElementById('chute').value = "";
  } 
  else if(chute < num && tentativas > 1){
    texto.textContent = "O número chutado é menor que o número escolhido.";
    tentativas--;
    tentativasHTML.textContent = tentativas;
    document.getElementById('chute').value = "";
  } 
  else if(chute === num && tentativas != 0){
    texto.textContent = "Você Ganhou"
    tentativas--;
    tentativasHTML.textContent = tentativas;
    document.getElementById('chute').value = "";
    document.getElementById('chute').readOnly = true;
    botao.onclick = "";

    const playagain = document.getElementById('playagain');
    playagain.style.display = 'block'
  } 
  else{
    tentativasHTML.textContent = 0;
    texto.textContent = `Você perdeu! O número escolhido é ${num}`;
    document.getElementById('chute').value = "";
    botao.onclick = "";

    const playagain = document.getElementById('playagain');
    playagain.style.display = 'block'
  }
};

export default play;