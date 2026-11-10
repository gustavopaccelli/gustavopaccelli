# Olá! Eu sou o Gustavo Paccelli 👋

**Doutor em Ciências Sociais (UFJF, 2024)** | Professor de Sociologia e Filosofia | Pesquisador de movimentos sociais, ciclos de protestos e democracia no Brasil contemporâneo.

- 🔭 Pesquiso **estruturas de mobilização e oportunidades políticas** nos ciclos de protestos brasileiros
- 📖 8 artigos publicados em periódicos científicos
- 🏫 Professor no Ensino Médio, pré-vestibular e ensino superior (UFJF)
- 📫 Contato: **gustavopaccelli@gmail.com** | [LinkedIn](https://www.linkedin.com/in/gustavopaccelli/) | [Lattes](http://lattes.cnpq.br/8469347425037002) | [ORCID](https://orcid.org/0000-0001-6458-869X)

🌐 **Portfólio online:** https://gustavopaccelli.github.io/gustavopaccelli/

---

## 📁 Sobre este repositório

Este repositório contém meu **portfólio acadêmico-profissional** — um site estático em HTML5 + CSS3 + JavaScript vanilla, hospedado no GitHub Pages.

### Estrutura

```
├── index.html                 # Home (hero, destaques, expertise)
├── about.html                 # Sobre (bio, timeline, idiomas, habilidades)
├── education.html             # Trajetória acadêmica (timeline)
├── research.html              # Publicações, eventos e atuação editorial
├── experience.html            # Experiência profissional (timeline)
├── certificates.html          # Galeria interativa de certificados (filtros)
├── contact.html               # Formulário e informações de contato
│
├── css/
│   ├── style.css              # Estilos principais (mobile-first)
│   └── responsive.css         # Media queries
│
├── js/
│   ├── script.js              # Menu mobile, animações, formulário
│   └── certificates.js        # Dados + filtros dos certificados
│
├── assets/
│   ├── img/
│   │   ├── perfil.jpg         # Foto de perfil (512x512px)
│   │   └── favicon.ico        # Ícone do site
│   └── docs/
│       ├── lattes.pdf         # CV Lattes completo
│       ├── cv-resumido.pdf    # CV resumido (2 páginas)
│       └── certificates/      # PDFs dos certificados
│
├── docs/                      # Documentos de planejamento do projeto
├── README.md                  # Documentação do projeto
├── .gitignore                 # Arquivos a ignorar no Git
└── sitemap.xml                # Mapa do site (para SEO)
```

### Como rodar localmente

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

### Como personalizar

1. **Foto de perfil:** substitua `assets/img/perfil.jpg` (atualmente um avatar placeholder) pela sua foto real, 512×512px ou maior.
2. **CVs em PDF:** substitua os placeholders `assets/docs/lattes.pdf` e `assets/docs/cv-resumido.pdf` pelos seus CVs reais — os botões em `about.html` já apontam para lá.
3. **Certificados (PDFs):** coloque os arquivos em `assets/docs/certificates/` com o nome `ANO Título.pdf` (ex.: `2025 Extraindo Informações do IBGE.pdf`) — os cards já geram os links automaticamente.
4. **Novo certificado:** adicione um objeto ao array `CERTIFICATES` em `js/certificates.js`.
5. **Formulário de contato:** hoje usa `mailto:`. Para envio direto, integre [Formspree](https://formspree.io/) ou [EmailJS](https://www.emailjs.com/) em `js/script.js`.

### Deploy no GitHub Pages

Settings → Pages → **Deploy from a branch** → branch `main`, pasta `/ (root)`.

Guia completo em [`docs/GUIA_IMPLEMENTACAO_GITHUB_PAGES.md`](docs/GUIA_IMPLEMENTACAO_GITHUB_PAGES.md).
