const container = document.querySelector('.container');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Posiciona el corazón aleatoriamente dentro del contenedor
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.top = `${Math.random() * 100}%`;

  container.appendChild(heart);

  // Elimina el corazón al finalizar la animación
  heart.addEventListener('animationend', () => {
    container.removeChild(heart);
  });
});


onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

