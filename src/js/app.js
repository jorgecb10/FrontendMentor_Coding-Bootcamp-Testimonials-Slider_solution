const images = document.querySelectorAll('#imageCarousel img');
const texts = document.querySelectorAll('#textCarousel .info');
let currentIndex = 0;

function showItem(index) {
  // Mover imágenes
  const offset = -index * 100; // Calcula el porcentaje de desplazamiento
  document.querySelector('#imageCarousel > div').style.transform = `translateX(${offset}%)`;

  // Mostrar el texto correspondiente
  texts.forEach((text, idx) => {
    text.classList.toggle('hidden', idx !== index);
  });
}

// Navegación
document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showItem(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showItem(currentIndex);
});

// Iniciar con el primer ítem
showItem(currentIndex);
