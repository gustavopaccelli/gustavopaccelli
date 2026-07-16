/* ==========================================================================
   certificates.js — dados e filtros da galeria de certificados
   Gerado automaticamente a partir de docs/certificates-data.json
   Para adicionar um certificado novo: acrescente o PDF em assets/docs/certificates/
   com o nome "ANO Título.pdf" e atualize docs/certificates-data.json
   ========================================================================== */

const CATEGORY_LABELS = {
    educacao: 'Educação',
    pesquisa: 'Pesquisa',
    gestao: 'Gestão',
    metodologias: 'Metodologias',
    tecnologia: 'Tecnologia',
    dados: 'Dados',
    'direitos-humanos': 'Direitos Humanos'
};

const CERTIFICATES = [
    // ---------- 2026 ----------
    { year: 2026, title: '- Competências Digitais nas Áreas de Conhecimento da BNCC – Ciências Humanas - Ensino Médio', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: '- Curso de Aperfeiçoamento em Educação e Tecnologia', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: '- MAIS CIÊNCIAS HUMANAS E SOCIAIS APLICADAS', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: '- MAIS LINGUAGENS E SUAS TECNOLOGIAS', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: '- Orientação Profissional', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: '- Processos de Orientação Educacional e Profissional', institution: 'N/A', hours: null, categories: ['gestao'] },
    { year: 2026, title: '- Trabalho e Profissionalização', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: 'A BNCC nos Anos Finais do Ensino Fundamental_ Arte', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: 'Competências Digitais – Ciências Humanas - Ensino Médio', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2025 ----------
    { year: 2025, title: '- PIA3804-2024 - Na fronteira Mulheres Negras na Universidade,', institution: 'UNILA', hours: null, categories: ['educacao'] },
    { year: 2025, title: '- SEMIC participação', institution: 'SEMIC', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'Avaliadores de Artigos Científicos', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2025, title: 'Extraindo Informações do IBGE', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'Mentoria de Diretores Escolares', institution: 'N/A', hours: null, categories: ['gestao'] },
    { year: 2025, title: 'Trabalho e Profissionalização', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA3804-2024', institution: 'UNILA', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA3805-2024', institution: 'UNILA', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA4091-2025', institution: 'UNILA', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA4141-2025', institution: 'UNILA', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA4142-2025', institution: 'UNILA', hours: null, categories: ['educacao'] },

    // ---------- 2024 ----------
    { year: 2024, title: '- Formação em Linguagens e suas Tecnologias', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2024, title: '- PIA3805-2024 - Marina Tunirê Resistência e Memória na Luta', institution: 'UNILA', hours: null, categories: ['educacao'] },
    { year: 2024, title: '- SEMIC participação', institution: 'SEMIC', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'Aprendizagem Baseada em Problemas e Projetos', institution: 'N/A', hours: null, categories: ['metodologias'] },
    { year: 2024, title: 'Certificado I WorkShop Ultradireita - Gustavo Pacelli', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'Filosofia 1 UFRGS', institution: 'UFRGS', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'Formação em Ciências Humanas e Sociais Aplicadas', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'II Jornada do Pensamento Social Brasileiro', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'UX Writting', institution: 'N/A', hours: null, categories: ['tecnologia'] },

    // ---------- 2023 ----------
    { year: 2023, title: '- SEMIC participação', institution: 'SEMIC', hours: null, categories: ['educacao'] },
    { year: 2023, title: 'A BNCC do Ensino Médio_ Ciências Humanas MEC', institution: 'MEC', hours: null, categories: ['educacao'] },
    { year: 2023, title: 'CertificadoParticipacaoSEMIC', institution: 'SEMIC', hours: null, categories: ['educacao'] },
    { year: 2023, title: 'ENAP Educação em direitos humanos', institution: 'ENAP', hours: null, categories: ['direitos-humanos', 'educacao'] },
    { year: 2023, title: 'ENAP Gestão de Projetos', institution: 'ENAP', hours: null, categories: ['gestao', 'metodologias'] },
    { year: 2023, title: 'ENAP Gestão de Projetos Educacionais', institution: 'ENAP', hours: null, categories: ['gestao', 'metodologias'] },
    { year: 2023, title: 'Formação em Artes nos Anos Finais MEC', institution: 'MEC', hours: null, categories: ['educacao'] },
    { year: 2023, title: 'Gestão Escolar MEC', institution: 'MEC', hours: null, categories: ['gestao'] },

    // ---------- 2022 ----------
    { year: 2022, title: 'Análise de Conteúdo — para além de Bardin', institution: 'N/A', hours: null, categories: ['dados'] },
    { year: 2022, title: 'Certificado Data Analysis Google Sheets', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Data Analysis: Estatística com Google Sheets — Alura', institution: 'Alura', hours: null, categories: ['dados', 'tecnologia'] },
    { year: 2022, title: 'Data Analysis: Google Sheets — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Data Analysis: Previsões com Google Sheets — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Extensão: Introdução a Ciência de Dados com R', institution: 'N/A', hours: null, categories: ['dados'] },
    { year: 2022, title: 'Extensão: TEAIP', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2022, title: 'Metodologias Ativas', institution: 'N/A', hours: null, categories: ['metodologias'] },
    { year: 2022, title: 'Pesquisa de Mercado', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2022, title: 'Power BI: Explorando Recursos Visuais — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Prática de Pesquisa da Experiência do Usuário', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2022, title: 'Teste de Usabilidade Parte 1: Seu Produto é Fácil de Usar — Alura', institution: 'Alura', hours: null, categories: ['educacao', 'tecnologia'] },
    { year: 2022, title: 'Teste de Usabilidade Parte 2: Mensurando e Entregando Resultados — Alura', institution: 'Alura', hours: null, categories: ['educacao', 'tecnologia'] },
    { year: 2022, title: 'Transcrição Semiautomatizada de Vídeos', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2022, title: 'UX Acessível: Projetando Interfaces Inclusivas — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Design: Criando Dashboard com Data Studio — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Produto: Monitore, Mensure e Teste o Seu Projeto — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Análise de Concorrentes — Alura', institution: 'Alura', hours: null, categories: ['dados', 'tecnologia'] },
    { year: 2022, title: 'UX Research: Análise de Sites com Google Analytics — Alura', institution: 'Alura', hours: null, categories: ['dados', 'tecnologia'] },
    { year: 2022, title: 'UX Research: Avaliação Heurística — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Entrevistas com Equipes Internas — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Entrevistas com Usuários — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Mapeando a Jornada do Usuário — Alura', institution: 'Alura', hours: null, categories: ['educacao', 'tecnologia'] },
    { year: 2022, title: 'UX Research: Otimização de Sites — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Pesquisa Etnográfica — Alura', institution: 'Alura', hours: null, categories: ['pesquisa', 'tecnologia'] },
    { year: 2022, title: 'UX Writing: Escrevendo Textos para Usuários — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX: Entenda a Experiência de Usuário — Alura', institution: 'Alura', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Workshop EBAC', institution: 'EBAC', hours: null, categories: ['educacao'] },
    { year: 2022, title: 'Workshop de UX Design (Introdutório)', institution: 'N/A', hours: null, categories: ['tecnologia'] },

    // ---------- 2021 ----------
    { year: 2021, title: 'Aperfeiçoamento TEEHI', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2021, title: 'Curso de Extensão: Tô no Rumo', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2021, title: 'Google Analytics para Iniciantes', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2021, title: 'Google Analytics para iniciantes', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2021, title: 'Lahps', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2021, title: 'Revisor — ANA CAROLINA SANTOS MIRANDA', institution: 'Revisor ad hoc', hours: null, categories: ['pesquisa'] },
    { year: 2021, title: 'Revisor — FERNANDA DA SILVA FERREIRA', institution: 'Revisor ad hoc', hours: null, categories: ['pesquisa'] },
    { year: 2021, title: 'Revisor — Julia Gravina de Faria', institution: 'Revisor ad hoc', hours: null, categories: ['pesquisa'] },
    { year: 2021, title: 'Revisor — THIAGO ALMEIDA APOLINÁRIO PRIMO', institution: 'Revisor ad hoc', hours: null, categories: ['pesquisa'] },

    // ---------- 2020 ----------
    { year: 2020, title: 'Atualização Profissional', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Colóquio do Curso de História', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Economia Solidária', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Extensão: Tecnologias Digitais na Educação', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Movimentos Sociais e Sociedade Moderna', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Política Internacional Brasil', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Política Pública e Assistência Social', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2019 ----------
    { year: 2019, title: 'Certificado Global July', institution: 'Global July', hours: null, categories: ['educacao'] },
    { year: 2019, title: 'Certificado PDPP 2019 Apresentação', institution: 'PDPP', hours: null, categories: ['educacao'] },
    { year: 2019, title: 'Certificado PDPP 2019 Participação', institution: 'PDPP', hours: null, categories: ['educacao'] },
    { year: 2019, title: 'Revisor — Gabriel Bressan Ramos', institution: 'Revisor ad hoc', hours: null, categories: ['pesquisa'] },
    { year: 2019, title: 'Revisor — Matheus Luciano da Costa Ferreira', institution: 'Revisor ad hoc', hours: null, categories: ['pesquisa'] },

    // ---------- 2018 ----------
    { year: 2018, title: 'Avaliador — SEMIC', institution: 'SEMIC', hours: null, categories: ['educacao'] },
    { year: 2018, title: 'ERMECS — Certificado Ouvinte', institution: 'MEC', hours: null, categories: ['educacao'] },
    { year: 2018, title: 'Revisor — Jaqueline de Oliveira Moreira', institution: 'Revisor ad hoc', hours: null, categories: ['pesquisa'] },

    // ---------- 2017 ----------
    { year: 2017, title: 'Jornada de Ciências Sociais (JornadaCSO) — Debatedor', institution: 'JornadaCSO', hours: null, categories: ['educacao'] },
    { year: 2017, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'JornadaCSO', hours: null, categories: ['educacao'] },
    { year: 2017, title: 'Palestra Dilemas da Representação', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2015 ----------
    { year: 2015, title: 'Doutrinas Políticas', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2015, title: 'Liberalismo', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2014 ----------
    { year: 2014, title: 'Apresentação de Trabalho — UFF', institution: 'UFF', hours: null, categories: ['educacao'] },
    { year: 2014, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'JornadaCSO', hours: null, categories: ['educacao'] },
    { year: 2014, title: 'Minicurso: O Século dos Chefes', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2013 ----------
    { year: 2013, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'JornadaCSO', hours: null, categories: ['educacao'] },
    { year: 2013, title: 'Minicurso Estatística CSO — JornadaCSO', institution: 'JornadaCSO', hours: null, categories: ['dados', 'educacao'] },

    // ---------- 2012 ----------
    { year: 2012, title: 'Apresentação de Trabalho — JornadaCSO', institution: 'JornadaCSO', hours: null, categories: ['educacao'] },
    { year: 2012, title: 'JornadasCSO Apresentação', institution: 'JornadaCSO', hours: null, categories: ['educacao'] },

];

// Elementos DOM
const grid = document.getElementById('certificates-grid');
const filterYear = document.getElementById('filter-year');
const filterInstitution = document.getElementById('filter-institution');
const filterCategory = document.getElementById('filter-category');
const filterSearch = document.getElementById('filter-search');
const resetBtn = document.getElementById('filter-reset');
const totalEl = document.getElementById('cert-total');

const pdfPath = (cert) => `assets/docs/certificates/${cert.year} ${cert.title}.pdf`;

const buildCard = (cert) => {
    const categories = cert.categories.map((cat) => `<span class="badge">${CATEGORY_LABELS[cat]}</span>`).join('');
    return `
        <div class="card cert-card reveal">
            <div class="cert-meta">
                <span class="year-badge">${cert.year}</span>
                <span class="institution-badge">${cert.institution}</span>
            </div>
            <h3>${escapeHtml(cert.title)}</h3>
            <div class="cert-categories">${categories}</div>
            <a href="${pdfPath(cert)}" target="_blank" rel="noopener" class="btn btn-small btn-outline">
                Abrir certificado
            </a>
        </div>
    `;
};

const escapeHtml = (text) => {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.replace(/[&<>"']/g, (m) => map[m]);
};

const populateFilters = () => {
    const years = new Set();
    const institutions = new Set();

    CERTIFICATES.forEach((cert) => {
        years.add(cert.year);
        institutions.add(cert.institution);
    });

    const yearFilter = document.getElementById('filter-year');
    const institutionFilter = document.getElementById('filter-institution');

    [...years].sort((a, b) => b - a).forEach((year) => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        yearFilter.appendChild(opt);
    });

    [...institutions].sort().forEach((institution) => {
        const opt = document.createElement('option');
        opt.value = institution;
        opt.textContent = institution;
        institutionFilter.appendChild(opt);
    });

    Object.entries(CATEGORY_LABELS).forEach(([value, label]) => {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        filterCategory.appendChild(opt);
    });
};

const applyFilters = () => {
    const year = filterYear.value;
    const institution = filterInstitution.value;
    const category = filterCategory.value;
    const search = filterSearch.value.trim().toLowerCase();

    const filtered = CERTIFICATES.filter((cert) => {
        if (year && String(cert.year) !== year) return false;
        if (institution && cert.institution !== institution) return false;
        if (category && !cert.categories.includes(category)) return false;
        if (search && !`${cert.title} ${cert.institution}`.toLowerCase().includes(search)) return false;
        return true;
    });

    if (filtered.length) {
        grid.innerHTML = filtered.map(buildCard).join('');
    } else {
        grid.innerHTML =
            '<div class="cert-empty">Nenhum certificado encontrado com os filtros selecionados.</div>';
    }

    totalEl.textContent =
        filtered.length === CERTIFICATES.length
            ? `Total: ${CERTIFICATES.length} certificados e cursos`
            : `Exibindo ${filtered.length} de ${CERTIFICATES.length} certificados`;
};

if (grid) {
    populateFilters();
    applyFilters();

    [filterYear, filterInstitution, filterCategory].forEach((el) =>
        el.addEventListener('change', applyFilters)
    );
    filterSearch.addEventListener('input', applyFilters);
    resetBtn.addEventListener('click', () => {
        filterYear.value = '';
        filterInstitution.value = '';
        filterCategory.value = '';
        filterSearch.value = '';
        applyFilters();
    });
}
