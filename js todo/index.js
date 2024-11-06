const images = [
  'images/tractor y mangueras galeria.jpeg',
  'images/riegos  galeria.jpg',
  'images/panel galeria.jpg',
  'images/Manguera y campo galeria.jpeg',
  'images/IMPERMEABILIZACION DE TANQUE 3 galeria.jpeg'
];
let currentIndex = 0;
const intervalTime = 10000; // Tiempo en milisegundos (10000 ms = 10 segundos)
let autoShowInterval; // Variable para almacenar el intervalo de la presentación automática

function showImage(index) {
  const galleryImage = document.getElementById('gallery-image');
  galleryImage.style.opacity = 0; // Hacer la imagen invisible para el cambio
  setTimeout(() => {
      galleryImage.src = images[index]; // Cambiar la fuente de la imagen
      galleryImage.style.opacity = 1; // Hacer la imagen visible después de cambiarla
  }, 500); // Este retraso debe coincidir con la duración del efecto de desvanecimiento
}

function prevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  showImage(currentIndex);
  resetAutoShow(); // Reiniciar la presentación automática
}

function nextImage() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  showImage(currentIndex);
  resetAutoShow(); // Reiniciar la presentación automática
}

// Función para iniciar o reiniciar la presentación automática
function startAutoShow() {
  autoShowInterval = setInterval(nextImage, intervalTime);
}

// Función para reiniciar la presentación automática
function resetAutoShow() {
  clearInterval(autoShowInterval); // Limpiar el intervalo existente
  startAutoShow(); // Iniciar un nuevo intervalo
}

// Asegurarse de que la primera imagen se muestre correctamente al cargar la página
window.onload = function() {
  showImage(currentIndex); // Mostrar la primera imagen
  startAutoShow(); // Iniciar la presentación automática
};

