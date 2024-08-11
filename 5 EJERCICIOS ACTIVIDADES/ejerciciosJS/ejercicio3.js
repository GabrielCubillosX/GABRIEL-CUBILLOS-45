const arrayEstratos = [
    {id: 1, nombre: "Estrato 1", valorCargo: 1200},
    {id: 2, nombre: "Estrato 2", valorCargo: 2300},
    {id: 3, nombre: "Estrato 3", valorCargo: 3200}
]

const selectorEstratos = document.getElementById("selectorEstratos")
const consumoInput = document.getElementById("consumoInput")
const texto = document.getElementById("textoTotal")

function validarConsumo() {
    let consumo = consumoInput.value
    consumo = parseInt(consumo)
    if (consumo > 20) {
        totalRecargo(consumo)

    }else{
        calculoTotal(consumo)

} }

function totalRecargo(A) {
    const valorSeleccionado = parseInt(selectorEstratos.value)
    const estratos = arrayEstratos.find(i => i.id === valorSeleccionado)
    const valorConsumo = parseInt(estratos.valorCargo)
    const subTotal = (valorConsumo * A)+5800
    const recargo = subTotal * 0.10
    const total = subTotal + recargo
    texto.innerHTML=(`El total consumido es: ${total}`)
    guardarDatos(total)
}

function calculoTotal(A) {
    event.preventDefault()
    const valorSeleccionado = parseInt(selectorEstratos.value)
    const estratos = arrayEstratos.find(i => i.id === valorSeleccionado)
    const valorConsumo = parseInt(estratos.valorCargo)
    const subTotal = (valorConsumo * A)+5800
    const total = subTotal
    texto.innerHTML=(`El total consumido es: ${total}`)
    guardarDatos(total)
}

function cargarDatos() {
    const total = localStorage.getItem('Total')
    if (total !== null) {
        texto.innerHTML=(`El total consumido es: ${total}`)
    } else {
        alert('No hay datos guardados.')
    }
}

function guardarDatos(total) {
    localStorage.setItem("Total", total)
}
function eliminarDato(){
    localStorage.setItem("Total",0)
    const total = localStorage.getItem('Total')
    alert("SE HA ELIMINADO EL DATO GUARDADO")
    texto.innerHTML=(`El total consumido es: ${total}`)
}

window.onload = cargarDatos


consumoInput.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        event.preventDefault()
    
        validarConsumo()
    }
})