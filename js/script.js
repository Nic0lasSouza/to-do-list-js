const item = document.getElementById('input-item');
const btnsalvaritem =  document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras')

btnsalvaritem.addEventListener('click',adicionarItem);

function adicionarItem(evento){
    evento.preventDefault()
    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoItem = document.createElement('div')
    const nomeDoItem = document.createElement('p');
    nomeDoItem.innerText=item.value;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes= document.createElement('div')
    const btnRemoverItem = document.createElement('button');
    btnRemoverItem.classList.add('botao-acao')

    const imagemRemover = document.createElement('img')
    imagemRemover.src = 'img/delete.svg';
    imagemRemover.alt = 'Remover';

    btnRemoverItem.appendChild(imagemRemover);
    containerBotoes.appendChild(btnRemoverItem);

    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotoes)
    itemDaLista.appendChild(containerItemLista)
    listaDeCompras.appendChild(itemDaLista)
}