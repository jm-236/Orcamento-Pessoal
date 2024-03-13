function getproximoId(){
    let proximoId = parseInt(localStorage.getItem('id')) + 1
    localStorage.setItem('id', parseInt(localStorage.getItem('id')) + 1)
    return proximoId
}

function gravar(d){
    localStorage.setItem(getproximoId(), JSON.stringify(d))
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

if (localStorage.getItem('id') === null){
    localStorage.setItem('id', 0)
}

