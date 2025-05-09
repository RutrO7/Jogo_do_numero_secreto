let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = numeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto,'Brazilian Portuguese Female',
        {rate:1.2});
    
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 100');
}
    3
 exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {

        exibirTextoNaTela ('h1', 'parabéns!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativa = `Vocé descobrio o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

         

     } else {
      if (chute > numeroSecreto){
        exibirTextoNaTela ('h1', 'O número é menor');
     } else {
        exibirTextoNaTela ('h1', 'O número é maior');
    }
    tentativas++
    espacoVazio();
     
 }  
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeroNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeNumeroNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
        
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    }
    else {
     listaDeNumerosSorteados.push(numeroEscolhido);
     console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}
function espacoVazio() {
    let chute = document.querySelector ('input');
    chute.value = '';
}
function reiniciarJogo() {
   numeroSecreto = numeroAleatorio();
    espacoVazio();
    tentativas =1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute ('disabled', 
    true);

}
