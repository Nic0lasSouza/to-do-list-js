import { excluirItem } from "./deleteItem.js";
import { verificarListaComprados } from "./verificarListaVazia.js";

const listaDeCompras = document.getElementById('lista-de-compras');
const listaComprados = document.getElementById("lista-comprados")
let contador = 0;

export function criarItemDaLista(item){
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

    checkboxLabel.addEventListener("click", function(evento){
        const checkboxInput = evento.currentTarget.querySelector('.checkbox-input')
        const checkboxCustomizado = evento.currentTarget.querySelector('.checkbox-customizado')
        const itemTitulo = evento.currentTarget.closest("li").querySelector('#item-titulo')
        
        if (checkboxInput.checked){
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(itemDaLista)
        } else{
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista)
        }
        verificarListaComprados(listaComprados)
    })

    const checkboxCustomizado = document.createElement('div')
    checkboxCustomizado.classList.add('checkbox-customizado')

    checkboxLabel.appendChild(checkboxInput)
    checkboxLabel.appendChild(checkboxCustomizado)

    containerCheckbox.appendChild(checkboxLabel)
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement('p');
    nomeDoItem.id= "item-titulo"
    nomeDoItem.innerText=item;
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

    btnRemoverItem.addEventListener("click", function(){
        excluirItem(itemDaLista)
    })

    const imagemEditar = document.createElement('img')
    imagemEditar.src = 'img/edit.svg';
    imagemEditar.alt = 'Editar';

    btnRemoverItem.appendChild(imagemRemover);
    containerBotoes.appendChild(btnRemoverItem);

    btnEditarItem.appendChild(imagemEditar);
    containerBotoes.appendChild(btnEditarItem)

    containerItemLista.appendChild(containerNomeDoItem)
    containerItemLista.appendChild(containerBotoes)

    const itemData = document.createElement('p');
    itemData.innerText=`${new Date().toLocaleDateString("pt-BR", {weekday: "long"})} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour:"numeric", minute:"numeric"})}`
    itemData.classList.add("texto-data")

    itemDaLista.appendChild(containerItemLista)
    itemDaLista.appendChild(itemData)
    
    return itemDaLista;
}