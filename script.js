// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const whatsappBtn = document.getElementById('whatsapp-btn');
const contactForm = document.querySelector('.contact-form');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// WhatsApp Button Handler
function abrirWhatsapp() {
    // Reemplaza el número de WhatsApp con el real
    const numeroWhatsapp = '+34123456789'; // Modificar con número real
    const mensaje = encodeURIComponent('Hola 2Roca, me gustaría solicitar una cotización para un proyecto personalizado.');
    window.open(`https://wa.me/${numeroWhatsapp}?text=${mensaje}`, '_blank');
}

whatsappBtn.addEventListener('click', (e) => {
    e.preventDefault();
    abrirWhatsapp();
});

// Form Handler
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        nombre: formData.get('nombre') || contactForm.querySelector('input[type="text"]').value,
        email: formData.get('email') || contactForm.querySelector('input[type="email"]').value,
        mensaje: formData.get('mensaje') || contactForm.querySelector('textarea').value
    };

    // Enviar a WhatsApp como alternativa
    const numeroWhatsapp = '+34123456789';
    const mensajeFormulario = encodeURIComponent(
        `Nuevo formulario de contacto:\n\nNombre: ${data.nombre}\nEmail: ${data.email}\nMensaje: ${data.mensaje}`
    );
    
    window.open(`https://wa.me/${numeroWhatsapp}?text=${mensajeFormulario}`, '_blank');
    
    // Reset form
    contactForm.reset();
    
    // Mostrar mensaje de éxito
    showSuccessMessage();
});

function showSuccessMessage() {
    const message = document.createElement('div');
    message.textContent = '¡Mensaje enviado! Nos contactaremos pronto.';
    message.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: #25d366;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);
        z-index: 998;
        animation: slideInUp 0.4s ease-out;
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with data-scroll attribute
document.querySelectorAll('[data-scroll]').forEach(el => {
    observer.observe(el);
});

// Lazy loading images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Scroll to top functionality
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        whatsappBtn.style.opacity = '1';
        whatsappBtn.style.pointerEvents = 'auto';
    } else {
        whatsappBtn.style.opacity = '0.7';
    }
});

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add active class to navigation based on scroll position
const updateActiveNav = debounce(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.style.color = 'var(--color-white)');
            if (navLink) {
                navLink.style.color = 'var(--color-accent)';
            }
        }
    });
}, 50);

window.addEventListener('scroll', updateActiveNav);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add data-scroll to all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.setAttribute('data-scroll', '');
    });

    // Performance metrics
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('Page load time:', pageLoadTime + 'ms');
        });
    }
});

// PWA Support (opcional)
if ('serviceWorker' in navigator) {
    // Descomentar si tienes un service worker
    // navigator.serviceWorker.register('/sw.js').catch(() => {});
}

// Analytics event tracking
function trackEvent(eventName, eventData = {}) {
    if (window.gtag) {
        gtag('event', eventName, eventData);
    }
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('cta_click', {
            'button_text': btn.textContent
        });
    });
});

// Track product card clicks
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        trackEvent('product_view', {
            'product_name': productName
        });
    });
});