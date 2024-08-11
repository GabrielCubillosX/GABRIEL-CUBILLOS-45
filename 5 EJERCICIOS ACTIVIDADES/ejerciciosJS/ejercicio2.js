function obtencionDatos (){


}



function cargarDatos() {
    const datos = localStorage.getItem('productosGuardados')
    if (datos) {
        arrayTabla = JSON.parse(datos) /* CONVIERTE LOS DATOS JSON A UN ARRAY YA ACTUALIZA LA TABLA DE UNA VEZ */
        actualizarDatos()
    }
  }
  
  function guardarDatos() {
    localStorage.setItem('productosGuardados', JSON.stringify(arrayTabla)) /* LOS ARRAY SE CONVIERTEN EN JSON PARA GUARDARLOS EN STORAGE */
  }         
  agregarbtn.addEventListener("click", searchselect)
window.onload = cargarDatos
