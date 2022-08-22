function tocaSom (seletorAudio) {

   const elemento = document.querySelector(seletorAudio);

   if(elemento && elemento.localName === 'audio'){
    elemento.play();
    }
    else {
         console.log('Elemento não encontrado ou seletor inválido');
    }
}
 const listaDeTeclas = document.querySelectorAll('.tecla'); // constante que identifica os botões feitos no html ao js.

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas [contador];
    const instrumento = tecla.classList[1]; //classList é um comando que identifica para o js qual íncide de uma lista de classe iremos utilizar para executar o código.
    const idAudio = `#som_${instrumento}`; //template string para os IDs dos sons serem dinâmicos, conforme o click na tecla, com base na constante "instrumento".
    
    tecla.onclick = function (){
         tocaSom(idAudio);               
    }
    tecla.onkeydown = function (evento){        
        if (evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
     }
    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}