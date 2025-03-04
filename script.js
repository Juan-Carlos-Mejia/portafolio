// JavaScript para interactividad (opcional)
document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Te contactaré pronto.');
    // Aquí puedes agregar código para enviar el formulario a un servidor
});

// Función para detectar el scroll
function revealOnScroll() {
    const sections = document.querySelectorAll('.reveal');

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si la sección está en el viewport
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible'); // Quita la clase si no está en el viewport
        }
    });
}

// Evento de scroll
window.addEventListener('scroll', revealOnScroll);

// Ejecutar al cargar la página para mostrar las secciones visibles
revealOnScroll();


// Selecciona el ícono del menú y el menú
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Función para alternar el menú
menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Cierra el menú al hacer clic en un enlace
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});