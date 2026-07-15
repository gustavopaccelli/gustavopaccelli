/* ==========================================================================
   certificates.js — dados e filtros da galeria de certificados
   Para adicionar um certificado novo: acrescente um objeto ao array
   CERTIFICATES e coloque o PDF em assets/docs/certificates/ com o nome
   "ANO Título.pdf" (ex.: "2026 Extraindo Informações do IBGE.pdf").
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
    { year: 2026, title: '- MAIS LINGUAGENS E SUAS TECNOLOGIAS', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2026, title: '- Orientação Profissional', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: '- Processos de Orientação Educacional e Profissional', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: '- Trabalho e Profissionalização', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: 'A BNCC nos Anos Finais do Ensino Fundamental_ Arte', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2026, title: 'Competências Digitais – Ciências Humanas - Ensino Médio', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2025 ----------
    { year: 2025, title: '- PIA3804-2024 - Na fronteira Mulheres Negras na Universidade,', institution: 'N/A', hours: null, categories: ['direitos-humanos', 'pesquisa'] },
    { year: 2025, title: '- SEMIC participação', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2025, title: 'Avaliadores de Artigos Científicos', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'Extraindo Informações do IBGE', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'Mentoria de Diretores Escolares', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'Trabalho e Profissionalização', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA3804-2024', institution: 'N/A', hours: null, categories: ['direitos-humanos', 'pesquisa'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA3805-2024', institution: 'N/A', hours: null, categories: ['direitos-humanos', 'pesquisa'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA4091-2025', institution: 'N/A', hours: null, categories: ['direitos-humanos', 'pesquisa'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA4141-2025', institution: 'N/A', hours: null, categories: ['direitos-humanos', 'pesquisa'] },
    { year: 2025, title: 'UNILA certificado_avalicao_proposta_iniciacao_PIA4142-2025', institution: 'N/A', hours: null, categories: ['direitos-humanos', 'pesquisa'] },

    // ---------- 2024 ----------
    { year: 2024, title: '- Formação em Linguagens e suas Tecnologias', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2024, title: '- PIA3805-2024 - Marina Tunirê Resistência e Memória na Luta', institution: 'N/A', hours: null, categories: ['direitos-humanos', 'pesquisa'] },
    { year: 2024, title: '- SEMIC participação', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2024, title: 'Aprendizagem Baseada em Problemas e Projetos', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'Certificado I WorkShop Ultradireita - Gustavo Pacelli', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2024, title: 'Filosofia 1 UFRGS', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'Formação em Ciências Humanas e Sociais Aplicadas', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2024, title: 'II Jornada do Pensamento Social Brasileiro', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2024, title: 'UX Writting', institution: 'N/A', hours: null, categories: ['tecnologia'] },

    // ---------- 2023 ----------
    { year: 2023, title: '- SEMIC participação', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2023, title: 'A BNCC do Ensino Médio_ Ciências Humanas MEC', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2023, title: 'CertificadoParticipacaoSEMIC', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2023, title: 'ENAP Educação em direitos humanos', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2023, title: 'ENAP Gestão de Projetos', institution: 'N/A', hours: null, categories: ['gestao'] },
    { year: 2023, title: 'ENAP Gestão de Projetos Educacionais', institution: 'N/A', hours: null, categories: ['gestao'] },
    { year: 2023, title: 'Formação em Artes nos Anos Finais MEC', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2023, title: 'Gestão Escolar MEC', institution: 'N/A', hours: null, categories: ['gestao'] },

    // ---------- 2022 ----------
    { year: 2022, title: 'Análise de Conteúdo — para além de Bardin', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2022, title: 'Certificado Data Analysis Google Sheets', institution: 'N/A', hours: null, categories: ['dados', 'tecnologia'] },
    { year: 2022, title: 'Data Analysis: Estatística com Google Sheets — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Data Analysis: Google Sheets — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Data Analysis: Previsões com Google Sheets — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Extensão: Introdução a Ciência de Dados com R', institution: 'N/A', hours: null, categories: ['dados'] },
    { year: 2022, title: 'Extensão: TEAIP', institution: 'N/A', hours: null, categories: ['educacao', 'tecnologia'] },
    { year: 2022, title: 'Metodologias Ativas', institution: 'N/A', hours: null, categories: ['metodologias'] },
    { year: 2022, title: 'Pesquisa de Mercado', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2022, title: 'Power BI: Explorando Recursos Visuais — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Prática de Pesquisa da Experiência do Usuário', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2022, title: 'Teste de Usabilidade Parte 1: Seu Produto é Fácil de Usar — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Teste de Usabilidade Parte 2: Mensurando e Entregando Resultados — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Transcrição Semiautomatizada de Vídeos', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2022, title: 'UX Acessível: Projetando Interfaces Inclusivas — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Design: Criando Dashboard com Data Studio — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Produto: Monitore, Mensure e Teste o Seu Projeto — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Análise de Concorrentes — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Análise de Sites com Google Analytics — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Avaliação Heurística — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Entrevistas com Equipes Internas — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Entrevistas com Usuários — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Mapeando a Jornada do Usuário — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Otimização de Sites — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX Research: Pesquisa Etnográfica — Alura', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2022, title: 'UX Writing: Escrevendo Textos para Usuários — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'UX: Entenda a Experiência de Usuário — Alura', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Workshop EBAC', institution: 'N/A', hours: null, categories: ['tecnologia'] },
    { year: 2022, title: 'Workshop de UX Design (Introdutório)', institution: 'N/A', hours: null, categories: ['tecnologia'] },

    // ---------- 2021 ----------
    { year: 2021, title: 'Aperfeiçoamento TEEHI', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2021, title: 'Curso de Extensão: Tô no Rumo', institution: 'N/A', hours: null, categories: ['educacao', 'tecnologia'] },
    { year: 2021, title: 'Google Analytics para Iniciantes', institution: 'N/A', hours: null, categories: ['dados', 'tecnologia'] },
    { year: 2021, title: 'Google Analytics para iniciantes', institution: 'N/A', hours: null, categories: ['dados', 'tecnologia'] },
    { year: 2021, title: 'Lahps', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2021, title: 'Revisor — ANA CAROLINA SANTOS MIRANDA', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2021, title: 'Revisor — FERNANDA DA SILVA FERREIRA', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2021, title: 'Revisor — Julia Gravina de Faria', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2021, title: 'Revisor — THIAGO ALMEIDA APOLINÁRIO PRIMO', institution: 'N/A', hours: null, categories: ['pesquisa'] },

    // ---------- 2020 ----------
    { year: 2020, title: 'Atualização Profissional', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Colóquio do Curso de História', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Economia Solidária', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Extensão: Tecnologias Digitais na Educação', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Movimentos Sociais e Sociedade Moderna', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Política Internacional Brasil', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Política Pública e Assistência Social', institution: 'N/A', hours: null, categories: ['pesquisa'] },

    // ---------- 2019 ----------
    { year: 2019, title: 'Certificado Global July', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2019, title: 'Certificado PDPP 2019 Apresentação', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2019, title: 'Certificado PDPP 2019 Participação', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2019, title: 'Revisor — Gabriel Bressan Ramos', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2019, title: 'Revisor — Matheus Luciano da Costa Ferreira', institution: 'N/A', hours: null, categories: ['pesquisa'] },

    // ---------- 2018 ----------
    { year: 2018, title: 'Avaliador — SEMIC', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2018, title: 'ERMECS — Certificado Ouvinte', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2018, title: 'Revisor — Jaqueline de Oliveira Moreira', institution: 'N/A', hours: null, categories: ['pesquisa'] },

    // ---------- 2017 ----------
    { year: 2017, title: 'Jornada de Ciências Sociais (JornadaCSO) — Debatedor', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2017, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2017, title: 'Palestra Dilemas da Representação', institution: 'N/A', hours: null, categories: ['pesquisa'] },

    // ---------- 2015 ----------
    { year: 2015, title: 'Doutrinas Políticas', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2015, title: 'Liberalismo', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2014 ----------
    { year: 2014, title: 'Apresentação de Trabalho — UFF', institution: 'N/A', hours: null, categories: ['educacao'] },
    { year: 2014, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2014, title: 'Minicurso: O Século dos Chefes', institution: 'N/A', hours: null, categories: ['educacao'] },

    // ---------- 2013 ----------
    { year: 2013, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2013, title: 'Minicurso Estatística CSO — JornadaCSO', institution: 'N/A', hours: null, categories: ['pesquisa'] },

    // ---------- 2012 ----------
    { year: 2012, title: 'Apresentação de Trabalho — JornadaCSO', institution: 'N/A', hours: null, categories: ['pesquisa'] },
    { year: 2012, title: 'JornadasCSO Apresentação', institution: 'N/A', hours: null, categories: ['pesquisa'] },

];

// ---------- Renderização ----------

const grid = document.getElementById('certificates-grid');
const filterYear = document.getElementById('filter-year');
const filterInstitution = document.getElementById('filter-institution');
const filterCategory = document.getElementById('filter-category');
const filterSearch = document.getElementById('filter-search');
const totalEl = document.getElementById('cert-total');
const resetBtn = document.getElementById('filter-reset');

const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[c]);

const pdfPath = (cert) => `assets/docs/certificates/${cert.year} ${cert.title}.pdf`;

const buildCard = (cert) => {
    const tags = cert.categories
        .map((cat) => `<span class="cert-tag">${escapeHtml(CATEGORY_LABELS[cat] || cat)}</span>`)
        .join('');

    return `
        <div class="certificate-card reveal visible" data-year="${cert.year}">
            <div class="cert-header">
                <h4>${escapeHtml(cert.title)}</h4>
                <span class="year-badge">${cert.year}</span>
            </div>
            <div class="cert-tags">${tags}</div>
            <div class="cert-actions">
                <a href="${encodeURI(pdfPath(cert))}" target="_blank" rel="noopener" class="btn btn-small btn-ghost">
                    📥 Ver certificado (PDF)
                </a>
            </div>
        </div>`;
};

const populateFilters = () => {
    const years = [...new Set(CERTIFICATES.map((c) => c.year))].sort((a, b) => b - a);
    years.forEach((year) => {
        const opt = document.createElement('option');
        opt.value = year;
        opt.textContent = year;
        filterYear.appendChild(opt);
    });

    const institutions = [...new Set(CERTIFICATES.map((c) => c.institution))].sort((a, b) =>
        a.localeCompare(b, 'pt-BR')
    );
    institutions.forEach((inst) => {
        const opt = document.createElement('option');
        opt.value = inst;
        opt.textContent = inst;
        filterInstitution.appendChild(opt);
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
