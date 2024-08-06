document.addEventListener('DOMContentLoaded', () => {
    const items = [
        document.querySelector('#img1 .carousel-image'),
        document.querySelector('#img2 .carousel-image'),
        document.querySelector('#img3 .carousel-image')
    ];

    const imageSources = [
        ['images/Logo Wiplast  1 sin fondo.png', 'images/Poelsan.png', 'images/45altamira_water_logo.png'],
        ['images/Logo Wiplast  1 sin fondo.png', 'images/durman.png', 'images/itm.png'],
        ['images/Logo Wiplast  1 sin fondo.png', 'images/rotoplast.jpg', 'images/netafim.png'],
        // Agrega más conjuntos de imágenes aquí
    ];

    let currentIndex = 0;
    const intervalTime = 5000; // Tiempo en milisegundos (5000 ms = 5 segundos)
    let autoShowInterval; // Variable para almacenar el intervalo de la presentación automática

    function showNextSet() {
        // Elimina la clase show de todas las imágenes para iniciar la transición de desvanecimiento
        items.forEach(item => {
            item.classList.remove('show');
        });

        setTimeout(() => {
            // Cambia las fuentes de las imágenes después de que las actuales se desvanezcan
            currentIndex = (currentIndex + 1) % imageSources.length;
            items.forEach((item, idx) => {
                item.src = imageSources[currentIndex][idx];
            });

            // Aparece el siguiente conjunto de imágenes
            setTimeout(() => {
                items.forEach(item => {
                    item.classList.add('show');
                });
            }, 50); // Breve retraso para aplicar la transición de opacidad
        }, 1500); // Duración de la transición de desvanecimiento
    }

    function startAutoShow() {
        autoShowInterval = setInterval(showNextSet, intervalTime);
    }

    function resetAutoShow() {
        clearInterval(autoShowInterval); // Limpiar el intervalo existente
        startAutoShow(); // Iniciar un nuevo intervalo
    }

    // Iniciar la presentación automática cuando se carga la página
    startAutoShow();
});
