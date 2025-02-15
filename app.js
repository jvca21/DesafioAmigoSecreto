let nome = [];
let amigo = '';
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
    limparEntrada();

    
}

function limparEntrada()
{
    amigo = document.querySelector('input');
    amigo.value = '';
}

function atualizarLista() {
    
    let nomesDeAmigos = document.querySelector('#listaAmigos');
    
    // Limpa a lista antes de adicionar novos itens
    nomesDeAmigos.innerHTML = '';

    // Percorre o array de amigos e cria um <li> para cada nome
    nome.forEach(function(amigo) {
        let li = document.createElement('li'); // Cria o <li>
        li.textContent = amigo; // Adiciona o nome ao <li>
        nomesDeAmigos.appendChild(li); // Adiciona o <li> à lista
    });
}


