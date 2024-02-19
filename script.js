const input = document.querySelector('.input')
const button = document.querySelector('.botao') /*Váriável que não muda*/
const listaCompleta = document.querySelector('.list')

let minhaListaDeItens = []/*Vaviável que muda*/


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `<li class="list-item ${item.concluida && "done"}" >
                                <img src="imagens/checked.png" alt="check-na-tarefa" onclick="concluirTarefa (${posicao})">
                                <p>${item.tarefa}</p>
                                <img src="imagens/trash.png" alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
                          </li>`

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens)) /*Vai transformar em string e guardar no storage*/

}

function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()

}

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)

    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaListaDeItens = JSON.parse(tarefasDoLocalStorage) /*Vai transformar de volta em objeto*/
    }

    mostrarTarefas()
}

recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa) /*Avisar quando botão for clicado e chamar função*/ 
