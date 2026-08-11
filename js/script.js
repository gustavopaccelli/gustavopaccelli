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
// O conteúdo é visível por padrão no CSS (sem .pre-reveal). Só aqui,
// com JS já confirmado disponível, é que aplicamos o estado oculto
// inicial — assim, se o script falhar ao carregar, nada some.
const setupReveal = () => {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    revealEls.forEach((el) => el.classList.add('pre-reveal'));

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
const setupContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const message = contactForm.querySelector('#message').value.trim();
        const feedback = document.getElementById('form-feedback');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // Validação básica
        if (!name || !email || !message) {
            if (feedback) {
                feedback.textContent = 'Por favor, preencha todos os campos.';
                feedback.className = 'form-feedback error';
            }
            e.preventDefault();
            return;
        }

        if (message.length < 10) {
            if (feedback) {
                feedback.textContent = 'A mensagem deve ter no mínimo 10 caracteres.';
                feedback.className = 'form-feedback error';
            }
            e.preventDefault();
            return;
        }

        // Validação de email simples
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            if (feedback) {
                feedback.textContent = 'Por favor, insira um email válido.';
                feedback.className = 'form-feedback error';
            }
            e.preventDefault();
            return;
        }

        // Mostrar estado de carregamento
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
        }

        if (feedback) {
            feedback.textContent = 'Enviando mensagem...';
            feedback.className = 'form-feedback info';
        }

        // O formulário será enviado via Formspree (action do form)
        // Exibir mensagem de sucesso após submissão
        setTimeout(() => {
            if (feedback) {
                feedback.innerHTML = 'Mensagem enviada com sucesso! Responderei em breve.';
                feedback.className = 'form-feedback success';
            }
            contactForm.reset();
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar mensagem';
            }
        }, 1500);
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
