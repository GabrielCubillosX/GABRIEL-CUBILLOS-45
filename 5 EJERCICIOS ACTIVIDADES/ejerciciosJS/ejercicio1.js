const productos = [
  { id: 1, nombre: "Televisor", precio: 570, descuento: 0 },
  { id: 2, nombre: "Nevera", precio: 1000, descuento: 0 },
  { id: 3, nombre: "Lavadora", precio: 680, descuento: 0 },
  { id: 4, nombre: "Computador", precio: 880, descuento: 0 }
]

let arrayTabla = []

function cargarDatos() {
  const datos = localStorage.getItem('productosGuardados')
  if (datos) {
      arrayTabla = JSON.parse(datos) /* CONVIERTE LOS DATOS JSON A UN ARRAY YA ACTUALIZA LA TABLA DE UNA VEZ */
      actualizarTabla()
  }
}

function guardarDatos() {
  localStorage.setItem('productosGuardados', JSON.stringify(arrayTabla)) /* LOS ARRAY SE CONVIERTEN EN JSON PARA GUARDARLOS EN STORAGE */
}

const selector = document.getElementById("selectorProductos")
const tbody = document.querySelector("#tabla tbody")
const agregarbtn = document.getElementById("boton")
const descuentoInput = document.getElementById("descuentoInput")

function calcularTotal(descuento, precio) {
  return precio - (precio * (descuento / 100))
}

function agregarProducto(id, nombre, precio, descuento, total) {
  const productoArray = {
      id: id,
      nombre: nombre,
      precio: precio,
      descuento: descuento,
      total: total
  }
  arrayTabla.push(productoArray)
  guardarDatos()
  actualizarTabla()
}

function eliminarProducto(index) {

  arrayTabla.splice(index, 1)
  

  guardarDatos()
  

  actualizarTabla()
}

function actualizarTabla() {
  const filasHTML = arrayTabla.map((item, index) => `
      <tr data-id="${item.id}">
          <td>${item.nombre}</td>
          <td>${item.precio*1000}</td>
          <td>${item.descuento}%</td>
          <td>${item.total*1000}</td>
          <td><button class="btn btn-danger" onclick="eliminarProducto(${index})">Eliminar Producto</button></td>
      </tr>
  `).join('')
  tbody.innerHTML = filasHTML
  console.log(arrayTabla)
}
function searchselect(event) {
  event.preventDefault()
  const valorSeleccionado = parseInt(selector.value)
  const producto = productos.find(p => p.id === valorSeleccionado)

  if (producto) {
      const descuento = parseFloat(descuentoInput.value) || 0
      const valorTotal = calcularTotal(descuento, producto.precio)
      agregarProducto(producto.id, producto.nombre, producto.precio, descuento, valorTotal)
  } else {
      alert("Es OBLIGATORIO Seleccionar Un Producto")
  }
}

agregarbtn.addEventListener("click", searchselect)
window.onload = cargarDatos