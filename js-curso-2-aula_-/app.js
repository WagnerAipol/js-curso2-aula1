let numMax = 10;
let listaDeNumerosSorteados = [];
let numSecreto = gerarNumeroAleatorio();
let tentativa = 1;

display();

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa'
    if(chute == numSecreto){
        exibirTextoTela('h1', 'Acertou!');
        exibirTextoTela('p', `Isso ai garoto(a) o número é realmente o ${numSecreto}, você acertou com ${tentativa} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numSecreto){
            exibirTextoTela('h1', 'Erouuuu!');
            exibirTextoTela('p', 'Tente de novo o número é menor.');
        }else{
            exibirTextoTela('h1', 'Erouuuu!');
            exibirTextoTela('p', 'Tente de novo o número é maior.');
        }
    }
    tentativa++;
    limpaInput();
}

function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numMax + 1);
    if(listaDeNumerosSorteados == numMax){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limpaInput(){
    let limpar = document.querySelector('input');
    limpar.value = '';
}

function display(){
    exibirTextoTela('h1', 'Jogo de Adivinhar');
    exibirTextoTela('p', `Escolha um numero de 0 até ${numMax}.`);
}

function reiniciarJogo(){
    console.log(listaDeNumerosSorteados);
    numSecreto = gerarNumeroAleatorio();
    limpaInput();
    tentativa = 1;
    display();
    let desativarButton = document.getElementById('reiniciar');
    desativarButton.setAttribute('disabled', true);
}