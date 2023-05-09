const image = document.querySelector('.zoom');

image.addEventListener('mouseover', () => {
  image.classList.add('zoom:hover');
});

image.addEventListener('mouseout', () => {
  image.classList.remove('zoom:hover');
});