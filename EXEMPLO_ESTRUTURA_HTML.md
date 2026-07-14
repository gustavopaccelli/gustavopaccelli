# 📐 EXEMPLO DE ESTRUTURA HTML DO PORTFÓLIO

Este documento mostra como será a estrutura de cada página do seu portfólio.

---

## 📑 PÁGINA 1: INDEX.HTML (Home)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gustavo Paccelli da Costa - Pesquisador em Ciências Sociais</title>
    <meta name="description" content="Portfólio acadêmico-profissional de Gustavo Paccelli da Costa - Doutor em Ciências Sociais (UFJF)">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- NAVEGAÇÃO -->
    <nav class="navbar">
        <div class="container">
            <div class="logo">Gustavo Paccelli</div>
            <ul class="nav-links">
                <li><a href="index.html" class="active">Home</a></li>
                <li><a href="about.html">Sobre</a></li>
                <li><a href="education.html">Educação</a></li>
                <li><a href="research.html">Pesquisa</a></li>
                <li><a href="experience.html">Experiência</a></li>
                <li><a href="certificates.html">Certificados</a></li>
                <li><a href="contact.html">Contato</a></li>
            </ul>
        </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <img src="assets/img/perfil.jpg" alt="Gustavo Paccelli" class="hero-img">
                <h1>Gustavo Paccelli da Costa</h1>
                <p class="subtitle">Pesquisador em Sociologia e Ciência Política</p>
                <p class="tagline">Doutor em Ciências Sociais | Professor | Analista de Movimentos Sociais</p>
                
                <div class="hero-cta">
                    <a href="research.html" class="btn btn-primary">Explorar Pesquisa</a>
                    <a href="experience.html" class="btn btn-secondary">Experiência</a>
                    <a href="contact.html" class="btn btn-tertiary">Contato</a>
                </div>

                <div class="social-links">
                    <a href="https://www.linkedin.com/in/gustavopaccelli/" target="_blank" title="LinkedIn">
                        <i class="icon-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://lattes.cnpq.br/8469347425037002" target="_blank" title="Lattes">
                        <i class="icon-file"></i> Lattes
                    </a>
                    <a href="https://orcid.org/0000-0001-6458-869X" target="_blank" title="ORCID">
                        <i class="icon-orcid"></i> ORCID
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- HIGHLIGHTS -->
    <section class="highlights">
        <div class="container">
            <h2>Destaques</h2>
            <div class="highlight-grid">
                <div class="highlight-card">
                    <div class="number">8</div>
                    <p>Publicações em Periódicos</p>
                </div>
                <div class="highlight-card">
                    <div class="number">20+</div>
                    <p>Apresentações em Eventos</p>
                </div>
                <div class="highlight-card">
                    <div class="number">70+</div>
                    <p>Certificados e Cursos</p>
                </div>
                <div class="highlight-card">
                    <div class="number">3+</div>
                    <p>Instituições de Ensino</p>
                </div>
            </div>
        </div>
    </section>

    <!-- EXPERTISE -->
    <section class="expertise">
        <div class="container">
            <h2>Áreas de Expertise</h2>
            <div class="expertise-tags">
                <span class="tag">Movimentos Sociais</span>
                <span class="tag">Ciência Política</span>
                <span class="tag">Ciclos de Protestos</span>
                <span class="tag">Democracia</span>
                <span class="tag">Educação</span>
                <span class="tag">Análise de Dados</span>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2024 Gustavo Paccelli da Costa. Todos os direitos reservados.</p>
            <div class="footer-links">
                <a href="contact.html">Contato</a>
                <a href="#">Privacidade</a>
            </div>
        </div>
    </footer>

    <script src="js/script.js"></script>
</body>
</html>
```

---

## 📚 PÁGINA 2: EDUCATION.HTML (Educação)

```html
<!-- ... (nav idêntica) ... -->

