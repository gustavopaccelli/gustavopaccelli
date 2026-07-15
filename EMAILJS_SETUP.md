# Configuração do EmailJS - Formulário de Contato

Este guia passo a passo explica como configurar o EmailJS para receber mensagens do formulário de contato do seu portfolio.

## ✅ O que foi implementado

- ✅ Formulário de contato integrado com EmailJS
- ✅ Validação client-side (email, mensagem)
- ✅ Feedback visual (sucesso, erro, carregamento)
- ✅ Fallback para `mailto:` se EmailJS não estiver configurado
- ✅ Arquitetura pronta para produção

## 📋 Passo a Passo: Configurar EmailJS

### 1. Criar Conta EmailJS

1. Acesse https://emailjs.com
2. Clique em **"Sign Up Free"** (canto superior direito)
3. Complete o registro com email e senha
4. Confirme seu email (verifique a caixa de entrada)

### 2. Conectar Sua Conta Gmail

1. No dashboard do EmailJS, clique em **"Email Services"** (esquerda)
2. Clique em **"Add Service"** (botão azul)
3. Escolha **Gmail**
4. Clique em **"Connect with Gmail"**
5. Autorize a conexão (login do Gmail se necessário)
6. Copie o **Service ID** (ex: `service_abc123xyz`)
   - **Salve este ID** — você vai precisar

### 3. Criar Email Template

1. Clique em **"Email Templates"** (menu esquerda)
2. Clique em **"Create New Template"**
3. Nome: `contact_portfolio` (qualquer nome serve)
4. **Subject**: Deixe em branco (ou personalize)
5. **Content** (corpo do email):

```
Name: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}
```

**IMPORTANTE**: Os nomes entre `{{}}` devem ser EXATAMENTE:
- `{{from_name}}` — nome do visitante
- `{{reply_to}}` — email do visitante  
- `{{message}}` — conteúdo da mensagem

6. Clique em **"Save"**
7. Copie o **Template ID** do template (ex: `template_xyz789abc`)
   - **Salve este ID** — você vai precisar

### 4. Obter Public Key

1. Clique em **"Account"** (menu esquerda, ícone de roda)
2. Vá para a aba **"Settings"**
3. Procure por **"API Keys"** ou **"Public Key"**
4. Copie a **Public Key** (ex: `abc123xyz_public_key`)
   - **Salve este ID** — você vai precisar

## 🔧 Preencher Configuração

Agora que você tem os 3 dados, preencha o arquivo `js/emailjs-config.js`:

```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_abc123xyz',      // Cole aqui o Service ID
    TEMPLATE_ID: 'template_xyz789abc',    // Cole aqui o Template ID
    PUBLIC_KEY: 'abc123xyz_public_key'    // Cole aqui a Public Key
};
```

**Exemplo completo**:
```javascript
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_h1m5k8x',
    TEMPLATE_ID: 'template_k9x2m1',
    PUBLIC_KEY: 'k9x2m1_h1m5k8x_public'
};
```

## 🧪 Testar

### Local (desenvolvimento)
```bash
# Abra o arquivo contact.html no navegador
# OU use um servidor local
python -m http.server 8000
# Acesse http://localhost:8000/contact.html
```

1. Preencha o formulário com dados válidos
2. Clique "Enviar mensagem"
3. Você deve ver: **"✅ Mensagem enviada com sucesso!"**
4. Verifique seu email (cheque a pasta "Spam" também)

### Produção (GitHub Pages)
```bash
git add .
git commit -m "Implement EmailJS contact form"
git push origin claude/paccelli-portfolio-site-u0g249
```

Depois faça merge via PR e acesse https://gustavopaccelli.github.io/gustavopaccelli/contact.html

## ⚠️ Possíveis Problemas

### "❌ Erro ao enviar a mensagem"

**Causa comum**: Credenciais incorretas no `emailjs-config.js`

**Solução**:
1. Verifique se copiou os IDs corretamente (sem espaços)
2. Abra o Console do navegador (F12 → Console)
3. Procure por mensagens de erro detalhadas
4. Verifique os IDs no dashboard do EmailJS

### Gmail marca como "Spam"

**Causa**: Primeira vez enviando, Gmail é protetor

**Solução**:
1. Marque como "Not Spam" no Gmail
2. Dentro de alguns emails, aprenderá que é legítimo

### "⚠️ EmailJS não configurado"

**Causa**: Ainda não preencheu o `emailjs-config.js`

**Solução**: Complete os passos acima e preencha o arquivo com seus dados

## 📊 Plano de Uso (EmailJS Grátis)

- ✅ **200 emails/mês** gratuito
- ✅ Rate limiting automático (anti-spam)
- ✅ Suporta até 5 templates
- ❌ Sem analytics detalhado no plano free

Quando você receber mais de 200/mês, pode fazer upgrade no dashboard.

## 🎯 Resumo

Sua implementação está pronta! Basta:
1. Registrar no EmailJS
2. Conectar Gmail
3. Criar template com 3 variáveis
4. Copiar 3 IDs (Service, Template, Public Key)
5. Preencher `js/emailjs-config.js`
6. Testar

Depois será possível receber mensagens direto no seu Gmail quando visitantes preencherem o formulário.

## 📞 Suporte

- **Dúvidas sobre EmailJS?** Veja a documentação: https://www.emailjs.com/docs/
- **Problema no código?** Abra DevTools (F12) → Console para ver erros
- **Email não chega?** Verifique Spam do Gmail e configure filtros se necessário

---

**Data de implementação**: 2026-01-15  
**Email configurado**: gustavopaccelli@gmail.com  
**Versão**: 1.0
