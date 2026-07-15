/* ==========================================================================
   script.js — funcionalidades gerais do portfólio
   (menu mobile, link ativo, scroll suave, animações, formulário de contato)
   ========================================================================== */

// ---------- Menu mobile (hambúrguer) ----------
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em um link
    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ---------- Link ativo na navbar ----------
const activateNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === currentPage);
    });
};

// ---------- Scroll suave para âncoras internas ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ---------- Fade-in ao rolar (IntersectionObserver) ----------
const setupReveal = () => {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window)) {
        revealEls.forEach((el) => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
};

// ---------- Formulário de contato ----------
// Sem backend próprio, o envio abre o cliente de email com a mensagem
// preenchida (mailto). Para envio direto, integre Formspree ou EmailJS.
const setupContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const message = contactForm.querySelector('#message').value.trim();

        const subject = encodeURIComponent(`Contato via portfólio — ${name}`);
        const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:gustavopaccelli@gmail.com?subject=${subject}&body=${body}`;

        const feedback = document.getElementById('form-feedback');
        if (feedback) {
            feedback.textContent =
                'Obrigado pela mensagem! Seu cliente de email foi aberto para concluir o envio. Responderei em breve.';
            feedback.classList.add('success');
        }
        contactForm.reset();
    });
};

// ---------- Ano atual no rodapé ----------
const setFooterYear = () => {
    const yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    activateNavLink();
    setupReveal();
    setupContactForm();
    setFooterYear();
});
