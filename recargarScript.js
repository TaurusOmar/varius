// Esperar a que se cargue completamente la página
window.onload = function() {
  // Función para recargar el archivo
  function recargarArchivo() {
    window.location.href = 'https://cdn.jsdelivr.net/gh/TaurusOmar/varius/share2.js';
  }
  
  // Recargar el archivo cada 40 segundos
  setInterval(recargarArchivo, 40000);
}
