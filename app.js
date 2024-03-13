function cadastrarDespesa() {
    let novaDespesa = {
        ano: document.getElementById("ano").value,
        mes: document.getElementById("mes").value,
        dia: document.getElementById("dia").value,
        tipo: document.getElementById("tipo").value,
        descricao: document.getElementById("descricao").value,
        valor: document.getElementById("valor").value
    }

    // if (novaDespesa.ano == "" || novaDespesa.mes == "" || novaDespesa.dia == ""
    // || novaDespesa.tipo == "" || novaDespesa.descricao == "" || novaDespesa.valor == ""){ }
    gravar(novaDespesa)
}

function gravar(d){
    localStorage.setItem('Despesa', JSON.stringify(d))
}