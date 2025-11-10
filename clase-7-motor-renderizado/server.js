const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuración de Handlebars como motor de renderizado
app.engine('handlebars', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Datos de ejemplo para el portafolio
const projects = [
    {
        id: 1,
        title: 'Sistema de Gestión de Tareas',
        description: 'Aplicación web para gestionar tareas y proyectos con Node.js y MongoDB',
        technologies: ['Node.js', 'Express', 'MongoDB', 'Handlebars'],
        image: '/images/project1.jpg',
        featured: true
    },
    {
        id: 2,
        title: 'E-commerce Platform',
        description: 'Plataforma de comercio electrónico con carrito de compras y pagos integrados',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        image: '/images/project2.jpg',
        featured: true
    },
    {
        id: 3,
        title: 'Blog Personal',
        description: 'Blog con sistema de comentarios y administración de contenido',
        technologies: ['Express', 'EJS', 'MySQL', 'Bootstrap'],
        image: '/images/project3.jpg',
        featured: false
    }
];

const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'React', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'MongoDB', level: 75 },
    { name: 'Git', level: 88 }
];

// Rutas
app.get('/', (req, res) => {
    res.render('home', {
        title: 'Inicio - Mi Portafolio',
        pageTitle: 'Bienvenido a mi Portafolio',
        subtitle: 'Desarrollador Full Stack',
        projects: projects.filter(p => p.featured),
        showContactButton: true
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Acerca de Mí',
        pageTitle: 'Sobre Mí',
        bio: 'Soy un desarrollador web apasionado por crear soluciones innovadoras y eficientes. Con más de 3 años de experiencia en desarrollo full stack, me especializo en JavaScript y sus frameworks modernos.',
        skills: skills,
        education: [
            {
                degree: 'Ingeniería en Sistemas',
                institution: 'Universidad Técnica',
                year: '2018 - 2022'
            },
            {
                degree: 'Certificación Full Stack',
                institution: 'Bootcamp Code Academy',
                year: '2023'
            }
        ]
    });
});

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Proyectos',
        pageTitle: 'Mis Proyectos',
        projects: projects,
        projectCount: projects.length
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contacto',
        pageTitle: 'Contáctame',
        email: 'desarrollador@ejemplo.com',
        phone: '+593 99 999 9999',
        socialMedia: [
            { platform: 'GitHub', url: 'https://github.com/usuario', icon: 'github' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/usuario', icon: 'linkedin' },
            { platform: 'Twitter', url: 'https://twitter.com/usuario', icon: 'twitter' }
        ]
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).render('404', {
        title: 'Página no encontrada',
        layout: false
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📝 Motor de renderizado: Handlebars`);
});
