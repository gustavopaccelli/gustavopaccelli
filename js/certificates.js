/* ==========================================================================
   certificates.js — dados e filtros da galeria de certificados
   Para adicionar um certificado novo: acrescente um objeto ao array
   CERTIFICATES e coloque o PDF em assets/docs/certificates/ com o nome
   "ANO Título.pdf" (ex.: "2025 Extraindo Informações do IBGE.pdf").
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
    // ---------- 2022 ----------
    { year: 2022, title: 'Análise de Conteúdo — para além de Bardin', institution: 'IBPAD', hours: '9h', categories: ['pesquisa', 'dados'] },
    { year: 2022, title: 'Workshop de UX Design (Introdutório)', institution: 'Awari', hours: null, categories: ['tecnologia'] },

    // ---------- 2021 ----------
    { year: 2021, title: 'Aperfeiçoamento TEEHI', institution: 'UFC', hours: null, categories: ['tecnologia', 'educacao'] },
    { year: 2021, title: 'Curso de Extensão: Tô no Rumo', institution: 'UNIFESP', hours: null, categories: ['metodologias', 'educacao'] },
    { year: 2021, title: 'Google Analytics para Iniciantes', institution: 'Google', hours: null, categories: ['dados', 'tecnologia'] },

    // ---------- 2020 ----------
    { year: 2020, title: 'Atualização Profissional', institution: 'USINA', hours: null, categories: ['educacao'] },
    { year: 2020, title: 'Colóquio do Curso de História', institution: 'PUC Minas', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Economia Solidária', institution: 'ABONG', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Extensão: Tecnologias Digitais na Educação', institution: 'UFC', hours: '180h', categories: ['tecnologia', 'educacao'] },
    { year: 2020, title: 'Movimentos Sociais e Sociedade Moderna', institution: 'NEMOS', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Política Internacional Brasil', institution: 'ABONG', hours: null, categories: ['pesquisa'] },
    { year: 2020, title: 'Política Pública e Assistência Social', institution: 'APAE', hours: null, categories: ['direitos-humanos'] },

    // ---------- 2019 ----------
    { year: 2019, title: 'Certificado Global July', institution: 'Global July', hours: null, categories: ['educacao'] },
    { year: 2019, title: 'Certificado PDPP 2019 Apresentação', institution: 'PDPP', hours: null, categories: ['pesquisa'] },
    { year: 2019, title: 'Certificado PDPP 2019 Participação', institution: 'PDPP', hours: null, categories: ['pesquisa'] },

    // ---------- 2018 ----------
    { year: 2018, title: 'Avaliador — SEMIC', institution: 'UFJF', hours: null, categories: ['pesquisa'] },
    { year: 2018, title: 'ERMECS — Certificado Ouvinte', institution: 'ERMECS', hours: null, categories: ['pesquisa'] },

    // ---------- 2017 ----------
    { year: 2017, title: 'Jornada de Ciências Sociais (JornadaCSO) — Debatedor', institution: 'UFJF', hours: null, categories: ['pesquisa'] },
    { year: 2017, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'UFJF', hours: null, categories: ['pesquisa'] },
    { year: 2017, title: 'Palestra Dilemas da Representação', institution: 'UFJF', hours: null, categories: ['pesquisa'] },

    // ---------- 2015 ----------
    { year: 2015, title: 'Doutrinas Políticas', institution: 'ILB / Senado Federal', hours: '20h', categories: ['pesquisa'] },
    { year: 2015, title: 'Liberalismo', institution: 'ILB / Senado Federal', hours: '20h', categories: ['pesquisa'] },

    // ---------- 2014 ----------
    { year: 2014, title: 'Apresentação de Trabalho — UFF', institution: 'UFF', hours: null, categories: ['pesquisa'] },
    { year: 2014, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'UFJF', hours: null, categories: ['pesquisa'] },
    { year: 2014, title: 'Minicurso: O Século dos Chefes', institution: 'UFJF', hours: '15h', categories: ['pesquisa'] },

    // ---------- 2013 ----------
    { year: 2013, title: 'Jornada de Ciências Sociais (JornadaCSO) — Ouvinte', institution: 'UFJF', hours: null, categories: ['pesquisa'] },
    { year: 2013, title: 'Minicurso Estatística CSO — JornadaCSO', institution: 'UFJF', hours: null, categories: ['dados', 'pesquisa'] },

    // ---------- 2012 ----------
    { year: 2012, title: 'Apresentação de Trabalho — JornadaCSO', institution: 'UFJF', hours: null, categories: ['pesquisa'] },
    { year: 2012, title: 'JornadasCSO Apresentação', institution: 'UFJF', hours: null, categories: ['pesquisa'] }
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
            <p class="institution">${escapeHtml(cert.institution)}</p>
            ${cert.hours ? `<p class="duration">Carga horária: ${escapeHtml(cert.hours)}</p>` : ''}
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
