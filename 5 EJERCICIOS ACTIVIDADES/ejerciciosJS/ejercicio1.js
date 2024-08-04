const productos = [
{id:1, nombre: "Televisor", precio: 570},
{id:2, nombre: "Nevera", precio: 1000},
{id:3, nombre: "Lavadora", precio: 680},
{id:4, nombre: "Computador", precio: 880}
]
const selector = document.getElementById("selector")
const tbody = document.querySelector("#tabla tbody")
const agregarbtn = document.getElementById("boton")
const tabla = document.getElementById("tabla")

function searchselect(event){
    event.preventDefault()
    tabla.style.display=""
const valorSeleccionado = parseInt(selector.value)
const producto = productos.find(p=>p.id === valorSeleccionado)


if (producto){
    const fila = document.createElement("tr")
    const productoElegido = document.createElement("th")
    productoElegido.textContent=producto.nombre
    fila.appendChild(productoElegido)
    const celdaPrecio = document.createElement("td")
    celdaPrecio.textContent=producto.precio
    fila.appendChild(celdaPrecio)
    const celdaDescuento = document.createElement("td")
    celdaDescuento.textContent="ola"
    fila.appendChild(celdaDescuento)
    const celdaTotal = document.createElement("td")
    celdaTotal.textContent="olka"
    fila.appendChild(celdaTotal)
    const celdaEliminar = document.createElement("td")
    const botonEliminar = document.createElement("button")
    botonEliminar.textContent="Eliminar Producto"
    botonEliminar.classList.add ("btn","btn-danger")
    botonEliminar.addEventListener("click",()=>{
    tbody.removeChild(fila)
    })
    celdaEliminar.appendChild(botonEliminar)
    fila.appendChild(celdaEliminar)

    tbody.appendChild(fila)

} else {alert("Es OBLIGATORIO Seleccionar Un Producto")}
}
agregarbtn.addEventListener("click",searchselect)