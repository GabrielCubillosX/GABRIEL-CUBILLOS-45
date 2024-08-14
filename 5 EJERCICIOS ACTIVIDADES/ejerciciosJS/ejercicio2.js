const cedulaInput= document.getElementById("cedula")
const cedulaInput2= document.getElementById("cedula2")
const nombreInput= document.getElementById("nombre")
const telefonoInput= document.getElementById("telefono")
const edadInput= document.getElementById("edad")
const formRegistro= document.getElementById("formularioRegistro")
const titulo= document.getElementById("titulo")
const titulo2= document.getElementById("titulo2")
const form = document.getElementById("form")
const boton= document.getElementById("botonSubmit")
const botonRegistro = document.getElementById("botonRegistro")
let registrados= [ ]

function obtencionDatos (event){
  event.preventDefault()
if (!cedulaInput.value){
  mostrarFormulario()
}else{
  busqueda(cedulaInput)
  
}
}


function mostrarFormulario(){
 
  if (formRegistro.style.display === "none"){
    form.style.display="none"
    formRegistro.style.display="block"
    titulo.innerHTML="REGíSTRESE EN EL SISTEMA"
  } else {
    formRegistro.style.display="none"
    form.style.display="block"
  }

}

function registrarUsuario(event) {
  event.preventDefault()
if (!nombreInput.value.trim() || !cedulaInput2.value.trim()|| !telefonoInput.value.trim()|| !edadInput.value.trim()) {
alert("Llene todos los campos")
}else{
  let persona= {
    nombre:nombreInput.value,
    cedula:cedulaInput2.value,
    telefono:telefonoInput.value,
    edad:parseInt(edadInput.value)
  }
registrados.push(persona)
console.log(registrados)
guardarDatos()
titulo2.innerHTML="REGISTRO EXITOSO"
}
}



function busqueda(cedulaInpt) {
  const resultado = registrados.find(i => i.cedula === cedulaInpt.value)
if (resultado){
alert("persona encontrada")
}else {
mostrarFormulario()
}
}


function cargarDatos() {
  formRegistro.style.display = "none"
    const datos = localStorage.getItem('personasGuardadas')
    if (datos) {
        registrados = JSON.parse(datos) //CONVIERTE LOS DATOS JSON A UN ARRAY YA ACTUALIZA LA TABLA DE UNA VEZ
        // actualizarDatos()
        console.log(registrados)
    }
  }
  
  function guardarDatos() {
    localStorage.setItem('personasGuardadas', JSON.stringify(registrados)) //LOS ARRAY SE CONVIERTEN EN JSON PARA GUARDARLOS EN STORAGE
  }         
  
window.onload = cargarDatos
boton.addEventListener("click",obtencionDatos)
botonRegistro.addEventListener("click",registrarUsuario)