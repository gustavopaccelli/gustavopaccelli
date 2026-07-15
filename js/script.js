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
const setupContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('#name').value.trim();
        const email = contactForm.querySelector('#email').value.trim();
        const message = contactForm.querySelector('#message').value.trim();
        const feedback = document.getElementById('form-feedback');
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        // Validação básica
        if (!name || !email || !message) {
            if (feedback) {
                feedback.textContent = '❌ Por favor, preencha todos os campos.';
                feedback.className = 'form-feedback error';
            }
            return;
        }

        if (message.length < 10) {
            if (feedback) {
                feedback.textContent = '❌ A mensagem deve ter no mínimo 10 caracteres.';
                feedback.className = 'form-feedback error';
            }
            return;
        }

        // Validação de email simples
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            if (feedback) {
                feedback.textContent = '❌ Por favor, insira um email válido.';
                feedback.className = 'form-feedback error';
            }
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

        // Verificar se EmailJS está configurado
        const emailjsConfigured = typeof EMAILJS_CONFIG !== 'undefined' &&
            EMAILJS_CONFIG.SERVICE_ID &&
            EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID_HERE' &&
            EMAILJS_CONFIG.TEMPLATE_ID &&
            EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID_HERE' &&
            EMAILJS_CONFIG.PUBLIC_KEY &&
            EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE';

        if (!emailjsConfigured || typeof emailjs === 'undefined') {
            // Fallback para mailto se EmailJS não configurado
            const subject = encodeURIComponent(`Contato via portfólio — ${name}`);
            const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
            window.location.href = `mailto:${CONTACT_EMAIL || 'gustavopaccelli@gmail.com'}?subject=${subject}&body=${body}`;

            if (feedback) {
                feedback.textContent = '⚠️ EmailJS não configurado. Abrindo seu cliente de email. Configure as credenciais em js/emailjs-config.js para envio direto.';
                feedback.className = 'form-feedback warning';
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar mensagem';
            }
            return;
        }

        // Enviar com EmailJS
        try {
            await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
                from_name: name,
                reply_to: email,
                message: message
            });

            if (feedback) {
                feedback.innerHTML = '✅ Mensagem enviada com sucesso! Responderei em breve.';
                feedback.className = 'form-feedback success';
            }
            contactForm.reset();
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            if (feedback) {
                feedback.textContent = '❌ Erro ao enviar a mensagem. Por favor, tente novamente.';
                feedback.className = 'form-feedback error';
            }
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar mensagem';
            }
        }
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
