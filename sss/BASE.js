// Obtener los botones de navegación
var btnAnterior = document.getElementById('btn-anterior');
var btnSiguiente = document.getElementById('btn-siguiente');

// Obtener el contenedor de productos
var productosContainer = document.getElementById('productos-container');

// Calcular el ancho de un producto
var anchoProducto = productosContainer.children.length > 0 ? productosContainer.children[0].offsetWidth : 0;

// Agregar event listeners para el clic en los botones
btnAnterior.addEventListener('click', function() {
  // Calcular el nuevo valor de desplazamiento restando el ancho de un producto
  var nuevoScrollLeft = productosContainer.scrollLeft - anchoProducto;

  // Realizar la animación de desplazamiento suave hacia la izquierda
  productosContainer.scrollTo({
    left: nuevoScrollLeft,
    behavior: 'smooth'
  });
});

btnSiguiente.addEventListener('click', function() {
  // Calcular el nuevo valor de desplazamiento sumando el ancho de un producto
  var nuevoScrollLeft = productosContainer.scrollLeft + anchoProducto;

  // Realizar la animación de desplazamiento suave hacia la derecha
  productosContainer.scrollTo({
    left: nuevoScrollLeft,
    behavior: 'smooth'
  });
});

// Comprobar si el objeto productosContainer es null o undefined antes de acceder a su propiedad children
if (productosContainer !== null && typeof productosContainer !== 'undefined' && productosContainer.children.length > 0) {
  // Acceder a la propiedad productosContainer.children aquí
} else {
  // Manejar el caso en el que productosContainer es null o undefined o no tiene hijos
}
