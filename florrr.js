document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    let delay = 0;
    
    images.forEach(image => {
        setTimeout(() => {
            image.classList.add('fade-in');
        }, delay);
        delay += 200; // Ajusta el tiempo de retraso para cada imagen
    });

    images.forEach(image => {
        image.addEventListener('click', () => {
            // Aquí puedes agregar la lógica para lo que deseas hacer cuando se presiona una imagen
            console.log('¡Imagen presionada!');
        });
    });
});
