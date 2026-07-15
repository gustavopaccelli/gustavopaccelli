/* ==========================================================================
   emailjs-config.js — Configuração do EmailJS

   INSTRUÇÕES:
   1. Crie uma conta em https://emailjs.com (grátis)
   2. Conecte sua conta Gmail
   3. Crie um Email Service e copie o SERVICE_ID
   4. Crie um Email Template com as variáveis:
      - {from_name} — Nome do visitante
      - {reply_to} — Email do visitante
      - {message} — Mensagem do visitante
      Copie o TEMPLATE_ID
   5. Vá em Settings e copie sua PUBLIC_KEY
   6. Preencha os valores abaixo

   ========================================================================== */

// Suas credenciais EmailJS (veja instruções acima)
const EMAILJS_CONFIG = {
    SERVICE_ID: 'YOUR_SERVICE_ID_HERE',      // Ex: service_abc123xyz
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID_HERE',    // Ex: template_xyz789abc
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY_HERE'        // Ex: abc123xyz_public_key
};

// Email para receber as mensagens de contato
const CONTACT_EMAIL = 'gustavopaccelli@gmail.com';
