import * as THREE from "three";
import { projects, skills, timeline } from "./data.js";
import "./explore.css";

export function initExplorer() {

  // Les identifiants doivent correspondre à ceux des projets dans data.js.
  const rncpBlocks = [
    {
      id: "BC01",
      title: "Cadrer un projet et conceptualiser une solution web",
      competencies: [
        [
          "01",
          "Rédiger un cahier des charges",
          ["my-restaurant", "my-driving-school"],
        ],
        [
          "02",
          "Rédiger des spécifications techniques",
          ["my-restaurant", "guesswhat"],
        ],
        [
          "03",
          "Mettre en place un environnement collaboratif",
          ["guesswhat", "my-bot"],
        ],
        [
          "04",
          "Réaliser des maquettes accessibles et ergonomiques",
          ["my-restaurant", "my-driving-school"],
        ],
        [
          "05",
          "Modéliser l'architecture et les données",
          ["my-restaurant", "my-driving-school", "medieval-rpg"],
        ],
        [
          "06",
          "Présenter et justifier les choix techniques",
          ["my-restaurant", "guesswhat"],
        ],
      ],
    },
    {
      id: "BC02",
      title: "Développer une solution web",
      competencies: [
        ["01", "Développer un prototype", ["space-defender", "guesswhat"]],
        [
          "02",
          "Coder selon les besoins, normes et réglementations",
          ["my-restaurant", "my-driving-school"],
        ],
        [
          "03",
          "Intégrer les éléments à partir des maquettes",
          ["my-restaurant", "my-bot"],
        ],
        [
          "04",
          "Implémenter le front-end",
          ["space-defender", "guesswhat", "my-bot"],
        ],
        [
          "05",
          "Implémenter le back-end et la persistance des données",
          ["my-restaurant", "my-driving-school", "medieval-rpg"],
        ],
        [
          "06",
          "Sécuriser l'accès par authentification",
          ["my-restaurant", "my-driving-school"],
        ],
        [
          "07",
          "Concevoir et exécuter des tests",
          ["space-defender", "guesswhat"],
        ],
        [
          "08",
          "Déployer une application web",
          ["space-defender", "guesswhat", "my-restaurant"],
        ],
      ],
    },
    {
      id: "BC03",
      title:
        "Déployer un système d'assurance qualité tout au long du cycle de vie d'une solution web",
      competencies: [
        [
          "01",
          "Rédiger une documentation technique",
          ["my-restaurant", "my-driving-school"],
        ],
        [
          "02",
          "Rédiger une documentation utilisateur",
          ["my-bot", "guesswhat"],
        ],
        [
          "03",
          "Recueillir les retours utilisateurs après lancement",
          ["guesswhat", "my-restaurant"],
        ],
        [
          "04",
          "Analyser les retours et les performances",
          ["my-restaurant", "my-driving-school"],
        ],
        [
          "05",
          "Évaluer l'ergonomie, l'accessibilité et le référencement",
          ["my-restaurant", "my-bot"],
        ],
        [
          "06",
          "Argumenter des propositions d'amélioration",
          ["my-restaurant", "guesswhat"],
        ],
      ],
    },
  ];

  const learning = document.createElement("section");
  learning.id = "learning-evidence";
  learning.className = "nexus-rncp section content-section";

  const rncpHead = document.createElement("div");
  rncpHead.className = "section-head";
  rncpHead.innerHTML = `
    <span class="index">03 — CERTIFICATION RNCP38436</span>
    <h2>COMPÉTENCES<span class="accent">_</span></h2>
    <p>20 compétences réparties en 3 blocs.
    Mes réalisations et ma progression.</p>
  `;

  const summary = document.createElement("div");
  summary.className = "rncp-summary";
  summary.innerHTML = `
    <span>WEB@CADÉMIE BY EPITECH</span>
    <strong>RNCP38436 / NIVEAU 5</strong>
    <span>3 BLOCS · 20 COMPÉTENCES</span>
  `;

  const blocksContainer = document.createElement("div");
  blocksContainer.className = "rncp-blocks";

  rncpBlocks.forEach((block, blockIndex) => {
    const panel = document.createElement("details");
    panel.className = "rncp-block";
    // Seul le premier bloc est ouvert au chargement.
    panel.open = blockIndex === 0;

    const panelHeader = document.createElement("summary");
    panelHeader.className = "rncp-block-header";

    const blockNumber = document.createElement("span");
    blockNumber.className = "rncp-block-number";
    blockNumber.textContent = block.id;

    const blockTitle = document.createElement("strong");
    blockTitle.textContent = block.title;

    const count = document.createElement("span");
    count.className = "rncp-block-count";
    count.textContent = `${block.competencies.length} COMPÉTENCES`;

    const arrow = document.createElement("span");
    arrow.className = "rncp-arrow";
    arrow.textContent = "⌄";

    panelHeader.append(blockNumber, blockTitle, count, arrow);

    const list = document.createElement("div");
    list.className = "rncp-competencies";

    block.competencies.forEach(([number, label, evidence]) => {
      const card = document.createElement("article");
      card.className = "rncp-competency";

      const code = document.createElement("span");
      code.className = "rncp-competency-code";
      code.textContent = `${block.id} / C${number}`;

      const title = document.createElement("h3");
      title.textContent = label;

      const proof = document.createElement("div");
      proof.className = "rncp-proofs";

      evidence.forEach((id) => {
        // Un identifiant absent dans data.js ne produit pas de lien.
        const project = projects.find((p) => p.id === id);

        if (!project) return;

        const link = document.createElement("a");
        link.href = "#projects";
        link.textContent = project.name;

        proof.append(link);
      });

      card.append(code, title);

      if (proof.children.length > 0) {
        card.append(proof);
      }

      list.append(card);
    });

    panel.append(panelHeader, list);
    blocksContainer.append(panel);
  });

  const source = document.createElement("a");
  source.className = "rncp-source";
  source.href = "https://www.francecompetences.fr/recherche/rncp/38436/";
  source.target = "_blank";
  source.rel = "noopener noreferrer";
  source.textContent = "CONSULTER LE RÉFÉRENTIEL OFFICIEL ↗";

  learning.append(rncpHead, summary, blocksContainer, source);

  const journeySection = document.querySelector("#journey");

  if (journeySection) {
    journeySection.before(learning);
  } else {
    document.querySelector("main")?.append(learning);
  }

  const button = document.createElement("button");
  button.className = "explore-launch";
  button.textContent = "✦ EXPLORER LA STATION 3D";
  document.body.append(button);
  // La station reste masquée tant que le visiteur ne lance pas l’exploration.
  const shell = document.createElement("div");
  shell.className = "explore-shell";
  shell.hidden = true;
  shell.innerHTML = `<div class="explore-view"></div><div class="explore-hud"><div><strong>NEXUS / STATION ORBITALE</strong><small>WASD / ZQSD ou flèches pour avancer · Souris pour orienter · E pour interagir</small></div><button class="explore-exit" aria-label="Quitter l'exploration">✕ QUITTER</button></div><div class="explore-prompt" hidden></div><aside class="explore-project-panel" hidden></aside><div class="explore-mobile"><button data-move="left">◀</button><button data-move="up">▲</button><button data-move="down">▼</button><button data-move="right">▶</button><button data-move="action">E</button></div><button class="explore-map-toggle" aria-expanded="false">☷ CARTE</button><nav class="explore-map" hidden aria-label="Navigation rapide dans la station"></nav><div class="explore-toast">Approche-toi d'un portail lumineux pour découvrir une section.</div>`;
  document.body.append(shell);
  const view = shell.querySelector(".explore-view"),
    prompt = shell.querySelector(".explore-prompt"),
    toast = shell.querySelector(".explore-toast"),
    projectPanel = shell.querySelector(".explore-project-panel"),
    map = shell.querySelector(".explore-map"),
    mapToggle = shell.querySelector(".explore-map-toggle");
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x060b1c);
  scene.fog = new THREE.Fog(0x060b1c, 18, 62);
  const camera = new THREE.PerspectiveCamera(65, 1, 0.1, 120);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
  });
  const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;

  // On limite la résolution sur mobile pour éviter de trop solliciter le GPU.
  renderer.setPixelRatio(
    Math.min(window.devicePixelRatio || 1, isMobileDevice ? 1 : 1.5),
  );
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  view.append(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0x94caff, 0x101027, 2.2));
  const sun = new THREE.DirectionalLight(0xffffff, 2.5);
  sun.position.set(8, 14, 7);
  scene.add(sun);
  const glow = new THREE.PointLight(0x3ceaff, 85, 28);
  glow.position.set(0, 7, 0);
  scene.add(glow);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x182747,
    metalness: 0.55,
    roughness: 0.45,
  });
  const edgeMat = new THREE.MeshBasicMaterial({ color: 0x55eaff });
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(8, 8.7, 0.85, 8),
    floorMat,
  );
  base.position.y = -0.55;
  scene.add(base);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(7.8, 0.11, 8, 100),
    edgeMat,
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = -0.05;
  scene.add(ring);
  const grid = new THREE.GridHelper(15, 16, 0x37cce9, 0x284269);
  grid.position.y = -0.1;
  scene.add(grid);
  const tower = new THREE.Group();
  tower.position.set(0, 0, -1.5);
  scene.add(tower);
  const column = new THREE.Mesh(
    new THREE.CylinderGeometry(0.7, 1.25, 3.8, 6),
    new THREE.MeshStandardMaterial({
      color: 0x263a70,
      metalness: 0.7,
      roughness: 0.3,
    }),
  );
  column.position.y = 1.85;
  tower.add(column);
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.9, 1),
    new THREE.MeshStandardMaterial({
      color: 0x68eaff,
      emissive: 0x1e92b8,
      emissiveIntensity: 1.7,
      metalness: 0.25,
      roughness: 0.2,
      flatShading: true,
    }),
  );
  core.position.y = 4.4;
  tower.add(core);
  for (let i = 0; i < 3; i++) {
    const t = new THREE.Mesh(
      new THREE.TorusGeometry(1.4 + i * 0.35, 0.035, 6, 70),
      new THREE.MeshBasicMaterial({ color: i === 1 ? 0xb885ff : 0x52eaff }),
    );
    t.position.y = 4.4;
    t.rotation.x = i * 0.6 + 0.3;
    tower.add(t);
  }
  const starsGeo = new THREE.BufferGeometry(),
    pos = new Float32Array(1200 * 3);
  for (let i = 0; i < pos.length; i += 3) {
    pos[i] = (Math.random() - 0.5) * 120;
    pos[i + 1] = Math.random() * 55 + 4;
    pos[i + 2] = (Math.random() - 0.5) * 120;
  }
  starsGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  scene.add(
    new THREE.Points(
      starsGeo,
      new THREE.PointsMaterial({ color: 0xa5c8ff, size: 0.09 }),
    ),
  );
  const portalDefs = [
    { name: "PROJETS", angle: 0, color: 0x55eaff, anchor: "#projects" },
    {
      name: "COMPÉTENCES",
      angle: (Math.PI * 2) / 5,
      color: 0x9a7aff,
      anchor: "#skills",
    },
    {
      name: "PARCOURS",
      angle: (Math.PI * 4) / 5,
      color: 0xffad70,
      anchor: "#journey",
    },
    {
      name: "CONTACT",
      angle: (Math.PI * 6) / 5,
      color: 0x69ffbf,
      anchor: "#contact",
    },
    {
      name: "ACCUEIL",
      angle: (Math.PI * 8) / 5,
      color: 0xff79d0,
      anchor: "#home",
    },
  ];
  const portals = [];
  function label(text, color) {
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 128;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#081326";
    ctx.fillRect(0, 0, 512, 128);
    ctx.strokeStyle = "#" + color.toString(16).padStart(6, "0");
    ctx.lineWidth = 7;
    ctx.strokeRect(4, 4, 504, 120);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 43px Arial";
    ctx.textAlign = "center";
    ctx.fillText(text, 256, 80);
    const tex = new THREE.CanvasTexture(c);
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(2.7, 0.68),
      new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        side: THREE.DoubleSide,
      }),
    );
    return m;
  }
  portalDefs.forEach((d, i) => {
    const g = new THREE.Group();
    g.position.set(Math.sin(d.angle) * 5.9, 0, Math.cos(d.angle) * 5.9);
    g.rotation.y = d.angle + Math.PI;
    const frame = new THREE.Mesh(
      new THREE.TorusGeometry(1.18, 0.13, 8, 8),
      new THREE.MeshStandardMaterial({
        color: d.color,
        emissive: d.color,
        emissiveIntensity: 1.5,
        metalness: 0.35,
        roughness: 0.3,
      }),
    );
    frame.position.y = 1.65;
    g.add(frame);
    const disk = new THREE.Mesh(
      new THREE.CircleGeometry(1.05, 8),
      new THREE.MeshBasicMaterial({
        color: d.color,
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    disk.position.y = 1.65;
    g.add(disk);
    const name = label(d.name, d.color);
    name.position.y = 3.3;
    g.add(name);
    const pad = new THREE.Mesh(
      new THREE.CylinderGeometry(1.45, 1.5, 0.25, 8),
      floorMat,
    );
    pad.position.y = 0.05;
    g.add(pad);
    scene.add(g);
    portals.push({ ...d, group: g, frame });
  });

  const gallery = new THREE.Group();
  gallery.position.set(0, 0, -16);
  scene.add(gallery);
  const bridgeMat = new THREE.MeshStandardMaterial({
    color: 0x22395c,
    metalness: 0.7,
    roughness: 0.3,
  });
  const bridge = new THREE.Mesh(new THREE.BoxGeometry(3.1, 0.3, 10), bridgeMat);
  bridge.position.set(0, -0.15, -9.3);
  scene.add(bridge);
  for (const x of [-1.45, 1.45]) {
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.12, 10),
      new THREE.MeshBasicMaterial({ color: 0x45dfff }),
    );
    rail.position.set(x, 0.1, -9.3);
    scene.add(rail);
    for (let z = -13; z < -5; z += 1.7) {
      const post = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.7, 0.08),
        bridgeMat,
      );
      post.position.set(x, 0.38, z);
      scene.add(post);
    }
  }
  const galleryBase = new THREE.Mesh(
    new THREE.CylinderGeometry(10.4, 10.9, 0.8, 12),
    floorMat,
  );
  galleryBase.position.y = -0.55;
  gallery.add(galleryBase);
  const galleryRing = new THREE.Mesh(
    new THREE.TorusGeometry(10.3, 0.1, 8, 96),
    edgeMat,
  );
  galleryRing.rotation.x = Math.PI / 2;
  galleryRing.position.y = -0.06;
  gallery.add(galleryRing);
  const galleryGrid = new THREE.GridHelper(19, 20, 0x37cce9, 0x24375a);
  galleryGrid.position.y = -0.1;
  gallery.add(galleryGrid);
  const galleryTitle = label("GALERIE DES PROJETS", 0x55eaff);
  galleryTitle.scale.set(2.3, 1.3, 1);
  galleryTitle.position.set(0, 5, -2);
  gallery.add(galleryTitle);
  const terminals = [];
  const screenMat = new THREE.MeshStandardMaterial({
    color: 0x112e4d,
    emissive: 0x135b79,
    emissiveIntensity: 0.6,
    metalness: 0.5,
    roughness: 0.28,
  });
  projects.forEach((project, i) => {
    const angle = (i / projects.length) * Math.PI * 2;
    const x = Math.sin(angle) * 6.4,
      z = Math.cos(angle) * 6.4;
    const terminal = new THREE.Group();
    terminal.position.set(x, 0, z);
    terminal.rotation.y = angle + Math.PI;
    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(1.1, 1.25, 0.5, 6),
      bridgeMat,
    );
    pedestal.position.y = 0.22;
    terminal.add(pedestal);
    const pole = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 1.55, 0.18),
      bridgeMat,
    );
    pole.position.y = 1.1;
    terminal.add(pole);
    const display = new THREE.Mesh(
      new THREE.BoxGeometry(2.9, 1.65, 0.12),
      screenMat,
    );
    display.position.y = 2.35;
    terminal.add(display);
    const artwork = new THREE.Mesh(
      new THREE.PlaneGeometry(1.28, 1.28),
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
      }),
    );
    artwork.position.set(0, 2.55, 0.083);
    terminal.add(artwork);
    // En cas d’image manquante, on masque seulement l’illustration.
    if (project.image) {
      new THREE.TextureLoader().load(
        project.image,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace;
          artwork.material.map = texture;
          artwork.material.needsUpdate = true;
        },
        undefined,
        () => {
          artwork.visible = false;
        },
      );
    }
    const title = label(project.name.toUpperCase(), 0x55eaff);
    title.position.set(0, 1.72, 0.095);
    title.scale.set(1.03, 0.58, 1);
    terminal.add(title);
    const light = new THREE.PointLight(0x44dfff, 6, 4);
    light.position.y = 2.2;
    terminal.add(light);
    gallery.add(terminal);
    terminals.push({ project, x, z: z - 16, terminal, display });
  });
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const pod = new THREE.Group();
    pod.position.set(Math.sin(a) * 9, 0, Math.cos(a) * 9 - 16);
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.13, 0.3, 2.8, 6),
      bridgeMat,
    );
    pillar.position.y = 1.4;
    pod.add(pillar);
    const cap = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.5),
      new THREE.MeshStandardMaterial({
        color: i % 2 ? 0x8f74ff : 0x48e7ff,
        emissive: i % 2 ? 0x4b2b88 : 0x117f91,
        emissiveIntensity: 0.9,
      }),
    );
    cap.position.y = 3.2;
    pod.add(cap);
    scene.add(pod);
  }

  const infoTerminals = [];
  function makeDistrict(name, centerX, centerZ, color, items, type) {
    const district = new THREE.Group();
    district.position.set(centerX, 0, centerZ);
    scene.add(district);
    const deck = new THREE.Mesh(
      new THREE.CylinderGeometry(8.5, 8.9, 0.8, 12),
      floorMat,
    );
    deck.position.y = -0.55;
    district.add(deck);
    const rim = new THREE.Mesh(
      new THREE.TorusGeometry(8.45, 0.1, 8, 100),
      new THREE.MeshBasicMaterial({ color }),
    );
    rim.rotation.x = Math.PI / 2;
    rim.position.y = -0.08;
    district.add(rim);
    const grid = new THREE.GridHelper(16, 14, color, 0x263655);
    grid.position.y = -0.1;
    district.add(grid);
    const sign = label(name, color);
    sign.scale.set(2, 1.35, 1);
    sign.position.set(0, 4.5, -2);
    district.add(sign);
    items.forEach((item, i) => {
      const angle = (i / items.length) * Math.PI * 2;
      const x = Math.sin(angle) * 5.2,
        z = Math.cos(angle) * 5.2;
      const terminal = new THREE.Group();
      terminal.position.set(x, 0, z);
      terminal.rotation.y = angle + Math.PI;
      const stand = new THREE.Mesh(
        new THREE.CylinderGeometry(0.9, 1.1, 0.5, 6),
        bridgeMat,
      );
      stand.position.y = 0.22;
      terminal.add(stand);
      const screen = new THREE.Mesh(
        new THREE.BoxGeometry(2.5, 1.55, 0.14),
        new THREE.MeshStandardMaterial({
          color: 0x132c50,
          emissive: color,
          emissiveIntensity: 0.18,
          metalness: 0.6,
        }),
      );
      screen.position.y = 1.75;
      terminal.add(screen);
      const nameplate = label(item.name || item.title, color);
      nameplate.position.set(0, 1.8, 0.09);
      nameplate.scale.set(0.8, 1.35, 1);
      terminal.add(nameplate);
      district.add(terminal);
      infoTerminals.push({ item, type, x: centerX + x, z: centerZ + z });
    });
  }
  function makeWalkway(x, z, w, d, color) {
    const slab = new THREE.Mesh(new THREE.BoxGeometry(w, 0.3, d), bridgeMat);
    slab.position.set(x, -0.15, z);
    scene.add(slab);
    const edge = new THREE.MeshBasicMaterial({ color });
    for (const side of [-1, 1]) {
      const strip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, d), edge);
      strip.position.set(x + side * (w / 2 - 0.08), 0.04, z);
      scene.add(strip);
    }
  }
  makeWalkway(-13.1, -16, 9, 2.7, 0x9c80ff);
  makeWalkway(13.1, -16, 9, 2.7, 0xffb37c);
  makeDistrict(
    "LABORATOIRE DES COMPÉTENCES",
    -25,
    -16,
    0x9c80ff,
    skills.map((x) => ({ ...x, title: x.name })),
    "skill",
  );
  makeDistrict(
    "ARCHIVES DU PARCOURS",
    25,
    -16,
    0xffb37c,
    timeline.map((x) => ({ ...x, name: x.date + " · " + x.title })),
    "timeline",
  );
  const bot = new THREE.Group();
  scene.add(bot);
  const robotLegs = [];
  const robotArms = [];
  const cameraTarget = new THREE.Vector3();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.75, 0.45),
    new THREE.MeshStandardMaterial({
      color: 0xe8f2ff,
      metalness: 0.3,
      roughness: 0.35,
    }),
  );
  body.position.y = 0.85;
  bot.add(body);
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(0.72, 0.52, 0.56),
    new THREE.MeshStandardMaterial({
      color: 0x304978,
      metalness: 0.4,
      roughness: 0.25,
    }),
  );
  head.position.y = 1.52;
  bot.add(head);
  const face = new THREE.Mesh(
    new THREE.BoxGeometry(0.48, 0.13, 0.03),
    new THREE.MeshBasicMaterial({ color: 0x55eaff }),
  );
  face.position.set(0, 1.55, 0.296);
  bot.add(face);
  for (const side of [-1, 1]) {
    const arm = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.58, 0.23),
      new THREE.MeshStandardMaterial({ color: 0x84a9d8 }),
    );
    arm.position.set(side * 0.47, 0.85, 0);
    bot.add(arm);
    robotArms.push(arm);
    const leg = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.43, 0.25),
      new THREE.MeshStandardMaterial({ color: 0x94b2d6 }),
    );
    leg.position.set(side * 0.18, 0.27, 0);
    bot.add(leg);
    robotLegs.push(leg);
  }
  bot.position.set(0, 0, 3);
  let active = false,
    nearest = null,
    nearProject = null,
    nearInfo = null,
    raf = 0;
  const keys = new Set();
  let yaw = 0;
  const clock = new THREE.Clock();
  function resize() {
    const w = view.clientWidth,
      h = view.clientHeight;
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  const destinations = [
    { name: "STATION CENTRALE", x: 0, z: 3 },
    { name: "GALERIE DES PROJETS", x: 0, z: -16 },
    { name: "COMPÉTENCES", x: -25, z: -16 },
    { name: "PARCOURS", x: 25, z: -16 },
  ];
  destinations.forEach((d) => {
    const b = document.createElement("button");
    b.textContent = d.name;
    b.addEventListener("click", () => {
      bot.position.set(d.x, 0, d.z);
      closeProjectPanel();
      map.hidden = true;
      mapToggle.setAttribute("aria-expanded", "false");
    });
    map.append(b);
  });
  mapToggle.addEventListener("click", () => {
    map.hidden = !map.hidden;
    mapToggle.setAttribute("aria-expanded", String(!map.hidden));
  });
  function open() {
    portalTransitioning = false;
    portalWasInside = false;
    portalCooldownUntil = performance.now() + 1000;
    portalOverlay.classList.remove("active");
    bot.position.set(0, 0, 3);
    yaw = 0;
    keys.clear();
    shell.hidden = false;
    document.body.style.overflow = "hidden";
    active = true;
    resize();
    clock.getDelta();
    startCinematic();
    loop();
  }
  function close() {
    closeProjectPanel();
    active = false;
    cancelAnimationFrame(raf);
    shell.hidden = true;
    document.body.style.overflow = "";
    keys.clear();
    portalTransitioning = false;
    portalOverlay.classList.remove("active");
  }
  button.addEventListener("click", open);
  shell.querySelector(".explore-exit").addEventListener("click", close);

  function interact() {
    if (!projectPanel.hidden) {
      closeProjectPanel();
      return;
    }

    if (nearInfo) {
      toggleTarget(nearInfo, "info");
      return;
    }

    if (nearProject) {
      toggleTarget(nearProject, "project");
    }
  }

  let openedTarget = null;

  function closeProjectPanel() {
    projectPanel.hidden = true;
    openedTarget = null;
  }

  // Une deuxième interaction avec le même terminal referme sa fiche.
  function toggleTarget(target, type) {
    if (!target) return;

    if (
      openedTarget &&
      openedTarget.target === target &&
      openedTarget.type === type
    ) {
      closeProjectPanel();
      return;
    }

    openedTarget = { target, type };

    if (type === "info") {
      showInfo(target);
    } else {
      showProject(target.project);
    }
  }

  function showInfo(target) {
    const { item, type } = target;
    projectPanel.hidden = false;
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "FERMER ✕";
    closeBtn.onclick = closeProjectPanel;
    const title = document.createElement("h2");
    title.textContent =
      type === "skill" ? item.name : item.date + " · " + item.title;
    const description = document.createElement("p");
    description.textContent = type === "skill" ? item.description : item.text;
    const extra = document.createElement("p");
    extra.textContent =
      type === "skill"
        ? "Projets associés : " +
          (item.evidence || [])
            .map((id) => projects.find((p) => p.id === id)?.name || id)
            .join(", ")
        : "Mon parcours de formation et mes expériences.";
    projectPanel.replaceChildren(closeBtn, title, description, extra);
  }
  function showProject(project) {
    projectPanel.hidden = false;
    const title = document.createElement("h2");
    title.textContent = project.name;
    const category = document.createElement("p");
    category.textContent = project.category + " · " + project.year;
    const description = document.createElement("p");
    description.textContent = project.description;
    const stack = document.createElement("p");
    stack.textContent = "TECHNOLOGIES : " + project.stack.join(" · ");
    const evidence = document.createElement("p");
    evidence.textContent =
      "COMPÉTENCES : " + (project.skills || []).join(" · ");
    const status = document.createElement("p");
    status.textContent = project.url
      ? "Démo disponible"
      : "Déploiement à renseigner";
    status.className = "explore-project-status";
    const link = document.createElement("a");
    link.className = "nexus-demo-btn";

    link.textContent = project.url
      ? "OUVRIR LE SITE DÉPLOYÉ ↗"
      : "LIEN DE DÉPLOIEMENT À AJOUTER";
    link.href = project.url || "#";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    if (!project.url) {
      link.className = "disabled";
      link.removeAttribute("href");
    }
    const repoLink = document.createElement("a");
    repoLink.className = "nexus-github-btn";

    repoLink.textContent = "VOIR LE CODE SUR GITHUB ↗";
    repoLink.href = project.repo;
    repoLink.target = "_blank";
    repoLink.rel = "noopener noreferrer";
    const exit = document.createElement("button");
    exit.textContent = "FERMER ✕";
    exit.addEventListener("click", closeProjectPanel);
    projectPanel.replaceChildren(
      exit,
      title,
      category,
      description,
      stack,
      evidence,
      status,
      link,
      repoLink,
    );
  }
  window.addEventListener("keydown", (e) => {
    if (!active) return;
    const k = e.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k))
      e.preventDefault();
    keys.add(k);
    if (k === "e" || k === "enter") interact();
    if (k === "escape") close();
  });
  window.addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
  shell.querySelectorAll("[data-move]").forEach((b) => {
    const k = b.dataset.move;
    b.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      if (k === "action") interact();
      else keys.add(k);
    });

    b.style.touchAction = "none";

    ["pointerup", "pointercancel", "pointerleave"].forEach((ev) => {
      b.addEventListener(ev, () => keys.delete(k));
    });

    b.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
  let drag = false,
    lastX = 0;
  shell.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button")) return;
    drag = true;
    lastX = e.clientX;
  });
  window.addEventListener("pointerup", () => (drag = false));
  shell.addEventListener("pointermove", (e) => {
    if (!drag) return;
    yaw -= (e.clientX - lastX) * 0.006;
    lastX = e.clientX;
  });


  const ROBOT_RADIUS = 0.42;


  const obstacles = [
    { x: 0, z: -1.5, radius: 1.45 },

    ...terminals.map((term) => ({
      x: term.x,
      z: term.z,
      radius: 1.45,
    })),

    ...infoTerminals.map((term) => ({
      x: term.x,
      z: term.z,
      radius: 1.25,
    })),

    ...Array.from({ length: 9 }, (_, i) => {
      const angle = (i / 9) * Math.PI * 2;

      return {
        x: Math.sin(angle) * 9,
        z: Math.cos(angle) * 9 - 16,
        radius: 0.35,
      };
    }),
  ];

  // Empêche le robot de sortir des plateformes et des passerelles.
  function isOnStation(x, z) {
    const circle = (cx, cz, radius) => Math.hypot(x - cx, z - cz) <= radius;

    const rectangle = (minX, maxX, minZ, maxZ) =>
      x >= minX && x <= maxX && z >= minZ && z <= maxZ;

    return (
      circle(0, 0, 6.8) ||
      rectangle(-1.3, 1.3, -14.3, -5.5) ||
      circle(0, -16, 9.45) ||
      rectangle(-17.6, -7.6, -17.25, -14.75) ||
      rectangle(7.6, 17.6, -17.25, -14.75) ||
      circle(-25, -16, 7.65) ||
      circle(25, -16, 7.65)
    );
  }

  function isPositionFree(x, z) {
    if (!isOnStation(x, z)) return false;

    for (const obstacle of obstacles) {
      const distance = Math.hypot(x - obstacle.x, z - obstacle.z);

      if (distance < obstacle.radius + ROBOT_RADIUS) {
        return false;
      }
    }

    return true;
  }

  // Si le déplacement diagonal bloque, on essaie chaque axe séparément.
  function moveRobot(dx, dz, dt) {
    const length = Math.hypot(dx, dz);
    if (length === 0) return false;

    const speed = (3.6 * dt) / Math.max(1, length);
    const stepX = dx * speed;
    const stepZ = dz * speed;

    const x = bot.position.x;
    const z = bot.position.z;

    if (isPositionFree(x + stepX, z + stepZ)) {
      bot.position.x += stepX;
      bot.position.z += stepZ;
      return true;
    }

    let moved = false;

    if (isPositionFree(x + stepX, z)) {
      bot.position.x += stepX;
      moved = true;
    }

    if (isPositionFree(bot.position.x, z + stepZ)) {
      bot.position.z += stepZ;
      moved = true;
    }

    return moved;
  }

  const particleCount = 220;
  const particlePositions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const index = i * 3;

    particlePositions[index] = (Math.random() - 0.5) * 80;
    particlePositions[index + 1] = Math.random() * 11 + 0.5;
    particlePositions[index + 2] = (Math.random() - 0.5) * 48 - 8;
  }

  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlePositions, 3),
  );

  const particleMaterial = new THREE.PointsMaterial({
    color: 0x8defff,
    size: 0.065,
    transparent: true,
    opacity: 0.65,
    depthWrite: false,
  });

  const spaceParticles = new THREE.Points(particleGeometry, particleMaterial);

  scene.add(spaceParticles);

  const robotLight = new THREE.PointLight(0x54eaff, 2.5, 5);
  robotLight.position.set(0, 1.5, 0);
  bot.add(robotLight);

  const robotHalo = new THREE.Mesh(
    new THREE.RingGeometry(0.53, 0.65, 40),
    new THREE.MeshBasicMaterial({
      color: 0x50dfff,
      transparent: true,
      opacity: 0.24,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );

  robotHalo.rotation.x = -Math.PI / 2;
  robotHalo.position.y = 0.035;
  bot.add(robotHalo);

  let cinematicStart = 0;
  let cinematicActive = false;

  function startCinematic() {
    cinematicStart = clock.elapsedTime;
    cinematicActive = true;

    camera.position.set(bot.position.x + 11, 9, bot.position.z + 12);

    cameraTarget.set(bot.position.x, 1.25, bot.position.z);
  }

  function updateVisualEffects(t, dt) {
    spaceParticles.rotation.y += dt * 0.004;

    particleMaterial.opacity = 0.48 + Math.sin(t * 0.7) * 0.12;

    robotHalo.material.opacity = 0.18 + Math.sin(t * 3) * 0.08;

    robotHalo.rotation.z += dt * 0.28;

    glow.intensity = 70 + Math.sin(t * 1.4) * 13;

    terminals.forEach((term, i) => {
      term.display.material.emissiveIntensity =
        0.42 + Math.sin(t * 1.8 + i) * 0.12;
    });
  }

  const portalOverlay = document.createElement("div");
  portalOverlay.className = "nexus-portal-transition";
  portalOverlay.setAttribute("aria-hidden", "true");
  shell.append(portalOverlay);

  let portalTransitioning = false;
  let portalWasInside = false;
  let portalCooldownUntil = 0;

  // Le délai laisse le temps à la transition de s’afficher avant de quitter la 3D.
  function activatePortal(portal) {
    if (portalTransitioning) return;

    portalTransitioning = true;
    portalCooldownUntil = performance.now() + 1500;

    const color = "#" + portal.color.toString(16).padStart(6, "0");
    portalOverlay.style.setProperty("--portal-color", color);
    portalOverlay.classList.remove("active");

    void portalOverlay.offsetWidth;
    portalOverlay.classList.add("active");

    window.setTimeout(() => {
      if (!active) {
        portalTransitioning = false;
        portalOverlay.classList.remove("active");
        return;
      }

      closeProjectPanel();
      close();

      document.querySelector(portal.anchor)?.scrollIntoView({
        behavior: "smooth",
      });

      location.hash = portal.anchor;
      portalTransitioning = false;
      portalOverlay.classList.remove("active");
    }, 650);
  }

  function loop() {
    if (!active) return;
    raf = requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), 0.05),
      t = clock.elapsedTime;
    const forward =
        (keys.has("w") || keys.has("z") || keys.has("arrowup") || keys.has("up")
          ? 1
          : 0) -
        (keys.has("s") || keys.has("arrowdown") || keys.has("down") ? 1 : 0),
      side =
        (keys.has("d") || keys.has("arrowright") || keys.has("right") ? 1 : 0) -
        (keys.has("a") ||
        keys.has("q") ||
        keys.has("arrowleft") ||
        keys.has("left")
          ? 1
          : 0);

    let actuallyMoving = false;

    if (forward || side) {
      const dx = Math.sin(yaw) * forward + Math.cos(yaw) * side;

      const dz = -Math.cos(yaw) * forward + Math.sin(yaw) * side;

      actuallyMoving = moveRobot(dx, dz, dt);

      if (actuallyMoving) {
        bot.rotation.y = Math.atan2(dx, dz);
      }
    }

    updateVisualEffects(t, dt);

    const walking = actuallyMoving;
    robotLegs.forEach((leg, i) => {
      leg.rotation.x = walking
        ? Math.sin(t * 11 + i * Math.PI) * 0.55
        : THREE.MathUtils.lerp(leg.rotation.x, 0, 0.15);
    });
    robotArms.forEach((arm, i) => {
      arm.rotation.x = walking
        ? Math.sin(t * 11 + i * Math.PI) * -0.45
        : THREE.MathUtils.lerp(arm.rotation.x, 0, 0.15);
    });
    body.position.y = THREE.MathUtils.lerp(
      body.position.y,
      walking ? 0.85 + Math.abs(Math.sin(t * 11)) * 0.045 : 0.85,
      0.12,
    );
    core.rotation.y += dt * 0.5;
    core.position.y = 4.4 + Math.sin(t) * 0.16;
    portals.forEach((p, i) => {
      p.frame.rotation.z = t * 0.2 * (i % 2 ? 1 : -1);
      p.group.visible = bot.position.z > -9;
    });
    nearInfo = null;
    let id = 2.6;
    for (const term of infoTerminals) {
      const d = Math.hypot(bot.position.x - term.x, bot.position.z - term.z);
      if (d < id) {
        nearInfo = term;
        id = d;
      }
    }
    nearProject = null;
    let pd = 2.4;
    for (const terminal of terminals) {
      const d = Math.hypot(
        bot.position.x - terminal.x,
        bot.position.z - terminal.z,
      );
      if (d < pd) {
        nearProject = terminal;
        pd = d;
      }
    }
    nearest = null;
    let min = 2.2;
    for (const p of portals) {
      const dist = Math.hypot(
        bot.position.x - p.group.position.x,
        bot.position.z - p.group.position.z,
      );
      if (dist < min) {
        nearest = p;
        min = dist;
      }
    }

    if (openedTarget && !projectPanel.hidden) {
      let distance = Infinity;

      if (openedTarget.type === "project") {
        const term = openedTarget.target;

        distance = Math.hypot(bot.position.x - term.x, bot.position.z - term.z);
      } else {
        const term = openedTarget.target;

        distance = Math.hypot(bot.position.x - term.x, bot.position.z - term.z);
      }

      if (distance > 3.5) {
        closeProjectPanel();
      }
    }

    const enteredPortal = portals.find((portal) => {
      const distance = Math.hypot(
        bot.position.x - portal.group.position.x,
        bot.position.z - portal.group.position.z,
      );

      return distance < 0.9;
    });

    const isInsidePortal = Boolean(enteredPortal);

    if (
      enteredPortal &&
      !portalWasInside &&
      !portalTransitioning &&
      performance.now() > portalCooldownUntil
    ) {
      activatePortal(enteredPortal);
    }

    // Il faut ressortir du portail avant de pouvoir le déclencher à nouveau.
    portalWasInside = isInsidePortal;

    prompt.hidden = !projectPanel.hidden || !(nearProject || nearInfo);

    prompt.textContent = nearInfo
      ? `E · CONSULTER ${nearInfo.type === "skill" ? "COMPÉTENCE" : "PARCOURS"}`
      : nearProject
        ? `E · DÉCOUVRIR ${nearProject.project.name}`
        : "";

    const desired = new THREE.Vector3(
      bot.position.x + Math.sin(yaw) * 5.8,
      3.9,
      bot.position.z + Math.cos(yaw) * 5.8,
    );

    if (cinematicActive) {
      const elapsed = t - cinematicStart;
      const progress = Math.min(elapsed / 2.4, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      camera.position.lerp(desired, Math.min(1, 0.025 + eased * 0.085));

      if (progress >= 1) {
        cinematicActive = false;
      }
    } else {
      camera.position.lerp(desired, 1 - Math.exp(-5 * dt));
    }

    cameraTarget.lerp(
      new THREE.Vector3(bot.position.x, 1.25, bot.position.z),
      1 - Math.exp(-9 * dt),
    );
    camera.lookAt(cameraTarget);
    renderer.render(scene, camera);
  }
  window.addEventListener("resize", () => {
    if (active) resize();
  });
}
