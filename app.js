function getproximoId(){
    let proximoId = parseInt(localStorage.getItem('id')) + 1
    localStorage.setItem('id', parseInt(localStorage.getItem('id')) + 1)
    return proximoId
}

function gravar(d){
    let id = getproximoId()
    // d.id = id
    // console.log(d)
    localStorage.setItem(id, JSON.stringify(d))
}

function janelaSucessoRemocao() {

    document.getElementById("div-titulo").className = "modal-header text-success"
    document.getElementById("div-titulo").innerHTML = "Sucesso na Exclusão!"
    document.getElementById("texto-aviso").innerHTML = "\n  Despesa removida com sucesso.\n"
    document.getElementById("botao-confirmacao").className = "btn btn-success"
    document.getElementById("botao-confirmacao").innerHTML = "Ok"
}

function janelaSucesso() {

    document.getElementById("div-titulo").className = "modal-header text-success"
    document.getElementById("div-titulo").innerHTML = "Sucesso na gravação!"
    document.getElementById("texto-aviso").innerHTML = "\n  Despesa salva com sucesso.\n"
    document.getElementById("botao-confirmacao").className = "btn btn-success"
    document.getElementById("botao-confirmacao").innerHTML = "Ok"
}

function janelaErro() {

    document.getElementById("div-titulo").className = "modal-header text-danger"
    document.getElementById("div-titulo").innerHTML = "Erro na gravação!"
    document.getElementById("texto-aviso").innerHTML = "\n  Preencha todos os dados corretamente.\n"
    document.getElementById("botao-confirmacao").className = "btn btn-danger"
    document.getElementById("botao-confirmacao").innerHTML = "Voltar e corrigir"
}

function cadastrarDespesa() {

    let novaDespesa = {
        ano: document.getElementById("ano").value,
        mes: document.getElementById("mes").value,
        dia: document.getElementById("dia").value,
        tipo: document.getElementById("tipo").value,
        descricao: document.getElementById("descricao").value,
        valor: document.getElementById("valor").value,

        validarDados: function() {
            for (let i in this){
                if (this[i] == "" || this[i] == null || this[i] == undefined){
                    return false
                }
            }
            return true
        }
    }

    if (novaDespesa.validarDados()){
        gravar(novaDespesa)
        janelaSucesso()
        $('#modalRegistraDespesa').modal('show')
    }
    else{
        janelaErro()
        $('#modalRegistraDespesa').modal('show')
    }

    document.getElementById("ano").value = ""
    document.getElementById("mes").value = ""
    document.getElementById("dia").value = ""
    document.getElementById("tipo").value = ""
    document.getElementById("descricao").value = ""
    document.getElementById("valor").value = ""
}

function recuperarDados() {
    let lista = []
    let i = localStorage.getItem('id')

    while(i > 0){
        let d = JSON.parse(localStorage.getItem(i))
        if (d !== null){
            d.id = i
            lista.push(d)
        }
        i--
    }
    return lista
}

function mostrarListaDespesas(lista = Array(), filtro = false) {
    var listaDespesas = document.getElementById("listaDespesas")
    listaDespesas.innerHTML = ""

    if (lista.length == 0 && filtro == false) {
        var lista = recuperarDados()
    }

    lista.forEach(function(d) {
        // console.log(d)
        let linha = listaDespesas.insertRow()

        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        switch(d.tipo){
            case '1':
                linha.insertCell(1).innerHTML = 'Alimentação'
                break
            case '2':
                linha.insertCell(1).innerHTML = 'Educação'
                break
            case '3':
                linha.insertCell(1).innerHTML = 'Lazer'
                break
            case '4':
                linha.insertCell(1).innerHTML = 'Saúde'
                break
            case '5':
                linha.insertCell(1).innerHTML = 'Transportes'
                break
        }

        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = `${parseFloat(d.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`

        let btn = document.createElement("button")
        btn.className = 'btn btn-outline-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id = `id_despesa_${d.id}`
        btn.onclick = function(){

            let id = this.id.replace("id_despesa_", "")
            localStorage.removeItem(id)

            janelaSucessoRemocao()
            $('#modalRegistraDespesa').modal('show')
            // window.location.reload()
        }

        linha.insertCell(4).append(btn)

    });
}

function removerDespesa() {

}

function pesquisarDespesas() {

    let despesa = {
        ano: document.getElementById("ano").value,
        mes: document.getElementById("mes").value,
        dia: document.getElementById("dia").value,
        tipo: document.getElementById("tipo").value ,
        descricao: descricao = document.getElementById("descricao").value,
        valor: valor = document.getElementById("valor").value,
    }

    let lista = recuperarDados()

    for(i in despesa){
        // console.log(despesa[i])
        if (despesa[i] != ""){
            lista = lista.filter(d => despesa[i] == d[i])
        }
    }
    console.log(lista)
    mostrarListaDespesas(lista, true)
}


// main
if (localStorage.getItem('id') === null){
    localStorage.setItem('id', 0)
}
