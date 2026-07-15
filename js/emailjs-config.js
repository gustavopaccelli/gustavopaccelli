// EmailJS Configuration
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_018d4dr',
    TEMPLATE_ID: 'template_3mguw87',
    PUBLIC_KEY: 'otxLPS_HFugaA1_Vl'
};

const CONTACT_EMAIL = 'gustavopaccelli@gmail.com';

// Initialize EmailJS
if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
}
