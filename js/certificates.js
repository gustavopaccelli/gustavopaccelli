/* ==========================================================================
   certificates.js — dados e filtros da galeria de certificados

   Para adicionar um certificado novo: acrescente um objeto ao array
   CERTIFICATES, com uma única área principal em `area` (as chaves estão em
   CATEGORY_LABELS). `categories` são apenas etiquetas do card. A galeria
   lista apenas os títulos; os documentos não são publicados no site.

   NÃO incluir aqui pareceres de artigos submetidos a periódicos nem
   avaliações de projetos de iniciação científica: são atividades de
   avaliação anônima e o documento identifica autores e trabalhos.
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
    { year: 2026, area: 'educacao', title: 'A BNCC nos Anos Finais do Ensino Fundamental: Arte', institution: 'MEC', location: 'Virtual', hours: "40h", categories: ["educacao"] },
    { year: 2026, area: 'educacao', title: 'AI Fluency for K-12 Educators', institution: 'Anthropic', location: null, hours: null, categories: ["educacao", "tecnologia"] },
    { year: 2026, area: 'tecnologia', title: 'AI Fluency Framework and foundations Anthropic', institution: 'Anthropic', location: null, hours: null, categories: ["tecnologia", "dados"] },
    { year: 2026, area: 'tecnologia', title: 'Claude 101 Anthropic', institution: 'Anthropic', location: null, hours: null, categories: ["tecnologia"] },
    { year: 2026, area: 'tecnologia', title: 'Claude Platform 101', institution: 'Anthropic', location: null, hours: null, categories: ["tecnologia"] },
    { year: 2026, area: 'educacao', title: 'Competências Digitais nas Áreas de Conhecimento da BNCC – Ciências Humanas - Ensino Médio', institution: 'MEC', location: 'Virtual', hours: "60h", categories: ["educacao", "tecnologia"] },
    { year: 2026, area: 'educacao', title: 'Curso de Aperfeiçoamento em Educação e Tecnologia', institution: 'MEC', location: 'Virtual', hours: "180h", categories: ["educacao", "tecnologia"] },
    { year: 2026, area: 'educacao', title: 'MAIS CIÊNCIAS HUMANAS E SOCIAIS APLICADAS', institution: 'MEC', location: 'Virtual', hours: "180h", categories: ["educacao"] },
    { year: 2026, area: 'educacao', title: 'MAIS LINGUAGENS E SUAS TECNOLOGIAS', institution: 'MEC', location: 'Virtual', hours: "180h", categories: ["educacao"] },
    { year: 2026, area: 'educacao', title: 'Orientação Profissional', institution: 'CEFOR', location: 'Virtual', hours: "40h", categories: ["educacao"] },
    { year: 2026, area: 'educacao', title: 'Processos de Orientação Educacional e Profissional', institution: 'CEFOR', location: 'Virtual', hours: "40h", categories: ["educacao"] },
    { year: 2026, area: 'educacao', title: 'Trabalho e Profissionalização', institution: 'CEFOR', location: 'Virtual', hours: "40h", categories: ["educacao"] },
    // ---------- 2025 ----------
    { year: 2025, area: 'pesquisa', title: 'Avaliadores de Artigos Científicos', institution: 'ENAP', location: 'Virtual', hours: "20h", categories: ["pesquisa"] },
    { year: 2025, area: 'dados', title: 'Extraindo Informações do IBGE', institution: 'IBGE', location: 'Rio de Janeiro', hours: "20h", categories: ["pesquisa", "dados"] },
    { year: 2025, area: 'gestao', title: 'Mentoria de Diretores Escolares', institution: 'MEC', location: 'Virtual', hours: "180h", categories: ["gestao", "educacao"] },
    // ---------- 2024 ----------
    { year: 2024, area: 'educacao', title: 'Aprendizagem Baseada em Problemas e Projetos', institution: 'MEC', location: 'Virtual', hours: "120h", categories: ["metodologias", "educacao"] },
    { year: 2024, area: 'educacao', title: 'Filosofia I', institution: 'IFRS', location: null, hours: "40h", categories: ["educacao"] },
    { year: 2024, area: 'educacao', title: 'Formação em Ciências Humanas e Sociais Aplicadas', institution: 'MEC', location: 'Virtual', hours: "180h", categories: ["educacao"] },
    { year: 2024, area: 'educacao', title: 'Formação em Linguagens e suas Tecnologias', institution: 'MEC', location: 'Virtual', hours: "180h", categories: ["educacao"] },
    { year: 2024, area: 'pesquisa', title: 'I Workshop Ultradireita', institution: 'UFJF', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2024, area: 'pesquisa', title: 'II Jornada do Pensamento Social Brasileiro', institution: 'JornadaCSO', location: null, hours: "12h", categories: ["pesquisa"] },
    { year: 2024, area: 'tecnologia', title: 'UX Writing', institution: 'Awari', location: 'Virtual', hours: "25h", categories: ["tecnologia"] },
    // ---------- 2023 ----------
    { year: 2023, area: 'educacao', title: 'A BNCC do Ensino Médio: Ciências Humanas', institution: 'MEC', location: 'Virtual', hours: "50h", categories: ["educacao"] },
    { year: 2023, area: 'direitos-humanos', title: 'Educação em Direitos Humanos', institution: 'ENAP', location: 'Virtual', hours: "30h", categories: ["direitos-humanos", "educacao"] },
    { year: 2023, area: 'educacao', title: 'Formação em Artes nos Anos Finais', institution: 'MEC', location: 'A Distância', hours: "180h", categories: ["educacao"] },
    { year: 2023, area: 'gestao', title: 'Gestão Escolar', institution: 'MEC', location: 'Virtual', hours: "80h", categories: ["gestao", "educacao"] },
    { year: 2023, area: 'gestao', title: 'Gestão de Projetos', institution: 'ENAP', location: 'Virtual', hours: "10h", categories: ["gestao"] },
    { year: 2023, area: 'gestao', title: 'Gestão de Projetos Educacionais', institution: 'ENAP', location: 'Virtual', hours: "30h", categories: ["gestao", "educacao"] },
    // ---------- 2022 ----------
    { year: 2022, area: 'pesquisa', title: 'Análise de Conteúdo — para além de Bardin', institution: 'IBPAD', location: null, hours: "7h", categories: ["pesquisa", "dados"] },
    { year: 2022, area: 'dados', title: 'Data Analysis: Estatística com Google Sheets — Alura', institution: 'Google', location: 'Online', hours: "8h", categories: ["dados", "tecnologia"] },
    { year: 2022, area: 'dados', title: 'Data Analysis: Google Sheets — Alura', institution: 'Google', location: 'Online', hours: "6h", categories: ["dados", "tecnologia"] },
    { year: 2022, area: 'dados', title: 'Data Analysis: Previsões com Google Sheets — Alura', institution: 'Google', location: 'Online', hours: "8h", categories: ["dados", "tecnologia"] },
    { year: 2022, area: 'dados', title: 'Extensão: Introdução a Ciência de Dados com R', institution: 'UNIFESP', location: null, hours: "60h", categories: ["dados", "tecnologia"] },
    { year: 2022, area: 'dados', title: 'Extensão: Introdução a Ciência de Dados com R (2ª edição)', institution: 'Google', location: null, hours: "180h", categories: ["dados", "tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'Extensão: TEAIP', institution: 'UFC', location: 'A Distância', hours: "180h", categories: ["tecnologia", "educacao"] },
    { year: 2022, area: 'educacao', title: 'Metodologias Ativas', institution: 'Nova Escola', location: 'São Paulo', hours: "10h", categories: ["metodologias", "educacao"] },
    { year: 2022, area: 'pesquisa', title: 'Pesquisa de Mercado', institution: 'FGV', location: 'Rio de Janeiro', hours: "5h", categories: ["pesquisa"] },
    { year: 2022, area: 'dados', title: 'Power BI: Explorando Recursos Visuais — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["dados", "tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'Prática de Pesquisa da Experiência do Usuário', institution: 'EBAC', location: 'Online', hours: "6h", categories: ["tecnologia", "pesquisa"] },
    { year: 2022, area: 'tecnologia', title: 'Teste de Usabilidade Parte 1: Seu Produto é Fácil de Usar — Alura', institution: 'Alura', location: 'Online', hours: "3h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'Teste de Usabilidade Parte 2: Mensurando e Entregando Resultados — Alura', institution: 'Alura', location: 'Online', hours: "4h", categories: ["tecnologia"] },
    { year: 2022, area: 'pesquisa', title: 'Transcrição Semiautomatizada de Vídeos', institution: 'IBPAD', location: null, hours: "2h", categories: ["dados", "pesquisa"] },
    { year: 2022, area: 'tecnologia', title: 'UX Acessível: Projetando Interfaces Inclusivas — Alura', institution: 'Alura', location: 'Online', hours: "6h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Design: Criando Dashboard com Data Studio — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Produto: Monitore, Mensure e Teste o Seu Projeto — Alura', institution: 'Alura', location: 'Online', hours: "2h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Análise de Concorrentes — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Análise de Sites com Google Analytics — Alura', institution: 'Google', location: 'Online', hours: "10h", categories: ["tecnologia", "dados"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Avaliação Heurística — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Entrevistas com Equipes Internas — Alura', institution: 'Alura', location: 'Online', hours: "6h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Entrevistas com Usuários — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Mapeando a Jornada do Usuário — Alura', institution: 'JornadaCSO', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Otimização de Sites — Alura', institution: 'Alura', location: 'Online', hours: "10h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Research: Pesquisa Etnográfica — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX Writing: Escrevendo Textos para Usuários — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'UX: Entenda a Experiência de Usuário — Alura', institution: 'Alura', location: 'Online', hours: "8h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'Workshop EBAC', institution: 'EBAC', location: 'Online', hours: "4h", categories: ["tecnologia"] },
    { year: 2022, area: 'tecnologia', title: 'Workshop de UX Design (Introdutório)', institution: 'Awari', location: null, hours: null, categories: ["tecnologia"] },
    // ---------- 2021 ----------
    { year: 2021, area: 'tecnologia', title: 'Aperfeiçoamento TEEHI', institution: 'Google', location: null, hours: "180h", categories: ["tecnologia", "educacao"] },
    { year: 2021, area: 'educacao', title: 'Lahps', institution: 'N/A', location: null, hours: "2h", categories: ["educacao"] },
    { year: 2021, area: 'educacao', title: 'Curso de Extensão: Tô no Rumo', institution: 'UNIFESP', location: null, hours: "39h", categories: ["metodologias", "educacao"] },
    { year: 2021, area: 'educacao', title: 'Extensão: Formação de Educadores para Metodologia Tô no Rumo', institution: 'UFJF', location: null, hours: "2h", categories: ["metodologias", "educacao"] },
    { year: 2021, area: 'dados', title: 'Google Analytics para Iniciantes', institution: 'Google', location: null, hours: null, categories: ["dados", "tecnologia"] },
    // ---------- 2020 ----------
    { year: 2020, area: 'educacao', title: 'Atualização Profissional', institution: 'USINA', location: 'Virtual', hours: "24h", categories: ["educacao"] },
    { year: 2020, area: 'pesquisa', title: 'Colóquio do Curso de História', institution: 'PUC Minas', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2020, area: 'pesquisa', title: 'Economia Solidária', institution: 'ABONG', location: 'São Paulo', hours: null, categories: ["pesquisa"] },
    { year: 2020, area: 'tecnologia', title: 'Extensão: Tecnologias Digitais na Educação', institution: 'UFC', location: null, hours: "60h", categories: ["tecnologia", "educacao"] },
    { year: 2020, area: 'pesquisa', title: 'Movimentos Sociais e Sociedade Moderna', institution: 'NEMOS', location: null, hours: "30h", categories: ["pesquisa"] },
    { year: 2020, area: 'pesquisa', title: 'Política Internacional Brasil', institution: 'ABONG', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2020, area: 'direitos-humanos', title: 'Política Pública e Assistência Social', institution: 'APAE', location: null, hours: null, categories: ["direitos-humanos"] },
    // ---------- 2019 ----------
    { year: 2019, area: 'educacao', title: 'Certificado Global July', institution: 'Global July', location: null, hours: "20h", categories: ["educacao"] },
    { year: 2019, area: 'pesquisa', title: 'Certificado PDPP 2019 Apresentação', institution: 'UFRGS', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2019, area: 'pesquisa', title: 'Certificado PDPP 2019 Participação', institution: 'UFRGS', location: null, hours: "36h", categories: ["pesquisa"] },
    // ---------- 2018 ----------
    { year: 2018, area: 'pesquisa', title: 'ERMECS — Certificado Ouvinte', institution: 'ERMECS', location: null, hours: "20h", categories: ["pesquisa"] },
    // ---------- 2017 ----------
    { year: 2017, area: 'pesquisa', title: 'Jornada de Ciências Sociais (JornadaCSO) — Debatedor', institution: 'JornadaCSO', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2017, area: 'pesquisa', title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'JornadaCSO', location: null, hours: "30h", categories: ["pesquisa"] },
    { year: 2017, area: 'pesquisa', title: 'Palestra Dilemas da Representação', institution: 'UFJF', location: null, hours: "3h", categories: ["pesquisa"] },
    // ---------- 2015 ----------
    { year: 2015, area: 'pesquisa', title: 'Doutrinas Políticas', institution: 'ILB Senado', location: 'A Distância', hours: "20h", categories: ["pesquisa"] },
    { year: 2015, area: 'pesquisa', title: 'Liberalismo', institution: 'ILB Senado', location: 'A Distância', hours: "20h", categories: ["pesquisa"] },
    // ---------- 2014 ----------
    { year: 2014, area: 'pesquisa', title: 'Apresentação de Trabalho — UFF', institution: 'UFF', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2014, area: 'pesquisa', title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'JornadaCSO', location: null, hours: "12h", categories: ["pesquisa"] },
    { year: 2014, area: 'pesquisa', title: 'Minicurso: O Século dos Chefes', institution: 'UFJF', location: null, hours: "15h", categories: ["pesquisa"] },
    // ---------- 2013 ----------
    { year: 2013, area: 'pesquisa', title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'UFJF', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2013, area: 'dados', title: 'Minicurso Estatística CSO — JornadaCSO', institution: 'UFJF', location: null, hours: null, categories: ["dados", "pesquisa"] },
    // ---------- 2012 ----------
    { year: 2012, area: 'pesquisa', title: 'Apresentação de Trabalho — JornadaCSO', institution: 'JornadaCSO', location: null, hours: null, categories: ["pesquisa"] },
    { year: 2012, area: 'pesquisa', title: 'JornadasCSO Apresentação', institution: 'JornadaCSO', location: null, hours: null, categories: ["pesquisa"] },

];

// ---------- Renderização ----------

const statsEl = document.getElementById('area-stats');
const groupsEl = document.getElementById('certificate-groups');
const filterYear = document.getElementById('filter-year');
const filterHours = document.getElementById('filter-hours');
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

// Carga horária declarada (ex.: "40h" -> 40); null quando não informada.
const hoursOf = (cert) => {
    const m = cert.hours ? String(cert.hours).match(/(\d+)\s*h/) : null;
    return m ? parseInt(m[1], 10) : null;
};

const HOUR_RANGES = {
    'ate-20': { label: 'Até 20 h', test: (h) => h !== null && h <= 20 },
    '21-60': { label: '21 a 60 h', test: (h) => h !== null && h >= 21 && h <= 60 },
    '61-180': { label: '61 a 180 h', test: (h) => h !== null && h >= 61 && h <= 180 },
    'sem-info': { label: 'Não informada', test: (h) => h === null }
};

const formatNumber = (n) => n.toLocaleString('pt-BR');

// Uma entrada por área, com total de certificados e horas declaradas; ordem por quantidade.
const AREA_TOTALS = Object.keys(CATEGORY_LABELS)
    .map((key) => {
        const items = CERTIFICATES.filter((c) => c.area === key);
        return {
            key,
            count: items.length,
            hours: items.reduce((sum, c) => sum + (hoursOf(c) || 0), 0)
        };
    })
    .filter((a) => a.count > 0)
    .sort((a, b) => b.count - a.count || CATEGORY_LABELS[a.key].localeCompare(CATEGORY_LABELS[b.key], 'pt-BR'));

const renderStats = () => {
    statsEl.innerHTML = AREA_TOTALS.map((a) => `
        <a class="area-stat" href="#area-${a.key}">
            <span class="area-count">${a.count}</span>
            <span class="area-name">${escapeHtml(CATEGORY_LABELS[a.key])}</span>
            <span class="area-hours">${formatNumber(a.hours)} h declaradas</span>
        </a>`).join('');
};

const buildCard = (cert) => {
    const tags = cert.categories
        .map((cat) => `<span class="cert-tag">${escapeHtml(CATEGORY_LABELS[cat] || cat)}</span>`)
        .join('');

    let certText = `${cert.year} – ${escapeHtml(cert.title)}. ${escapeHtml(cert.institution)}.`;
    if (cert.location) {
        certText += ` ${escapeHtml(cert.location)}.`;
    }
    if (cert.hours) {
        certText += ` (Carga horária: ${escapeHtml(cert.hours)})`;
    }

    return `
        <div class="certificate-card reveal visible" data-year="${cert.year}">
            <p class="cert-title">${certText}</p>
            <div class="cert-tags">${tags}</div>
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

    Object.entries(HOUR_RANGES).forEach(([value, range]) => {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = range.label;
        filterHours.appendChild(opt);
    });
};

const matchesFilters = (cert) => {
    if (filterYear.value && String(cert.year) !== filterYear.value) return false;
    if (filterHours.value && !HOUR_RANGES[filterHours.value].test(hoursOf(cert))) return false;
    return true;
};

const applyFilters = () => {
    const filtered = CERTIFICATES.filter(matchesFilters);

    groupsEl.innerHTML = AREA_TOTALS.map((a) => {
        const items = filtered.filter((c) => c.area === a.key);
        if (!items.length) return '';
        return `
        <section class="cert-group" id="area-${a.key}" aria-labelledby="heading-${a.key}">
            <h3 class="cert-group-title" id="heading-${a.key}">
                ${escapeHtml(CATEGORY_LABELS[a.key])} <span class="cert-group-count">${items.length}</span>
            </h3>
            <div class="certificates-grid">${items.map(buildCard).join('')}</div>
        </section>`;
    }).join('') || '<div class="cert-empty">Nenhum certificado encontrado com os filtros selecionados.</div>';

    totalEl.textContent =
        filtered.length === CERTIFICATES.length
            ? `Total: ${CERTIFICATES.length} certificados e cursos`
            : `Exibindo ${filtered.length} de ${CERTIFICATES.length} certificados`;
};

if (groupsEl) {
    populateFilters();
    renderStats();
    applyFilters();

    [filterYear, filterHours].forEach((el) => el.addEventListener('change', applyFilters));
    resetBtn.addEventListener('click', () => {
        filterYear.value = '';
        filterHours.value = '';
        applyFilters();
    });
}
