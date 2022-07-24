/*
documento = acessa documento
querySelector = seleção
. = classe
# = id
*/



// Função TOCASOM passando parâmetro
function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    //Buscando através da função documento com o selector, utilizando a função play disponível
    if(elemento && elemento.localname === 'aduio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

//Constante que recebe todas as teclas
const listaDeteclas = document.querySelectorAll('.tecla');

//Enquanto a constante CONTADOR for menor que o range da lista de teclas
for ( let contador = 0; contador < listaDeteclas.length; contador++){
    //constante TECLA recebe a lista de tecladas pelo contador
    const tecla = listaDeteclas[contador];
    //contante INSTRUMENTO recebe a lista de teclas pelo id
    const instrumento = tecla.classList[1];
    //Templeate String
    //constante IDAUDIO recebe através do templeate String a lista de tecla pelo instrumento
    const idAudio = `#som_${instrumento}`;
    //A tecla clicada recebe a função sem parâmetro
    tecla.onclick = function(){
        //Função TOCASOM recebe parâmetro do áduio do instrumento clicado
        tocaSom(idAudio);
    };
    //Criado evento
    //Chama const tecla, coloca a função inominável e coloca o onkeydown que significa apertado para baixo
    tecla.onkeydown = function(evento){
        //constante tecla chamada da lista de classes e diz que ficará ativa pelo css
        if(evento.code === 'Space'|| evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

    //exibe contador
    console.log(contador);
}