const mensagemTextoVazia = document.getElementById("mensagem-vazia")
const containerListaComprados = document.getElementById("container-lista-comprados")

export function verificarLIstaVazia(lista){
    if(lista.childElementCount == 0){
        mensagemTextoVazia.style.display = "block"
    }else{
        mensagemTextoVazia.style.display = "none"
    }
}
export function verificarListaComprados(lista){
    if(lista.childElementCount == 0){
        containerListaComprados.style.display = "none"
    } else{
        containerListaComprados.style.display = "block"
    }
}