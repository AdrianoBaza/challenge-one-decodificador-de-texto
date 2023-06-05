const mensagemEntrada = document.querySelector('#mensagemEntrada'); //entrada do usuário na seção main

mensagemEntrada.focus(); //ativa o foco no campo de entrada

const exclamacao = document.querySelector('.exclamacao');


//REGRA DO ENCRIPTADOR
// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



//oculta o botão copiar
function ocultarBotaoCopiar() {

    element = document.querySelector('#botaoCopiar');
    element.style.visibility = 'hidden';

}



//oculta o botão colar
function ocultarBotaoColar() {

    element = document.querySelector('#botaoColar');
    element.style.visibility = 'hidden';

}



//oculta o botão inicio
function ocultarBotaoInicio() {

    element = document.querySelector('#botaoInicio');
    element.style.visibility = 'hidden';

}



//oculta botões criptografar e descriptografar
function ocultarBotoesEncriptografar() {

    element = document.querySelector('.botoesEncriptografarBox');
    element.style.visibility = 'hidden';

}



//oculta o ícone de exclamação
function ocultarExclamacao() {

    element = document.querySelector('.exclamacao');
    exclamacao.style.visibility = 'hidden';

}



//oculta a imagem do mascote
function ocultarMascote() {

    element = document.querySelector('#mascoteImagem');
    element.style.visibility = 'hidden';
        
}



//exibe o botao copiar
function exibirBotaoCopiar() {

    element = document.querySelector('#botaoCopiar');
    element.style.visibility = 'visible';

}



//exibe o botão colar
function exibirBotaoColar() {

    element = document.querySelector('#botaoColar');
    element.style.visibility = 'visible';

}



//exibe o botão início
function exibirBotaoInicio() {

    element = document.querySelector('#botaoInicio');
    element.style.visibility = 'visible';

}



//Envia mensagens dinâmicamente conforme o usuário avança as etapas do decodificador. Exibe no elemento mensagemSaidaDinamica na seção aside
function exibirAlertaSaida(mensagem) {

    document.getElementById('mensagemSaidaDinamica').innerHTML= mensagem;
    element = document.querySelector('#mensagemSaidaDinamica');
    element.style.visibility = 'visible';

}



//Envia mensagens dinâmicamente conforme o usuário avança as etapas do decodificador. Exibe no elemento mensagemEntradaDinamica na seção main 
function exibirAlertaEntrada(mensagem) {

    document.getElementById('mensagemEntradaDinamica').innerHTML= mensagem;
    element = document.querySelector('#mensagemEntradaDinamica');
    element.style.visibility = 'visible';

}



//chama essas funções para iniciar a aplicação com os botões ocultos.
ocultarBotaoCopiar();
ocultarBotaoColar();
ocultarBotaoInicio();