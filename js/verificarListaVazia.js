const mensagemTextoVazia = document.getElementById("mensagem-vazia")

export function verificarLIstaVazia(lista){
    if(lista.childElementCount == 0){
        mensagemTextoVazia.style.display = "block"
    }else{
        mensagemTextoVazia.style.display = "none"
    }
}