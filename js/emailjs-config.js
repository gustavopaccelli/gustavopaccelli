// EmailJS Configuration
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_018d4dr',
    TEMPLATE_ID: 'template_3mguw87',
    PUBLIC_KEY: 'otxLPS_HFugaA1_Vl'
};

const CONTACT_EMAIL = 'gustavopaccelli@gmail.com';

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    try {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('✓ EmailJS inicializado com sucesso');
    } catch (error) {
        console.error('✗ Erro ao inicializar EmailJS:', error);
    }
} else {
    console.warn('⚠ SDK EmailJS não carregou. Verifique sua conexão de internet.');
}
