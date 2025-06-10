document.getElementById('contacto-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('¡Mensaje enviado con éxito!');
            form.reset();
        } else {
            throw new Error('Error al enviar');
        }
    })
    .catch(error => {
        alert('Hubo un error. Por favor intenta nuevamente.');
    });
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

let imagenesModal = [];
let indiceModal = 0;

// Al hacer clic en una imagen, se abre el modal y se guarda el índice
document.querySelectorAll('.certificacion img').forEach((imagen, index) => {
    imagenesModal.push(imagen.src);
    imagen.addEventListener('click', () => {
        indiceModal = index;
        modal.style.display = 'flex';
        modalImagen.src = imagenesModal[indiceModal];
    });
});

function cambiarImagenModal(direccion) {
    indiceModal += direccion;

    if (indiceModal < 0) {
        indiceModal = imagenesModal.length - 1;
    } else if (indiceModal >= imagenesModal.length) {
        indiceModal = 0;
    }

    modalImagen.src = imagenesModal[indiceModal];
}
document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            cambiarImagenModal(-1);
        } else if (event.key === 'ArrowRight') {
            cambiarImagenModal(1);
        } else if (event.key === 'escape') {
            cerrarModal();
        }
    }
});



//manipulacion del muro
let cubo = document.getElementById("cubo");
let rotX = 0, rotY = 0;
let startX, startY, isDragging = false;
let animacionActiva = true;
let tiempoReanudar;

// Actualiza la rotación del cubo
function actualizarRotacion() {
    cubo.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}

// Detiene la animación automática
function detenerAnimacion() {
    cubo.style.animation = "none";
    animacionActiva = false;
    clearTimeout(tiempoReanudar);
}

// Reactiva la animación después de 3s
function reanudarAnimacion() {
    if (!animacionActiva) {
        cubo.style.animation = "rotar 5s infinite linear";
        animacionActiva = true;
    }
}

// 🖱️ EVENTOS PARA PC (Mouse)
cubo.addEventListener("mousedown", (event) => {
    detenerAnimacion();
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    let deltaX = event.clientX - startX;
    let deltaY = event.clientY - startY;
    rotY += deltaX * 0.5;
    rotX -= deltaY * 0.5;

    actualizarRotacion();
    startX = event.clientX;
    startY = event.clientY;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    tiempoReanudar = setTimeout(reanudarAnimacion, 3000);
});

// 📱 EVENTOS PARA CELULAR/TABLET (Touch)
cubo.addEventListener("touchstart", (event) => {
    detenerAnimacion();
    isDragging = true;
    let touch = event.touches[0];
    startX = touch.clientX;
    startY = touch.clientY;

    // Evita el desplazamiento de la página
    event.preventDefault();
});

document.addEventListener("touchmove", (event) => {
    if (!isDragging) return;
    
    let touch = event.touches[0];
    let deltaX = touch.clientX - startX;
    let deltaY = touch.clientY - startY;
    rotY += deltaX * 0.5;
    rotX -= deltaY * 0.5;

    actualizarRotacion();
    startX = touch.clientX;
    startY = touch.clientY;

    // Evita el desplazamiento de la página al mover el cubo
    event.preventDefault();
}, { passive: false });

document.addEventListener("touchend", () => {
    isDragging = false;
    tiempoReanudar = setTimeout(reanudarAnimacion, 3000);
});


//proyecto
// Añade efecto de zoom al pasar el mouse
document.querySelectorAll('.proyecto').forEach(proyecto => {
    proyecto.addEventListener('mouseenter', () => {
        proyecto.querySelector('.proyecto-imagen').style.transform = 'scale(1.05)';
    });
    proyecto.addEventListener('mouseleave', () => {
        proyecto.querySelector('.proyecto-imagen').style.transform = 'scale(1)';
    });
});

//idioma
