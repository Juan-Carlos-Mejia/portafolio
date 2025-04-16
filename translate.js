// Objeto con las traducciones
const translations = {
    es: {
        inicio: "Inicio",
        sobreMi: "Sobre mí",
        habilidades: "Habilidades",
        proyectos: "Proyectos",
        contacto: "Contacto",
        bienvenida: "Bienvenidos, soy Juan Mejía",
        subtitulo: "DESARROLLADOR BACK-END",
        descripcion: "Construyendo soluciones, optimizando el futuro.",
        curriculum: "Curriculum",
        habilidadesTecnicas: "Habilidades Técnicas",
        habilidadesBlandas: "Habilidades Blandas",
        certificaciones: "Certificaciones",
        misProyectos: "Mis Proyectos",
        contacto:"Contacto",
        nombre: "Nombre:",
        email: "Email:",
        mensaje: "Mensaje:",
        enviar: "Enviar",
        derechosReservados: "Todos los derechos reservados.",
        // Títulos de secciones
        tituloSobreMi: "Sobre mí",
        tituloContacto: "Contacto",
        // Texto Sobre Mí
        textoSobreMi: "Soy Juan Carlos Mejía Morales, estudiante de Ingeniería en Sistemas y Redes Informáticas con un enfoque multidisciplinario en el desarrollo de soluciones tecnológicas. Poseo conocimientos en desarrollo front-end y back-end, electrónica, animación con Blender y software libre. Además, tengo experiencia en gestión de proyectos, aplicando metodologías ágiles para optimizar el desarrollo de software. Me apasionan las nuevas tecnologías y su impacto en la transformación digital, buscando siempre innovar y mejorar procesos a través de la tecnología.",
        // Habilidades Blandas
        comunicacionEmpatia: "Comunicación \n Empatía",
        trabajoEquipo: "Trabajo en Equipo \nInteligencia emocional",
        resolucionProblemas: "Resolución de Problemas \nPensamiento crítico",
        adaptabilidad: "Adaptabilidad \nPaciencia y tolerancia al estrés",
        creatividad: "Creatividad \nÉtica y responsabilidad",
        aprendizaje: "Capacidad de aprendizaje \n Escucha activa",
        // Proyectos
        proyecto1Titulo: "Calculadora Salarial",
        proyecto1Desc: "Aplicación web para calcular su salario en el salvador despues de descontar lo que dicte la ley",
        proyecto2Titulo: "Sistema de Facturación para Alumnos",
        proyecto2Desc: "Plataforma web enfocado en el registros de alumnos, materias y facturación por inscripción",
        proyecto3Titulo: "TecnologyEco",
        proyecto3Desc: "Plataforma web enfocada en ser intermediaria entre usuarios y empresas para el reciclado de piezas de dispositivos electronicos",
        verProyecto: "Ver Proyecto"
    },
    en: {
        inicio: "Home",
        sobreMi: "About me",
        habilidades: "Skills",
        proyectos: "Projects",
        contacto: "Contact",
        bienvenida: "Welcome, I'm Juan Mejía",
        subtitulo: "BACK-END DEVELOPER",
        descripcion: "Building solutions, optimizing the future.",
        curriculum: "Resume",
        habilidadesTecnicas: "Technical Skills",
        habilidadesBlandas: "Soft Skills",
        certificaciones: "Certifications",
        misProyectos: "My Projects",
        contacto:"Contact",
        nombre: "Name:",
        email: "Email:",
        mensaje: "Message:",
        enviar: "Send",
        derechosReservados: "All rights reserved.",
        // Section titles
        tituloSobreMi: "About me",
        tituloContacto: "Contact",
        // About Me Text
        textoSobreMi: "I am Juan Carlos Mejía Morales, a Systems and Computer Networks Engineering student with a multidisciplinary approach to developing technological solutions. I have knowledge in front-end and back-end development, electronics, Blender animation, and free software. Additionally, I have experience in project management, applying agile methodologies to optimize software development. I am passionate about new technologies and their impact on digital transformation, always seeking to innovate and improve processes through technology.",
        // Soft Skills
        comunicacionEmpatia: "Communication \n Empathy",
        trabajoEquipo: "Teamwork \nEmotional Intelligence",
        resolucionProblemas: "Problem Solving \nCritical Thinking",
        adaptabilidad: "Adaptability \nPatience and stress tolerance",
        creatividad: "Creativity \nEthics and responsibility",
        aprendizaje: "Learning ability \n Active listening",
        // Projects
        proyecto1Titulo: "Salary Calculator",
        proyecto1Desc: "Web application to calculate your salary in El Salvador after deducting what the law dictates",
        proyecto2Titulo: "Student Billing System",
        proyecto2Desc: "Web platform focused on student registration, subjects, and enrollment billing",
        proyecto3Titulo: "TecnologyEco",
        proyecto3Desc: "Web platform focused on being an intermediary between users and companies for recycling electronic device parts",
        verProyecto: "View Project"
    }
};

