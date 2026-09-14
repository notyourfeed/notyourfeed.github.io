/* app.js — liest POSTS aus posts-data.js und rendert die Ansichten.
   Kein Framework, keine Abhängigkeiten — läuft direkt aus dem Ordner
   heraus, auch ohne Server, per Doppelklick auf die HTML-Dateien. */

function sortedPosts() {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- Startseite: Log + Presets ---------- */

function renderLog(filterGenre) {
  const list = document.getElementById("log-list");
  if (!list) return;

  const posts = sortedPosts().filter(
    (p) => !filterGenre || filterGenre === "Alle" || p.genre === filterGenre
  );

  if (posts.length === 0) {
    list.innerHTML = `<p class="empty-state">Auf dieser Frequenz ist gerade nichts zu empfangen. Anderes Preset versuchen.</p>`;
    return;
  }

  list.innerHTML = posts
    .map(
      (p) => `
      <a class="entry" href="post.html?id=${encodeURIComponent(p.id)}">
        <span class="entry-freq">${escapeHtml(p.freq)}</span>
        <span>
          <h3 class="entry-title">${escapeHtml(p.title)}</h3>
          <p class="entry-blurb">${escapeHtml(p.blurb)}</p>
        </span>
        <span class="entry-meta">
          ${escapeHtml(p.dateLabel)}
          <br />
          <span class="entry-genre">${escapeHtml(p.genre)}</span>
        </span>
      </a>`
    )
    .join("");
}

function renderPresets() {
  const row = document.getElementById("preset-row");
  if (!row) return;

  const genres = ["Alle", ...new Set(sortedPosts().map((p) => p.genre))];
  let active = "Alle";

  row.innerHTML = genres
    .map(
      (g, i) =>
        `<button class="preset" aria-pressed="${i === 0}" data-genre="${escapeHtml(g)}">${escapeHtml(g)}</button>`
    )
    .join("");

  row.querySelectorAll(".preset").forEach((btn) => {
    btn.addEventListener("click", () => {
      active = btn.dataset.genre;
      row.querySelectorAll(".preset").forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");
      renderLog(active);
    });
  });
}

/* ---------- Beitragsseite ---------- */

function renderPost() {
  const mount = document.getElementById("post-mount");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const posts = sortedPosts();
  const index = posts.findIndex((p) => p.id === id);
  const post = index >= 0 ? posts[index] : null;

  if (!post) {
    mount.innerHTML = `
      <div class="paper">
        <p class="post-freq">Kein Empfang</p>
        <h1>Diese Frequenz gibt es nicht (mehr)</h1>
        <p class="post-meta">Vielleicht wurde der Link falsch kopiert.</p>
        <p><a href="index.html">Zurück zum Log</a></p>
      </div>`;
    document.title = "notyourfeed — kein Empfang";
    return;
  }

  document.title = `${post.title} — notyourfeed`;

  const prev = posts[index + 1]; // älter
  const next = posts[index - 1]; // neuer

  const linkBlock = post.link
    ? `<div class="signal-box">
        <svg class="grille" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="17" cy="17" r="16" stroke="currentColor" stroke-opacity="0.4"/>
          <circle cx="17" cy="17" r="2" fill="currentColor"/>
          <circle cx="17" cy="8" r="1.6" fill="currentColor"/>
          <circle cx="17" cy="26" r="1.6" fill="currentColor"/>
          <circle cx="8" cy="17" r="1.6" fill="currentColor"/>
          <circle cx="26" cy="17" r="1.6" fill="currentColor"/>
          <circle cx="11" cy="11" r="1.4" fill="currentColor"/>
          <circle cx="23" cy="11" r="1.4" fill="currentColor"/>
          <circle cx="11" cy="23" r="1.4" fill="currentColor"/>
          <circle cx="23" cy="23" r="1.4" fill="currentColor"/>
        </svg>
        <a href="${escapeHtml(post.link)}" target="_blank" rel="noopener">${escapeHtml(post.linkLabel || "Anhören")}</a>
      </div>`
    : "";

  mount.innerHTML = `
    <article class="paper">
      <p class="post-freq">${escapeHtml(post.freq)} · ${escapeHtml(post.genre)}</p>
      <h1>${escapeHtml(post.title)}</h1>
      <p class="post-meta">Empfangen am ${escapeHtml(post.dateLabel)}</p>
      <div class="body-copy">
        ${post.body.map((para) => `<p>${escapeHtml(para)}</p>`).join("")}
      </div>
      ${post.embed ? `<div style="margin: 2.5rem 0;">${post.embed}</div>` : ""}
      ${linkBlock}
      <nav class="post-nav" aria-label="Zwischen Funden blättern">
        <span>${prev ? `<a href="post.html?id=${encodeURIComponent(prev.id)}">← ${escapeHtml(prev.freq)}, älter</a>` : ""}</span>
        <span>${next ? `<a href="post.html?id=${encodeURIComponent(next.id)}">${escapeHtml(next.freq)}, neuer →</a>` : ""}</span>
      </nav>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderPresets();
  renderLog("Alle");
  renderPost();
});
