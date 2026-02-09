(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Publicações
  const pubList = document.getElementById("pubList");
  const pubStatus = document.getElementById("pubStatus");
  const pubSearch = document.getElementById("pubSearch");

  async function loadPubs() {
    if (!pubList) return;

    pubStatus.textContent = "Carregando publicações...";
    try {
      const res = await fetch("assets/data/publicacoes.json", { cache: "no-store" });
      if (!res.ok) throw new Error("Falha ao carregar publicacoes.json");
      const data = await res.json();

      const pubs = (data.publicacoes || [])
        .slice()
        .sort((a, b) => (b.ano ?? 0) - (a.ano ?? 0));

      pubStatus.textContent = pubs.length ? `${pubs.length} publicação(ões).` : "Nenhuma publicação encontrada.";
      renderPubs(pubs);

      if (pubSearch) {
        pubSearch.addEventListener("input", () => {
          const q = pubSearch.value.trim().toLowerCase();
          const filtered = pubs.filter(p => {
            const hay = `${p.titulo ?? ""} ${p.autores ?? ""} ${p.veiculo ?? ""} ${p.ano ?? ""}`.toLowerCase();
            return hay.includes(q);
          });
          pubStatus.textContent = `${filtered.length} de ${pubs.length}.`;
          renderPubs(filtered);
        });
      }
    } catch (e) {
      pubStatus.textContent = "Não foi possível carregar as publicações. Verifique o arquivo assets/data/publicacoes.json.";
    }
  }

  function renderPubs(pubs) {
    pubList.innerHTML = "";
    for (const p of pubs) {
      const li = document.createElement("li");
      li.className = "pub-item";

      const title = document.createElement("div");
      title.className = "pub-title";
      title.textContent = p.titulo ?? "Sem título";

      const meta = document.createElement("div");
      meta.className = "pub-meta";
      const parts = [];
      if (p.autores) parts.push(p.autores);
      if (p.veiculo) parts.push(p.veiculo);
      if (p.ano) parts.push(String(p.ano));
      meta.textContent = parts.join(" • ");

      li.appendChild(title);
      li.appendChild(meta);

      if (p.link) {
        const a = document.createElement("a");
        a.href = p.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "Acessar";
        a.style.display = "inline-block";
        a.style.marginTop = "0.25rem";
        a.style.color = "var(--accent)";
        li.appendChild(a);
      }

      pubList.appendChild(li);
    }
  }

  loadPubs();
})();
