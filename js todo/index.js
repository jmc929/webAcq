const images = [
  // Asegúrate de que la imagen estática no esté en este array
  'images/tractor y mangueras galeria.jpeg',
  'images/riegos galeria.jpg',
  'images/panel galeria.jpg',
  'images/Manguera y campo galeria.jpeg',
  'images/IMPERMEABILIZACION DE TANQUE 3 galeria.jpeg'
];
let currentIndex = 0;
const intervalTime = 10000; // Tiempo en milisegundos (3000 ms = 3 segundos)
let autoShowInterval; // Variable para almacenar el intervalo de la presentación automática

function showImage(index) {
  const galleryImage = document.getElementById('gallery-image');
  galleryImage.style.opacity = 0;
  setTimeout(() => {
      galleryImage.src = images[index];
      galleryImage.style.opacity = 1;
  }, 500);
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

// Iniciar la presentación automática cuando se carga la página
window.onload = startAutoShow;
