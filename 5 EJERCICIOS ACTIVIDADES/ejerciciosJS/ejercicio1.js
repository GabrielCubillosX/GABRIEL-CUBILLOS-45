const productos = [
    { id: 1, nombre: "Televisor", precio: 570, descuento: 0 },
    { id: 2, nombre: "Nevera", precio: 1000, descuento: 0 },
    { id: 3, nombre: "Lavadora", precio: 680, descuento: 0 },
    { id: 4, nombre: "Computador", precio: 880, descuento: 0 }
  ];
  
  const arrayTabla = [];
  const selector = document.getElementById("selectorProductos");
  const tbody = document.querySelector("#tabla tbody");
  const agregarbtn = document.getElementById("boton");
  const tabla = document.getElementById("tabla");
  const descuentoInput = document.getElementById("descuentoInput");
  
  function searchselect(event) {
    event.preventDefault();
    tabla.style.display = "";
    const valorSeleccionado = parseInt(selector.value);
    const producto = productos.find(p => p.id === valorSeleccionado);
  
    if (producto) {
      const descuento = parseFloat(descuentoInput.value) || 0;
      const valorTotal = calcularTotal(descuento, producto.precio);
      agregarProducto(producto.id, producto.nombre, producto.precio, descuento, valorTotal);
  
      console.log(arrayTabla);
  
      // Construir el HTML para todas las filas
      const filasHTML = arrayTabla.map(item => `
        <tr data-id="${item.id}">
          <th>${item.nombre}</th>
          <td>${item.precio * 1000}</td>
          <td>${item.descuento}%</td>
          <td>${item.total}</td>
          <td><button class="btn btn-danger" onclick="eliminarProducto(${item.id})">Eliminar Producto</button></td>
        </tr>
      `).join('');
  
      // Insertar todo el HTML en el tbody
      tbody.innerHTML = filasHTML;
  
    } else {
      alert("Es OBLIGATORIO Seleccionar Un Producto");
    }
  }
  
  function calcularTotal(descuento, precio) {
    return precio - (precio * (descuento / 100));
  }
  
  function agregarProducto(id, nombre, precio, descuento, total) {
    const productoArray = {
      id: id,
      nombre: nombre,
      precio: precio,
      descuento: descuento,
      total: total
    };
    arrayTabla.push(productoArray);
  }
  
  function eliminarProducto(id) {
    // Eliminar el producto del arrayTabla basado en el id
    const index = arrayTabla.findIndex(item => item.id === id);
    if (index > -1) {
      arrayTabla.splice(index, 1);
  
      // Volver a renderizar la tabla
      searchselect(new Event('click')); // Simula un clic para actualizar la tabla
    }
  }
  
  agregarbtn.addEventListener("click", searchselect);
  