/* assets/js/main.js */

(function () {
  "use strict";

  // -----------------------------
  // Util
  // -----------------------------
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // -----------------------------
  // Navbar (mobile)
  // -----------------------------
  function initNav() {
    const toggle = $(".nav-toggle");
    const nav = document.querySelector("[data-nav]");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open", !expanded);
    });

    // Fecha o menu ao clicar em um link
    $$(".site-nav a").forEach((a) => {
      a.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("open");
      });
    });
  }

  // -----------------------------
  // Footer year
  // -----------------------------
  function initYear() {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  // -----------------------------
  // i18n
  // -----------------------------
  const I18N = {
    "pt-BR": {
      // Nav
      "nav.home": "Principal",
      "nav.publications": "Publicações",
      "nav.projects": "Projetos de Pesquisa",
      "nav.team": "Time",

      // Publicações
      "pub.pageTitle": "Publicações | Dr. Cleyton Magalhães",
      "pub.title": "Publicações",
      "pub.openScholar": "Abrir no Google Scholar",
      "pub.searchPlaceholder": "Filtrar por título, autores ou ano",
      "pub.localSourceLabel": "Fonte local:",
      "pub.localSourceHint":
        "Você pode atualizar manualmente ou usar o workflow automático do GitHub.",
      "pub.status.loading": "Carregando publicações...",
      "pub.status.loaded": "{count} publicação(ões).",
      "pub.status.none": "Nenhuma publicação encontrada.",
      "pub.link.open": "Acessar",

      // Home (index)
      "home.title": "Dr. Cleyton Magalhães",
      "home.bio":
        "Docente na Universidade Federal Rural de Pernambuco. Possui graduação em Sistemas de Informação pela Universidade Federal Rural de Pernambuco (2012), Mestrado em Ciências da Computação pela Universidade Federal de Pernambuco (2015) e doutorado em Ciências da Computação pela Universidade Federal de Pernambuco/Western University (2020). Profissionalmente, atuou na área acadêmica como docente na CESAR School, Unisãomiguel, FATEC-PE e Tera Treinamentos, sendo todas as experiências em disciplinas de Tecnologia da Informação. Em termos de indústria de software, possui experiência como Engenheiro de Testes (QA) na Liferay Inc. e CESAR.",

      "home.interests.title": "Interesses de Pesquisa",
      "home.interests.qs.title": "Qualidade de Software.",
      "home.interests.qs.text":
        "Minha pesquisa recente investiga como práticas e ferramentas de teste se adaptam a cenários atuais, incluindo sistemas com Modelos de Linguagem de Grande Escala. Tenho analisado aplicações práticas de LLMs em teste de software e discutido riscos e limitações quando modelos são usados na atividade de teste. Também estudo o papel de profissionais de teste em contextos ágeis e fatores do processo que influenciam a qualidade, com foco em evidência empírica e recomendações para uso na indústria.",
      "home.interests.fair.title": "Fairness Testing.",
      "home.interests.fair.text":
        "Tenho trabalhado com teste de fairness em software, com ênfase em como organizações aplicam essa atividade na prática e nas dificuldades de adoção. Parte das publicações aborda como ferramentas conversacionais e apoio automatizado podem ser usados para orientar a execução de testes de fairness e apoiar decisões durante a avaliação. Esse eixo conecta teste de software, validação de propriedades sociais e requisitos não funcionais relacionados a vieses e impactos.",
      "home.interests.hum.title": "Aspectos Humanos em Engenharia de Software.",
      "home.interests.hum.text":
        "Nos últimos anos, investiguei como características do trabalho afetam pessoas em Engenharia de Software, incluindo especialização, desenho do trabalho e rotação de funções. Também estudei temas ligados a diversidade e inclusão, como experiências de grupos sub-representados e efeitos de modalidades de trabalho (remoto e híbrido) no bem-estar e no cotidiano profissional. Em paralelo, analiso percepções e práticas de profissionais ao usar LLMs no desenvolvimento, buscando entender mudanças no trabalho e implicações para equipes.",

      "home.project.title": "Projeto de Pesquisa",
      "home.project.name":
        "Potencializando a Aprendizagem: Uso de Modelos de Linguagem de Grande Escala para Apoiar Estudantes com TDAH",
      "home.project.p1":
        "Este projeto tem como objetivo desenvolver uma ferramenta de apoio a estudantes universitários com Transtorno de Déficit de Atenção e Hiperatividade (TDAH), utilizando Modelos de Linguagem de Grande Escala (LLMs) para fornecer recursos personalizados que melhorem a organização, o foco, a gestão do tempo e o desempenho acadêmico.",
      "home.project.p2":
        "Espera-se que o projeto resulte no desenvolvimento de uma ferramenta inovadora, baseada em Modelos de Linguagem de Grande Escala (LLMs), capaz de oferecer suporte personalizado a estudantes universitários com TDAH, promovendo melhorias em organização, foco, gestão do tempo e engajamento acadêmico. Além de atender às necessidades individuais dos alunos, a solução deverá fornecer subsídios para docentes e equipes pedagógicas, permitindo um acompanhamento mais preciso e intervenções mais eficazes.",

      // Projetos
      "projects.pageTitle": "Projetos de Pesquisa | Dr. Cleyton Magalhães",
      "projects.title": "Projetos de Pesquisa",
      "projects.p1.name":
        "Potencializando a Aprendizagem: Uso de Modelos de Linguagem de Grande Escala para Apoiar Estudantes com TDAH",
      "projects.p1.desc1":
        "Este projeto tem como objetivo desenvolver uma ferramenta de apoio a estudantes universitários com Transtorno de Déficit de Atenção e Hiperatividade (TDAH), utilizando Modelos de Linguagem de Grande Escala (LLMs) para fornecer recursos personalizados que melhorem a organização, o foco, a gestão do tempo e o desempenho acadêmico.",
      "projects.p1.desc2":
        "Espera-se que o projeto resulte no desenvolvimento de uma ferramenta inovadora, baseada em Modelos de Linguagem de Grande Escala (LLMs), capaz de oferecer suporte personalizado a estudantes universitários com TDAH, promovendo melhorias em organização, foco, gestão do tempo e engajamento acadêmico. Além de atender às necessidades individuais dos alunos, a solução deverá fornecer subsídios para docentes e equipes pedagógicas, permitindo um acompanhamento mais preciso e intervenções mais eficazes.",
      "projects.poweredBy": "Powered by Google",
    },

    en: {
      // Nav
      "nav.home": "Home",
      "nav.publications": "Publications",
      "nav.projects": "Research Projects",
      "nav.team": "Team",

      // Publications
      "pub.pageTitle": "Publications | Dr. Cleyton Magalhães",
      "pub.title": "Publications",
      "pub.openScholar": "Open on Google Scholar",
      "pub.searchPlaceholder": "Filter by title, authors, or year",
      "pub.localSourceLabel": "Local source:",
      "pub.localSourceHint":
        "You can update it manually or use the automatic GitHub workflow.",
      "pub.status.loading": "Loading publications...",
      "pub.status.loaded": "{count} publication(s).",
      "pub.status.none": "No publications found.",
      "pub.link.open": "Open",

      // Home (index)
      "home.title": "Dr. Cleyton Magalhães",
      "home.bio":
        "Professor at the Federal Rural University of Pernambuco. He earned a BSc in Information Systems from the Federal Rural University of Pernambuco (2012), an MSc in Computer Science from the Federal University of Pernambuco (2015), and a PhD in Computer Science from the Federal University of Pernambuco/Western University (2020). Professionally, he has taught at CESAR School, Unisãomiguel, FATEC-PE, and Tera Treinamentos, in Information Technology courses. In the software industry, he has worked as a Test Engineer (QA) at Liferay Inc. and CESAR.",

      "home.interests.title": "Research Interests",
      "home.interests.qs.title": "Software Quality.",
      "home.interests.qs.text":
        "My recent work studies how testing practices and tools evolve in current settings, including software systems powered by large language models. I examine practical uses of LLMs in software testing and discuss risks and limits when models are part of the testing activity. I also study the role of testing professionals in agile contexts and process factors that affect quality, based on empirical evidence and guidance for industry use.",
      "home.interests.fair.title": "Fairness Testing.",
      "home.interests.fair.text":
        "I work on fairness testing in software, focusing on how organizations apply it in practice and the barriers to adoption. Part of my publications discuss how conversational tools and automation can help guide fairness testing activities and support decisions during evaluation. This line connects software testing, assessment of social properties, and non-functional requirements related to bias and impact.",
      "home.interests.hum.title": "Human Aspects in Software Engineering.",
      "home.interests.hum.text":
        "In recent years, I have studied how work characteristics affect people in Software Engineering, including specialization, work design, and job rotation. I also investigate diversity and inclusion topics, such as experiences of underrepresented groups and how remote and hybrid work relate to well-being and day-to-day practice. In parallel, I analyze how professionals perceive and use LLMs in development work, aiming to understand changes in work and team implications.",

      "home.project.title": "Research Project",
      "home.project.name":
        "Enhancing Learning: Using Large-Scale Language Models to Support University Students with ADHD",
      "home.project.p1":
        "This project aims to develop a support tool for university students with Attention-Deficit/Hyperactivity Disorder (ADHD) using large language models (LLMs) to provide personalized resources that improve organization, focus, time management, and academic performance.",
      "home.project.p2":
        "The expected outcome is an LLM-based tool that provides personalized support to university students with ADHD, improving organization, focus, time management, and academic engagement. Beyond individual student needs, the solution should also support instructors and academic support teams by enabling closer follow-up and more effective interventions.",

      // Projects
      "projects.pageTitle": "Research Projects | Dr. Cleyton Magalhães",
      "projects.title": "Research Projects",
      "projects.p1.name":
        "Enhancing Learning: Using Large-Scale Language Models to Support University Students with ADHD",
      "projects.p1.desc1":
        "This project aims to develop a support tool for university students with Attention-Deficit/Hyperactivity Disorder (ADHD) using large language models (LLMs) to provide personalized resources that improve organization, focus, time management, and academic performance.",
      "projects.p1.desc2":
        "The expected outcome is an LLM-based tool that provides personalized support to university students with ADHD, improving organization, focus, time management, and academic engagement. Beyond individual student needs, the solution should also support instructors and academic support teams by enabling closer follow-up and more effective interventions.",
      "projects.poweredBy": "Powered by Google",
    },
  };

  function normalizeLang(lang) {
    if (lang === "pt" || lang === "pt-BR") return "pt-BR";
    return "en";
  }

  function t(key, lang) {
    const dict = I18N[lang] || I18N.en;
    return dict[key] ?? null;
  }

  function format(str, vars) {
    return str.replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : `{${k}}`));
  }

  function setLang(lang) {
    const chosen = normalizeLang(lang);
    localStorage.setItem("lang", chosen);
    document.documentElement.setAttribute("lang", chosen);
    applyTranslations(chosen);
    updateLangButtons(chosen);

    if ($("#pubList")) {
      window.__renderPublications && window.__renderPublications();
    }
  }

  function getInitialLang() {
    const saved = localStorage.getItem("lang");
    if (saved) return normalizeLang(saved);

    const navLang = navigator.language || navigator.userLanguage || "pt-BR";
    return normalizeLang(navLang);
  }

  function applyTranslations(lang) {
    // Texto
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = t(key, lang);

      // Fallback: mantém o texto do HTML se não tiver tradução
      if (value == null) return;

      // Caso especial: <title>
      if (el.tagName && el.tagName.toLowerCase() === "title") {
        document.title = value;
        return;
      }

      el.textContent = value;
    });

    // Placeholder
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      const value = t(key, lang);
      if (value == null) return;
      el.setAttribute("placeholder", value);
    });
  }

  function updateLangButtons(lang) {
    const box = $("#langToggle");
    if (!box) return;
    $$(".lang-btn", box).forEach((btn) => {
      const isActive = normalizeLang(btn.getAttribute("data-lang")) === lang;
      btn.setAttribute("aria-pressed", String(isActive));
      btn.classList.toggle("active", isActive);
    });
  }

  function initLangToggle() {
    const box = $("#langToggle");
    if (!box) return;

    box.addEventListener("click", (e) => {
      const btn = e.target.closest(".lang-btn");
      if (!btn) return;
      const lang = btn.getAttribute("data-lang");
      setLang(lang);
    });

    const initial = getInitialLang();
    setLang(initial);
  }

  // -----------------------------
  // Publications page
  // -----------------------------
  async function loadPublications() {
    const listEl = $("#pubList");
    const statusEl = $("#pubStatus");
    const searchEl = $("#pubSearch");

    if (!listEl || !statusEl) return;

    const lang = normalizeLang(localStorage.getItem("lang") || "pt-BR");
    statusEl.textContent = (t("pub.status.loading", lang) || "Carregando...");

    let pubs = [];
    try {
      const res = await fetch("assets/data/publicacoes.json", { cache: "no-store" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      pubs = Array.isArray(data) ? data : (data.publications || data.items || []);
      if (!Array.isArray(pubs)) pubs = [];
    } catch (err) {
      pubs = [];
      console.error("Falha ao carregar publicacoes.json:", err);
    }

    pubs.sort((a, b) => (Number(b.year || 0) - Number(a.year || 0)));

    function render(filtered) {
      const currentLang = normalizeLang(localStorage.getItem("lang") || "pt-BR");
      listEl.innerHTML = "";

      const loadedStr = t("pub.status.loaded", currentLang) || "{count} publicação(ões).";
      statusEl.textContent = format(loadedStr, { count: filtered.length });

      if (filtered.length === 0) {
        statusEl.textContent = t("pub.status.none", currentLang) || "Nenhuma publicação encontrada.";
        return;
      }

      for (const p of filtered) {
        const title = p.title || "";
        const authors = p.authors || "";
        const venue = p.venue || p.journal || p.booktitle || "";
        const year = p.year || "";
        const url = p.url || p.link || "";

        const li = document.createElement("li");
        li.className = "pub-item";

        const h3 = document.createElement("h3");
        h3.className = "pub-title";
        h3.textContent = title || "(sem título)";

        const meta = document.createElement("div");
        meta.className = "pub-meta";
        meta.textContent = [authors, venue, year].filter(Boolean).join(" • ");

        li.appendChild(h3);
        li.appendChild(meta);

        if (url) {
          const a = document.createElement("a");
          a.className = "pub-link";
          a.href = url;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = t("pub.link.open", currentLang) || "Acessar";
          li.appendChild(a);
        }

        listEl.appendChild(li);
      }
    }

    function applyFilter() {
      const q = (searchEl?.value || "").trim().toLowerCase();
      if (!q) return render(pubs);

      const filtered = pubs.filter((p) => {
        const blob = [
          p.title,
          p.authors,
          p.venue,
          p.journal,
          p.booktitle,
          p.year,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return blob.includes(q);
      });

      render(filtered);
    }

    window.__renderPublications = () => applyFilter();

    if (searchEl) {
      searchEl.addEventListener("input", applyFilter);
    }

    render(pubs);
  }

  // -----------------------------
  // Init
  // -----------------------------
  document.addEventListener("DOMContentLoaded", () => {
    initNav();
    initYear();
    initLangToggle();
    loadPublications();
  });
})();
