import * as THREE from "three";
import { profile, projects, skills, timeline, reflections } from "./data.js";
import "./style.css";

const app = document.querySelector("#app");
// Échappe les textes venant de data.js avant de les insérer dans le HTML.
const safe = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
// Sans URL, on affiche un bouton désactivé plutôt qu’un lien vide.
const external = (url, label) =>
  url
    ? `<a class="btn" href="${safe(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`
    : `<span class="btn disabled" title="Lien à renseigner">${label} · bientôt</span>`;
const sections = ["home", "projects", "skills", "journey", "contact"];
// Les sections sont construites à partir des données du portfolio.
app.innerHTML = `
<canvas id="world" aria-hidden="true"></canvas>
<header class="topbar"><a class="logo" href="#home">N<span>Ξ</span>XUS<span class="logo-dot">.</span></a><nav aria-label="Navigation principale">${sections.map((s, i) => `<a href="#${s}" data-nav="${s}">${["Accueil", "Projets", "Compétences", "Parcours", "Contact"][i]}</a>`).join("")}</nav><button id="menu" class="menu" aria-label="Ouvrir le menu">☰</button></header>
<main>
<section id="home" class="hero section"><div class="hero-copy"><div class="eyebrow"><span class="status"></span> PORTFOLIO / ÉDITION 2026</div><p class="kicker">BIENVENUE DANS MON UNIVERS</p><h1>BUILDING<br/><em>WHAT'S</em><br/>NEXT<span>.</span></h1><p class="lead">${safe(profile.tagline)}<br/><strong>${safe(profile.name)}</strong> — ${safe(profile.role)}</p><div class="actions"><a class="btn primary" href="#projects">Explorer mes projets <span>↗</span></a><a class="btn ghost" href="#journey">Découvrir mon parcours ↓</a></div></div>
<div class="hero-aside">
  <div class="nexus-id-card">
    <div class="nexus-id-header">
      <span>✦ NΞXUS / CREW ID</span>
      <span class="nexus-id-status">● ACTIVE</span>
    </div>

    <div class="nexus-id-content">
      <div class="nexus-id-photo">
        ${
          profile.photo
            ? `<img src="${safe(profile.photo)}" alt="Portrait professionnel de ${safe(profile.name)}" />`
            : `<span class="nexus-id-placeholder">SJ</span>`
        }
      </div>

      <div class="nexus-id-info">
        <small>IDENTITÉ / DÉVELOPPEUSE</small>
        <h3>${safe(profile.name)}</h3>
        <p>${safe(profile.role)}</p>
        <span>${safe(profile.location)}</span>
      </div>
    </div>

    <div class="nexus-id-footer">
      <span>PORTFOLIO / 2026</span>
      <span>ID — NX-001</span>
    </div>
  </div>

  <div class="hero-aside-bottom">
    <p>Un univers numérique à explorer.<br/>Faites défiler pour commencer.</p>
    <div class="scroll-indicator">↓</div>
  </div>
</div>
</section>
<section id="projects" class="section content-section"><div class="section-head"><span class="index">01 — RÉALISATIONS</span><h2>PROJETS<span class="accent">_</span></h2><p>Six projets à découvrir, du jeu vidéo aux applications web.</p></div><div class="project-grid">${projects.map((p, i) => `<article class="project-card" style="--delay:${i * 70}ms"><div class="card-top"><span>0${i + 1} / ${safe(p.category)}</span><span>${safe(p.year)}</span></div><div class="project-symbol">${p.image ? `<img src="${safe(p.image)}" alt="Illustration de ${safe(p.name)}" loading="lazy" />` : "◈"}</div><h3>${safe(p.name)}</h3><p>${safe(p.description)}</p><div class="tags">${p.stack.map((t) => `<span>${safe(t)}</span>`).join("")}</div><div class="card-actions">${external(p.url, "Voir le projet")}${p.repo ? external(p.repo, "Code source") : ""}</div></article>`).join("")}</div></section>
<section id="skills" class="section content-section"><div class="section-head"><span class="index">02 — EXPERTISE</span><h2>COMPÉTENCES<span class="accent">_</span></h2><p>Compétences illustrées par des réalisations concrètes. Compétences abordées pendant mon parcours.</p></div><div class="skills-grid">${skills
  .map(
    (s) =>
      `<article class="skill-card"><div class="skill-title"><h3>${safe(s.name)}</h3><span>${s.level}%</span></div><div class="meter"><span style="width:${s.level}%"></span></div><p>${safe(s.description)}</p><small>Preuves : ${s.evidence
        .map((id) => {
          const p = projects.find((x) => x.id === id);
          return `<a href="#projects">${safe(p?.name || id)}</a>`;
        })
        .join(" · ")}</small></article>`,
  )
  .join(
    "",
  )}</div><div class="note">Les pourcentages sont indicatifs et seront ajustés avec les projets présentés.</div></section>
<section id="journey" class="section content-section"><div class="section-head"><span class="index">04 — ÉVOLUTION</span><h2>MON PARCOURS<span class="accent">_</span></h2><p>${safe(profile.bio)}</p></div><div class="timeline">${timeline.map((t) => `<article class="timeline-item"><div class="date">${safe(t.date)}</div><div><h3>${safe(t.title)}</h3><p>${safe(t.text)}</p></div></article>`).join("")}</div><h3 class="subheading">Journal d'apprentissage</h3><div class="reflection-grid">${reflections.map((r) => `<article><h4>${safe(r.title)}</h4><p>${safe(r.text)}</p></article>`).join("")}</div><div class="cv-box"><div><strong>Curriculum vitæ</strong><p>Retrouvez mon parcours complet au format PDF.</p></div>${profile.cv ? `<a class="btn primary" href="${safe(profile.cv)}" download>Télécharger mon CV ↓</a>` : `<span class="btn disabled">CV à ajouter</span>`}</div></section>
<section id="contact" class="section content-section contact-section"><div class="section-head"><span class="index">05 — TRANSMISSION</span><h2>ON ÉCHANGE<span class="accent">?</span></h2><p>Une idée, un projet, une question ? Envoyez-moi un message.</p></div><div class="contact-layout"><form id="contact-form"><label>Votre nom<input name="name" required maxlength="100" placeholder="Votre nom"/></label><label>Votre email<input name="email" type="email" required placeholder="vous@exemple.fr"/></label><label>Votre message<textarea name="message" rows="5" required maxlength="3000" placeholder="Parlez-moi de votre projet..."></textarea></label><button class="btn primary" type="submit">Envoyer le message ↗</button><p class="form-hint">Le message sera envoyé directement depuis NEXUS.</p></form><aside class="contact-aside"><span class="index">COORDONNÉES</span><h3>${safe(profile.name)}</h3><p>${safe(profile.location)}</p><a href="mailto:${safe(profile.email)}">${safe(profile.email)}</a><div class="socials">${external(profile.github, "GitHub")}${external(profile.linkedin, "LinkedIn")}</div></aside></div></section>
</main><footer><span>NΞXUS © 2026</span><span>CONÇU AVEC THREE.JS & BEAUCOUP DE CURIOSITÉ</span><a href="#home">RETOUR EN HAUT ↑</a></footer><div class="scene-caption" aria-hidden="true">INTERACTIVE SYSTEM <span id="coords">X: 00 / Y: 00</span></div>`;
const menu = document.querySelector("#menu");
menu.addEventListener("click", () =>
  document.querySelector("nav").classList.toggle("open"),
);
document
  .querySelectorAll("nav a")
  .forEach((a) =>
    a.addEventListener("click", () =>
      document.querySelector("nav").classList.remove("open"),
    ),
  );
