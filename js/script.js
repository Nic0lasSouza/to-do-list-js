const item = document.getElementById('input-item');
const btnsalvaritem =  document.getElementById('adicionar-item');
const listaDeCompras = document.getElementById('lista-de-compras');
let contador = 0;
btnsalvaritem.addEventListener('click',adicionarItem);

function adicionarItem(evento){
    evento.preventDefault()
    const itemDaLista = document.createElement('li');
    const containerItemLista = document.createElement('div');
    containerItemLista.classList.add("item-lista-container");

    const containerNomeDoItem = document.createElement('div')
    containerNomeDoItem.classList.add('container-nome-compra')

    const containerCheckbox = document.createElement('div')
    containerCheckbox.classList.add('checkbox-container')

    const checkboxInput = document.createElement('input')
    checkboxInput.type = 'checkbox';
    checkboxInput.classList.add('checkbox-input')
    checkboxInput.id = 'checkbox-' + contador++

    const checkboxLabel = document.createElement("label")
    checkboxLabel.setAttribute('for', checkboxInput.id)

    const checkboxCustomizado = document.createElement('div')
    checkboxCustomizado.classList.add('checkbox-customizado')

    checkboxLabel.appendChild(checkboxInput)
    checkboxLabel.appendChild(checkboxCustomizado)

    containerCheckbox.appendChild(checkboxLabel)
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement('p');
    nomeDoItem.innerText=item.value;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes= document.createElement('div')
    containerBotoes.classList.add('botao-acao')
    const btnRemoverItem = document.createElement('button');
    const btnEditarItem = document.createElement('button');
    btnRemoverItem.classList.add('botao-acao')
    btnEditarItem.classList.add('botao-acao')


    const imagemRemover = document.createElement('img')
    imagemRemover.src = 'img/delete.svg';
    imagemRemover.alt = 'Remover';

    const imagemEditar = document.createElement('img')
    imagemEditar.src = 'img/edit.svg';
    imagemEditar.alt = 'Editar';

    btnRemoverItem.appendChild(imagemRemover);
    containerBotoes.appendChild(btnRemoverItem);

    btnEditarItem.appendChild(imagemEditar);
    containerBotoes.appendChild(btnEditarItem)

    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotoes)
    itemDaLista.appendChild(containerItemLista)
    listaDeCompras.appendChild(itemDaLista)
}