<main>
    <section class="education">
        <div class="container">
            <h1>Trajetória Acadêmica</h1>
            
            <div class="timeline">
                <!-- DOUTORADO -->
                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="year">2024</span>
                        <span class="badge">Concluído</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Doutorado em Ciências Sociais</h3>
                        <p class="institution">Universidade Federal de Juiz de Fora (UFJF)</p>
                        <p class="period">2017 - 2024</p>
                        
                        <details>
                            <summary>Ver detalhes</summary>
                            <div class="details-content">
                                <p><strong>Título:</strong> Estruturas de Mobilização e Oportunidades Políticas: análise dos ciclos de protestos no Brasil contemporâneo</p>
                                <p><strong>Orientador:</strong> Christiane Jalles de Paula</p>
                                <p><strong>Bolsa:</strong> CAPES</p>
                                <p><strong>Áreas:</strong> Ciência Política, Sociologia</p>
                            </div>
                        </details>
                    </div>
                </div>

                <!-- MESTRADO -->
                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="year">2015</span>
                        <span class="badge">Concluído</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Mestrado em Ciências Sociais</h3>
                        <p class="institution">Universidade Federal de Juiz de Fora (UFJF)</p>
                        <p class="period">2013 - 2015</p>
                        
                        <details>
                            <summary>Ver detalhes</summary>
                            <div class="details-content">
                                <p><strong>Título:</strong> Ação Coletiva, Movimentos Sociais e Confronto Político: as manifestações de junho de 2013 à luz das teorias dos movimentos sociais</p>
                                <p><strong>Orientador:</strong> Leonardo Silva Andrada</p>
                                <p><strong>Bolsa:</strong> CAPES</p>
                            </div>
                        </details>
                    </div>
                </div>

                <!-- GRADUAÇÃO -->
                <div class="timeline-item">
                    <div class="timeline-marker">
                        <span class="year">2013</span>
                        <span class="badge">Concluído</span>
                    </div>
                    <div class="timeline-content">
                        <h3>Graduação em Ciências Sociais</h3>
                        <p class="institution">Universidade Federal de Juiz de Fora (UFJF)</p>
                        <p class="period">2008 - 2013</p>
                        <p class="note">Bacharel e Licenciatura</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

---

## 📖 PÁGINA 3: RESEARCH.HTML (Pesquisa)

```html
<main>
    <section class="research">
        <div class="container">
            <h1>Pesquisa & Publicações</h1>

            <!-- PUBLICAÇÕES -->
            <section class="publications">
                <h2>Artigos Publicados</h2>
                
                <div class="publications-list">
                    <article class="publication-item">
                        <div class="publication-header">
                            <h3>A estrutura da mobilização coletiva e sua contribuição para a análise dos movimentos sociais</h3>
                            <span class="year">2025</span>
                        </div>
                        <p class="journal">Teoria e Cultura, v.20, p.255-261</p>
                        <p class="doi"><strong>DOI:</strong> <a href="https://doi.org/10.34019/2318-101x.2025.v20.42531" target="_blank">10.34019/2318-101x.2025.v20.42531</a></p>
                        <div class="publication-actions">
                            <a href="#" class="btn btn-small">Ler artigo</a>
                            <a href="#" class="btn btn-small">Citar</a>
                        </div>
                    </article>

                    <!-- Mais artigos aqui... -->
                </div>
            </section>

            <!-- APRESENTAÇÕES -->
            <section class="presentations">
                <h2>Apresentações em Eventos Científicos (20+)</h2>
                
                <div class="presentations-list">
                    <div class="presentation-item">
                        <h4>Manifestações em massa e ciclo de protestos no Brasil: Diretas já, Collor, junho de 2013 e Dilma</h4>
                        <p><strong>Evento:</strong> IV Encontro Internacional Participação, Democracia e Políticas Públicas</p>
                        <p><strong>Local:</strong> Porto Alegre, 2019</p>
                        <p><strong>Tipo:</strong> Comunicação</p>
                    </div>

                    <!-- Mais apresentações... -->
                </div>
            </section>
        </div>
    </section>
</main>
```

---

## 💼 PÁGINA 4: EXPERIENCE.HTML (Experiência)

```html
<main>
    <section class="experience">
        <div class="container">
            <h1>Experiência Profissional</h1>

            <div class="experience-timeline">
                <!-- CARGO 1 -->
                <div class="experience-item active">
                    <div class="exp-date">2024 - Presente</div>
                    <div class="exp-content">
                        <h3>Professor de Sociologia e Filosofia</h3>
                        <p class="company">Curso Isfera Pré-Vestibular</p>
                        <p class="regime">Parcial • 4 horas/semana</p>
                        <ul class="responsibilities">
                            <li>Ministrar aulas de Sociologia e Filosofia para estudantes de pré-vestibular</li>
                            <li>Elaborar questões e atividades para processos seletivos</li>
                        </ul>
                    </div>
                </div>

                <!-- CARGO 2 -->
                <div class="experience-item">
                    <div class="exp-date">2023 - Presente</div>
                    <div class="exp-content">
                        <h3>Professor de Sociologia</h3>
                        <p class="company">Colégio Equipe LTDA</p>
                        <p class="regime">Parcial • 6 horas/semana</p>
                        <ul class="responsibilities">
                            <li>Ministrar aulas para estudantes do Ensino Médio</li>
                            <li>Acompanhar trajetória acadêmica dos alunos</li>
                            <li>Elaborar atividades para inserção no ensino superior</li>
                        </ul>
                    </div>
                </div>

                <!-- Mais cargos... -->
            </div>
        </div>
    </section>
</main>
```