// Le formulaire est envoyé à Formspree sans recharger la page.
document
  .querySelector("#contact-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector(".form-hint");
    button.disabled = true;
    button.textContent = "Envoi en cours…";
    status.textContent = "Transmission du message…";
    status.setAttribute("role", "status");

    try {
      const response = await fetch("https://formspree.io/f/xjyyadza", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Formspree a refusé le message");
      form.reset();
      status.textContent =
        "Message envoyé avec succès. Merci pour votre message !";
    } catch (error) {
      status.textContent =
        "Échec de l'envoi. Réessayez ou contactez-moi par email.";
      console.error("Erreur du formulaire :", error);
    } finally {
      button.disabled = false;
      button.textContent = "Envoyer le message ↗";
    }
  });
const canvas = document.querySelector("#world");
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
  powerPreference: "high-performance",
});
// Limite la résolution du canvas pour garder de bonnes performances.
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
renderer.setSize(innerWidth, innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x080b18, 0.035);
const camera = new THREE.PerspectiveCamera(
  42,
  innerWidth / innerHeight,
  0.1,
  150,
);
camera.position.set(0, 3.8, 15);
scene.add(new THREE.AmbientLight(0x8da7ff, 1.3));
const light = new THREE.PointLight(0x60e9ff, 55, 40);
light.position.set(5, 5, 7);
scene.add(light);
const violet = new THREE.PointLight(0x8755ff, 75, 40);
violet.position.set(-6, -2, 1);
scene.add(violet);
const station = new THREE.Group();
scene.add(station);
const core = new THREE.Mesh(
  new THREE.IcosahedronGeometry(2.05, 1),
  new THREE.MeshPhysicalMaterial({
    color: 0x131f42,
    metalness: 0.7,
    roughness: 0.22,
    flatShading: true,
    emissive: 0x101a38,
  }),
);
station.add(core);
const inner = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.32, 1),
  new THREE.MeshBasicMaterial({
    color: 0x5ce8ff,
    wireframe: true,
    transparent: true,
    opacity: 0.25,
  }),
);
station.add(inner);
for (let i = 0; i < 3; i++) {
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(3.05 + i * 0.52, 0.018, 5, 130),
    new THREE.MeshBasicMaterial({
      color: i === 1 ? 0xb48bff : 0x57ddff,
      transparent: true,
      opacity: 0.55 - i * 0.1,
    }),
  );
  ring.rotation.set(0.3 + i * 0.55, 0.4 + i * 0.65, i * 0.5);
  station.add(ring);
}
const satellites = [];
for (let i = 0; i < 7; i++) {
  const a = (i * Math.PI * 2) / 7;
  const group = new THREE.Group();
  group.position.set(
    Math.cos(a) * 4.5,
    Math.sin(a) * 2.9,
    Math.sin(a * 2) * 1.5,
  );
  const mesh = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.28 + (i % 3) * 0.08, 0),
    new THREE.MeshStandardMaterial({
      color: i % 2 ? 0x8b6cff : 0x64eaff,
      metalness: 0.6,
      roughness: 0.25,
      flatShading: true,
    }),
  );
  group.add(mesh);
  station.add(group);
  satellites.push(group);
}
const particlesCount = 650;
const positions = new Float32Array(particlesCount * 3);
for (let i = 0; i < particlesCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 55;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
}
const geo = new THREE.BufferGeometry();
geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
const stars = new THREE.Points(
  geo,
  new THREE.PointsMaterial({
    color: 0x8aa5f7,
    size: 0.035,
    transparent: true,
    opacity: 0.65,
  }),
);
scene.add(stars);
const mouse = { x: 0, y: 0 };
let scroll = 0;
addEventListener("pointermove", (e) => {
  mouse.x = e.clientX / innerWidth - 0.5;
  mouse.y = e.clientY / innerHeight - 0.5;
  document.querySelector("#coords").textContent =
    `X: ${Math.round(e.clientX)} / Y: ${Math.round(e.clientY)}`;
});
addEventListener(
  "scroll",
  () => {
    scroll =
      scrollY /
      Math.max(1, document.documentElement.scrollHeight - innerHeight);
  },
  { passive: true },
);
function resize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
}
addEventListener("resize", resize);
// Respecte la préférence système pour limiter les animations.
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  station.rotation.y +=
    (mouse.x * 0.16 + scroll * 2.2 - station.rotation.y) * 0.035;
  station.rotation.x +=
    (-mouse.y * 0.14 + scroll * 0.5 - station.rotation.x) * 0.035;
  station.position.y = Math.sin(t * 0.5) * 0.13;
  station.position.x = innerWidth < 800 ? 2.2 : 3.8;
  station.scale.setScalar(innerWidth < 800 ? 0.62 : 1);
  if (!reduced) {
    inner.rotation.y = t * 0.22;
    station.children
      .slice(2, 5)
      .forEach((r, i) => (r.rotation.z += 0.001 * (i % 2 ? 1 : -1)));
    satellites.forEach((s, i) => (s.rotation.y = t * (0.1 + i * 0.02)));
    stars.rotation.y = t * 0.002;
  }
  camera.position.z = 15 + scroll * 4;
  renderer.render(scene, camera);
}
animate();
// Met à jour le lien actif du menu selon la section visible.
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document
          .querySelectorAll("[data-nav]")
          .forEach((a) =>
            a.classList.toggle("active", a.dataset.nav === entry.target.id),
          );
      }
    }),
  { rootMargin: "-35% 0px -55% 0px" },
);
document.querySelectorAll("main > section").forEach((s) => observer.observe(s));

import { initExplorer } from "./explore.js";
initExplorer();
