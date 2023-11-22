const listaPrincipal = []


function objetopc(nombre,error){
    const registro = {
        nombre,
        error,
        check:`<input type="checkbox">error</input>`
    }
    return registro
}

function mostrarTabla(){
    let tbody = document.getElementById("tabla")
    tbody.innerHTML = ""
    listaPrincipal.map((e,i)=>{
        tbody.innerHTML += `
        <tr>
            <th>${i}</th>
            <th>${e.nombre}</th>
            <th>${e.error}</th>
            <th>${e.check}</th>
        </tr>
        `
    }
    )
}

function registro (event){
    event.preventDefault()
        let nombre = document.getElementById('nombre')
        let error = document.getElementById("error")
        let registro = objetoPC(nombre.value,error.value)
        listaPrincipal.push(registro)
        nombre.value = ""
        error.value = ""
        mostrarTabla()
}