---

## 🏆 PÁGINA 5: CERTIFICATES.HTML (Certificados)

```html
<main>
    <section class="certificates">
        <div class="container">
            <h1>Certificados e Cursos</h1>
            <p class="subtitle">70+ certificados e cursos de formação complementar</p>

            <!-- FILTROS -->
            <div class="certificate-filters">
                <div class="filter-group">
                    <label for="filter-year">Ano:</label>
                    <select id="filter-year">
                        <option value="">Todos</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <!-- ... -->
                    </select>
                </div>

                <div class="filter-group">
                    <label for="filter-category">Categoria:</label>
                    <select id="filter-category">
                        <option value="">Todas</option>
                        <option value="educacao">Educação</option>
                        <option value="pesquisa">Pesquisa</option>
                        <option value="gestao">Gestão</option>
                        <option value="dados">Análise de Dados</option>
                        <option value="metodologias">Metodologias</option>
                    </select>
                </div>
            </div>

            <!-- CARDS DE CERTIFICADOS -->
            <div class="certificates-grid" id="certificates-grid">
                <!-- EXEMPLO: Card 2025 -->
                <div class="certificate-card" data-year="2025" data-category="pesquisa">
                    <div class="cert-header">
                        <h4>Extraindo Informações do IBGE</h4>
                        <span class="year-badge">2025</span>
                    </div>
                    <p class="institution">Fundação Instituto Brasileiro de Geografia e Estatística (IBGE)</p>
                    <p class="duration">Carga horária: 20h</p>
                    <div class="cert-actions">
                        <a href="assets/docs/certificates/2025 Extraindo Informações do IBGE.pdf" 
                           target="_blank" class="btn btn-small">
                            📥 Download
                        </a>
                    </div>
                </div>

                <!-- EXEMPLO: Card 2024 -->
                <div class="certificate-card" data-year="2024" data-category="educacao">
                    <div class="cert-header">
                        <h4>Aprendizagem Baseada em Problemas e Projetos</h4>
                        <span class="year-badge">2024</span>
                    </div>
                    <p class="institution">Ministério da Educação (MEC)</p>
                    <p class="duration">Carga horária: 120h</p>
                    <div class="cert-actions">
                        <a href="assets/docs/certificates/2024 Aprendizagem Baseada em Problemas e Projetos.pdf" 
                           target="_blank" class="btn btn-small">
                            📥 Download
                        </a>
                    </div>
                </div>

                <!-- ... (mais 68 certificados) ... -->
            </div>

            <p class="cert-total">Total: 70+ certificados</p>
        </div>
    </section>
</main>
```

---

## 📞 PÁGINA 6: CONTACT.HTML (Contato)

```html
<main>
    <section class="contact">
        <div class="container">
            <h1>Contato</h1>

            <div class="contact-content">
                <div class="contact-form">
                    <form id="contact-form">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="message">Mensagem</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary">Enviar</button>
                    </form>
                </div>

                <div class="contact-info">
                    <h3>Informações de Contato</h3>
                    
                    <div class="info-item">
                        <strong>Email Principal:</strong>
                        <a href="mailto:paccelli@outlook.com">paccelli@outlook.com</a>
                    </div>

                    <div class="info-item">
                        <strong>Email Alternativo:</strong>
                        <a href="mailto:gustavopaccelli@gmail.com">gustavopaccelli@gmail.com</a>
                    </div>

                    <div class="info-item">
                        <strong>Telefone:</strong>
                        <a href="tel:+5532999973515">+55 (32) 99973-5515</a>
                    </div>

                    <div class="info-item">
                        <strong>Localização:</strong>
                        Juiz de Fora, Minas Gerais - Brasil
                    </div>

                    <hr>

                    <div class="social-links-large">
                        <h4>Redes Profissionais</h4>
                        <a href="https://www.linkedin.com/in/gustavopaccelli/" target="_blank" class="social-link">
                            <strong>LinkedIn</strong> - Perfil Profissional
                        </a>
                        <a href="https://lattes.cnpq.br/8469347425037002" target="_blank" class="social-link">
                            <strong>Lattes</strong> - CV Completo
                        </a>
                        <a href="https://orcid.org/0000-0001-6458-869X" target="_blank" class="social-link">
                            <strong>ORCID</strong> - Identificador Científico
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
```

