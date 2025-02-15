let nome = [];
let amigo = '';
let limpar;
function adicionarAmigo (){


    amigo = document.querySelector('input').value;

    if(amigo == '' || nome.includes(amigo)){
        alert('Envie um nome valido');
    }
    else{
    nome.push(amigo);
    console.log(nome);
    atualizarLista();
    }
    limparLista('resultado');
    limparEntrada();

    
}

function limparEntrada()
{
    amigo = document.querySelector('input');
    amigo.value = '';
}

function atualizarLista() {
    
    limparLista('listaAmigos');

    for(let i = 0; i < nome.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = nome[i];
        limpar.appendChild(elemento);

    }

    
}
function gerarIndiceAleatorio (){
    let TamanhoDaLista = nome.length;
    let indiceAleatorio = parseInt(Math.random() * (TamanhoDaLista - 1) + 1);
    console.log(TamanhoDaLista);
    console.log(indiceAleatorio);
    return indiceAleatorio;
}
function sortearAmigo(){
        let indice = gerarIndiceAleatorio();
        limparLista('listaAmigos');
        let teste = document.getElementById('resultado');
        teste.innerHTML = nome[indice];

}
function limparLista(tag){
        limpar = document.getElementById(tag);
        limpar.innerHTML = '';
}

