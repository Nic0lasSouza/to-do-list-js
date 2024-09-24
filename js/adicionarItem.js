import { criarItemDaLista } from "./criarItemLista.js";

const item = document.getElementById('input-item');
const listaDeCompras = document.getElementById('lista-de-compras');

export function adicionarItem(evento){
    evento.preventDefault()
    const itemDaLIsta = criarItemDaLista(item.value)
    listaDeCompras.appendChild(itemDaLIsta)
}