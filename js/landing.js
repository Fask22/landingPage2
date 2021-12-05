let menu = document.getElementById('icono');
let enlaces = document.getElementById('enlaces');

menu.addEventListener('click', (e) => {
    e.preventDefault();
    enlaces.classList.toggle("dos");
});