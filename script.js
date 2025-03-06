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

// Carrusel
let indice = 0;
const intervalo = 3000; // Intervalo de tiempo en milisegundos (3 segundos)
const contenedor = document.querySelector('.carrusel-contenedor');
const certificaciones = document.querySelectorAll('.certificacion');
const total = certificaciones.length;

// Clona las primeras imágenes y las añade al final, y viceversa
function clonarCertificaciones() {
    const primerasCertificaciones = Array.from(certificaciones).slice(0, 2); // Clona las primeras 2
    const ultimasCertificaciones = Array.from(certificaciones).slice(-2); // Clona las últimas 2

    // Añade las clonaciones al principio y al final
    primerasCertificaciones.forEach(certificacion => {
        const clon = certificacion.cloneNode(true);
        contenedor.appendChild(clon);
    });

    ultimasCertificaciones.forEach(certificacion => {
        const clon = certificacion.cloneNode(true);
        contenedor.insertBefore(clon, contenedor.firstChild);
    });

    // Ajusta el índice inicial para empezar en la primera imagen original
    indice = 2;
    contenedor.style.transform = `translateX(${-indice * 33.33}%)`;
}

// Mueve el carrusel
function moverCarrusel(direccion) {
    indice += direccion;

    // Si llega al final, regresa al inicio sin saltos
    if (indice >= total + 2) {
        setTimeout(() => {
            contenedor.style.transition = 'none'; // Desactiva la transición
            indice = 2; // Vuelve al inicio
            contenedor.style.transform = `translateX(${-indice * 33.33}%)`;
        }, 500); // Espera a que termine la transición
    }

    // Si llega al principio, regresa al final sin saltos
    if (indice < 2) {
        setTimeout(() => {
            contenedor.style.transition = 'none'; // Desactiva la transición
            indice = total + 2; // Vuelve al final
            contenedor.style.transform = `translateX(${-indice * 33.33}%)`;
        }, 500); // Espera a que termine la transición
    }

    // Activa la transición y mueve el carrusel
    contenedor.style.transition = 'transform 0.5s ease';
    contenedor.style.transform = `translateX(${-indice * 33.33}%)`;
}

// Desplazamiento automático
function iniciarCarruselAutomatico() {
    setInterval(() => {
        moverCarrusel(1); // Mueve el carrusel a la siguiente certificación
    }, intervalo);
}

// Clona las certificaciones y inicia el carrusel
clonarCertificaciones();
iniciarCarruselAutomatico();

// Modal
const modal = document.getElementById('modal');
const modalImagen = document.getElementById('modal-imagen');

document.querySelectorAll('.certificacion img').forEach(imagen => {
    imagen.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImagen.src = imagen.src;
    });
});

function cerrarModal() {
    modal.style.display = 'none';
}


let cubo = document.getElementById("cubo");
        let rotX = 0, rotY = 0;
        let startX, startY, isDragging = false;
        let animacionActiva = true;
        let tiempoReanudar;

        function actualizarRotacion() {
            cubo.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        }

        function detenerAnimacion() {
            cubo.style.animation = "none"; // Detiene la animación automática
            animacionActiva = false;
            clearTimeout(tiempoReanudar);
        }

        function reanudarAnimacion() {
            if (!animacionActiva) {
                cubo.style.animation = "rotar 5s infinite linear"; // Reactiva la animación
                animacionActiva = true;
            }
        }

        // Cuando el usuario hace clic en el cubo
        cubo.addEventListener("mousedown", (event) => {
            detenerAnimacion();
            isDragging = true;
            startX = event.clientX;
            startY = event.clientY;
        });

        // Cuando el usuario mueve el mouse mientras mantiene presionado el clic
        document.addEventListener("mousemove", (event) => {
            if (!isDragging) return;

            let deltaX = event.clientX - startX;
            let deltaY = event.clientY - startY;
            rotY += deltaX * 0.5; // Ajuste de sensibilidad horizontal
            rotX -= deltaY * 0.5; // Ajuste de sensibilidad vertical

            actualizarRotacion();
            startX = event.clientX;
            startY = event.clientY;
        });

        // Cuando el usuario suelta el clic
        document.addEventListener("mouseup", () => {
            isDragging = false;
            tiempoReanudar = setTimeout(reanudarAnimacion, 3000); // Reactiva la animación después de 3s sin mover
        });