---

## 🎨 PÁGINA 7: CSS EXEMPLO (style.css)

```css
/* VARIÁVEIS E CORES */
:root {
    --primary: #1e3a8a;
    --secondary: #0891b2;
    --accent: #16a34a;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f9fafb;
    --bg-white: #ffffff;
    --border: #e5e7eb;
}

/* RESET BÁSICO */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
    background-color: var(--bg-white);
}

/* CONTAINER */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* NAVEGAÇÃO */
.navbar {
    background: var(--bg-white);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    z-index: 100;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 20px;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary);
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-dark);
    transition: color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
    color: var(--primary);
}

/* HERO SECTION */
.hero {
    padding: 60px 20px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
    color: white;
    text-align: center;
}

.hero-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid white;
    margin-bottom: 30px;
    object-fit: cover;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 5px;
    opacity: 0.95;
}

.tagline {
    font-size: 1.1rem;
    margin-bottom: 30px;
    opacity: 0.85;
}

/* BOTÕES */
.btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: all 0.3s;
    font-weight: 500;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background: var(--accent);
    color: white;
}

.btn-primary:hover {
    background: #15803d;
    transform: translateY(-2px);
}

.btn-secondary {
    background: white;
    color: var(--primary);
}

.btn-secondary:hover {
    background: var(--bg-light);
}

/* TIMELINE */
.timeline {
    position: relative;
    padding: 20px 0;
}

.timeline-item {
    display: flex;
    margin-bottom: 40px;
    position: relative;
}

.timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    margin-right: 30px;
}

.timeline-marker::after {
    content: '';
    width: 2px;
    height: 100%;
    background: var(--border);
    position: absolute;
    left: 50%;
    top: 60px;
}

.timeline-marker .year {
    font-weight: bold;
    color: var(--primary);
    font-size: 1.2rem;
}

.badge {
    display: inline-block;
    background: var(--accent);
    color: white;
    padding: 4px 8px;
    border-radius: 3px;
    font-size: 0.8rem;
    margin-top: 5px;
}

.timeline-content {
    background: var(--bg-light);
    padding: 20px;
    border-radius: 8px;
    flex: 1;
}

.timeline-content h3 {
    margin-bottom: 5px;
    color: var(--primary);
}

/* GRID RESPONSIVO */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

/* RESPONSIVIDADE */
@media (max-width: 768px) {
    .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .timeline-item {
        flex-direction: column;
        margin-left: 0;
    }

    .timeline-marker {
        width: 100%;
        margin-right: 0;
        margin-bottom: 15px;
    }

    .timeline-marker::after {
        display: none;
    }
}

/* ... (mais estilos) ... */
```

---

## 🔧 JAVASCRIPT EXEMPLO (script.js)

```javascript
// MENU MOBILE
const toggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
};

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ATIVAR LINK ATIVO NA NAVBAR
const activateNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
};

document.addEventListener('DOMContentLoaded', activateNavLink);

// FORMULÁRIO DE CONTATO
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aqui você pode adicionar lógica de envio (EmailJS, Formspree, etc.)
        alert('Obrigado! Vamos responder em breve.');
        contactForm.reset();
    });
}
```

---

## 📋 RESUMO DE CADA SEÇÃO

| Página | Função | Elementos Principais |
|--------|--------|------------------|
| **index.html** | Home | Hero, Stats, Skills, CTAs |
| **about.html** | Bio Expandida | Foto, Bio, Habilidades, Downloads |
| **education.html** | Timeline Acadêmica | 3 graus (Doutorado, Mestrado, Graduação) |
| **research.html** | Publicações | 8 artigos, 20+ apresentações, Editorial |
| **experience.html** | Carreira | 6 posições atuais/passadas |
| **certificates.html** | 70+ Certs | Cards filtráveis por ano/categoria |
| **contact.html** | Contato | Form + Info + Links sociais |

---

**Próximo passo:** Use o prompt em `PORTFOLIO_PROMPT_CLAUDE_CODE.md` para chamar Claude Code e gerar o código completo!