// Función para cambiar el idioma
function changeLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'es' ? 'en' : 'es';
    document.documentElement.lang = newLang;
    
    // Actualizar textos del menú
    document.querySelector('a[href="#inicio"]').textContent = translations[newLang].inicio;
    document.querySelector('a[href="#sobre"]').textContent = translations[newLang].sobreMi;
    document.querySelector('a[href="#habilidades"]').textContent = translations[newLang].habilidades;
    document.querySelector('a[href="#proyectos"]').textContent = translations[newLang].proyectos;
    document.querySelector('a[href="#contacto"]').textContent = translations[newLang].contacto;
    
    // Actualizar sección de inicio
    document.querySelector('#inicio h1').textContent = translations[newLang].bienvenida;
    document.querySelector('.subtitulo').textContent = translations[newLang].subtitulo;
    document.querySelector('.descripcion').textContent = translations[newLang].descripcion;
    
    // Actualizar botón de curriculum
    document.querySelector('a[href="CV.pdf"]').textContent = translations[newLang].curriculum;
    
    // Actualizar título y texto Sobre Mí
    document.querySelector('#sobre h2').textContent = translations[newLang].tituloSobreMi;
    document.querySelector('.texto-sobre p').textContent = translations[newLang].textoSobreMi;
    
    // Actualizar títulos de secciones
    document.querySelector('#habilidades h2').textContent = translations[newLang].habilidadesTecnicas;
    document.querySelector('.habilidades-blandas h2').textContent = translations[newLang].habilidadesBlandas;
    
    // Actualizar caras del cubo (habilidades blandas)
    document.querySelector('.cara.frontal').textContent = translations[newLang].comunicacionEmpatia;
    document.querySelector('.cara.trasera').textContent = translations[newLang].trabajoEquipo;
    document.querySelector('.cara.izquierda').textContent = translations[newLang].resolucionProblemas;
    document.querySelector('.cara.derecha').textContent = translations[newLang].adaptabilidad;
    document.querySelector('.cara.superior').textContent = translations[newLang].creatividad;
    document.querySelector('.cara.inferior').textContent = translations[newLang].aprendizaje;
    
    // Actualizar sección de certificaciones
    document.querySelector('#certificaciones h2').textContent = translations[newLang].certificaciones;
    
    // Actualizar sección de proyectos
    document.querySelector('#proyectos h2').textContent = translations[newLang].misProyectos;
    
    // Actualizar títulos y descripciones de proyectos
    const proyectos = document.querySelectorAll('.proyecto');
    const proyectosTitulos = [
        translations[newLang].proyecto1Titulo,
        translations[newLang].proyecto2Titulo,
        translations[newLang].proyecto3Titulo
    ];
    const proyectosDesc = [
        translations[newLang].proyecto1Desc,
        translations[newLang].proyecto2Desc,
        translations[newLang].proyecto3Desc
    ];
    
    proyectos.forEach((proyecto, index) => {
        proyecto.querySelector('h3').textContent = proyectosTitulos[index];
        proyecto.querySelector('p').textContent = proyectosDesc[index];
        proyecto.querySelector('.boton-proyecto').textContent = translations[newLang].verProyecto;
    });
    
    // Actualizar formulario de contacto
    document.querySelector('#contacto h2').textContent = translations[newLang].contacto;
    document.querySelector('label[for="nombre"]').textContent = translations[newLang].nombre;
    document.querySelector('label[for="email"]').textContent = translations[newLang].email;
    document.querySelector('label[for="mensaje"]').textContent = translations[newLang].mensaje;
    document.querySelector('#contacto-form button').textContent = translations[newLang].enviar;
    
    // Actualizar footer
    document.querySelector('footer p').textContent = 
        `© 2025 Juan Mejia. ${translations[newLang].derechosReservados}`;
    
    // Actualizar texto del botón
    document.querySelector('#languageBtn').textContent = newLang.toUpperCase();
}

// Agregar el botón de idioma cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const langBtn = document.createElement('li');
    langBtn.innerHTML = '<button id="languageBtn" class="language-btn">EN</button>';
    menu.appendChild(langBtn);
    
    document.querySelector('#languageBtn').addEventListener('click', changeLanguage);
});