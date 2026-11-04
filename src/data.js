// Profil et réalisations.
export const profile = {
  name: "Safiya Jazouli",
  role: "Développeuse web full-stack et applications",
  tagline: "Je crée des sites web et applications.",
  bio: "En formation Intégrateur - développeur web à la Web@cadémie Epitech de Lyon. Je m'intéresse au développement front-end, back-end et aux applications.",
  location: "Métropole de Lyon, France",
  email: "safiya.jazouli@epitech.eu",
  github: "https://github.com/safiya-sketch",
  linkedin: "https://www.linkedin.com/in/safiya-jazouli-ab2343352/",
  photo: "/images/safiya.png",
  cv: "/CV-Safiya-Jazouli.pdf",
};

export const projects = [
  {
    id: "space-defender",
    name: "Space Defender",
    category: "Jeu arcade 2D",
    year: "2025",
    description:
      "Jeu d'arcade spatial développé avec Phaser : piloter un vaisseau, éviter les dangers et affronter des ennemis.",
    stack: ["JavaScript", "Phaser", "HTML5"],
    image: "/projects/space-defender.svg",
    url: "https://space-defender-aev.pages.dev",
    repo: "https://github.com/safiya-sketch/space-defender",
    skills: ["Développement front-end", "Logique de jeu"],
  },
  {
    id: "guesswhat",
    name: "GuessWhat",
    category: "Jeu multijoueur",
    year: "2025",
    description:
      "Jeu de dessin et de devinettes multijoueur, avec communication en temps réel entre les participants.",
    stack: ["Go", "WebSockets", "JavaScript"],
    image: "/projects/guesswhat.svg",
    url: "https://guesswhat-ee7z.onrender.com",
    repo: "https://github.com/safiya-sketch/guesswhat",
    skills: ["Développement back-end", "Temps réel"],
  },
  {
    id: "mybot",
    name: "My Bot",
    category: "Assistant d'adoption",
    year: "2025",
    description:
      "Assistant d'adoption d'animaux avec interface web, intelligence artificielle locale et analyse d'images.",
    stack: ["React", "TypeScript", "Express", "IA locale"],
    image: "/projects/mybot.svg",
    url: "https://my-bot-pghp.onrender.com",
    repo: "https://github.com/safiya-sketch/my-bot",
    skills: ["Développement full-stack", "Intégration IA"],
  },
  {
    id: "medieval-rpg",
    name: "Medieval RPG",
    category: "Jeu de rôle web",
    year: "2025",
    description:
      "Univers médiéval interactif : personnages, quêtes, combats, inventaire, boutique et marché entre joueurs.",
    stack: ["Ruby", "Rails", "HTML", "CSS"],
    image: "/projects/medieval-rpg.svg",
    url: "https://medieval-rpg.onrender.com",
    repo: "https://github.com/safiya-sketch/medieval-rpg",
    skills: ["Développement back-end", "Bases de données"],
  },
  {
    id: "my-restaurant",
    name: "My Restaurant",
    category: "Application de gestion",
    year: "2025",
    description:
      "Application de gestion de restaurant : menus, plats, administration et avis clients.",
    stack: ["Java", "Spring Boot", "MySQL"],
    image: "/projects/my-restaurant.svg",
    url: "https://my-restaurant-runh.onrender.com",
    repo: "https://github.com/safiya-sketch/my-restaurant",
    skills: ["Développement back-end", "Bases de données"],
  },
  {
    id: "driving-school",
    name: "My Driving School",
    category: "Plateforme auto-école",
    year: "2025",
    description:
      "Plateforme d'auto-école avec rôles utilisateurs, gestion des leçons, planning et entraînement au code.",
    stack: ["Python", "Django", "SQLite"],
    image: "/projects/driving-school.svg",
    url: "https://my-driving-school-qkya.onrender.com/",
    repo: "https://github.com/safiya-sketch/my-driving-school",
    skills: ["Développement full-stack", "Gestion des utilisateurs"],
  },
];

export const skills = [
  {
    name: "Développement front-end",
    level: 70,
    description:
      "Interfaces interactives, JavaScript, React, TypeScript et expériences de jeu.",
    evidence: ["space-defender", "mybot", "guesswhat"],
  },
  {
    name: "Développement back-end",
    level: 65,
    description:
      "API, logique métier et applications en Go, Rails, Django et Spring Boot.",
    evidence: ["guesswhat", "medieval-rpg", "my-restaurant", "driving-school"],
  },
  {
    name: "Bases de données",
    level: 60,
    description: "Modèles, relations, persistance et fonctionnalités CRUD.",
    evidence: ["medieval-rpg", "my-restaurant", "driving-school"],
  },
  {
    name: "Travail en projet",
    level: 65,
    description:
      "Conception, tests, intégration et amélioration progressive d'applications.",
    evidence: [
      "space-defender",
      "guesswhat",
      "mybot",
      "medieval-rpg",
      "my-restaurant",
      "driving-school",
    ],
  },
];

export const timeline = [
  {
    date: "2024 – 2026",
    title: "Web@cadémie Epitech, Lyon",
    text: "Formation Intégrateur - développeur web, du 18 novembre 2024 au 6 novembre 2026.",
  },
  {
    date: "Janv. – fév. 2024",
    title: "Apple Foundation Program, Simplon",
    text: "Découverte de Swift, SwiftUI, Xcode et du travail en équipe sur un projet d'application.",
  },
  {
    date: "Nov. – déc. 2023",
    title: "SAS Hackeuses, Simplon",
    text: "Découverte de WordPress, HTML, CSS, Figma et des méthodes de création d'un site web.",
  },
];

export const reflections = [
  {
    title: "Ce que j'ai appris",
    text: "Au fil de ma formation, je suis passée de la création d'interfaces web à la réalisation d'applications plus complètes. Mes projets m'ont permis de découvrir plusieurs environnements de développement, de travailler avec des bases de données et de comprendre comment relier une interface à une logique back-end.",
  },
  {
    title: "Ma progression",
    text: "Chaque projet m'a apporté de nouveaux défis. Avec Space Defender, j'ai travaillé sur les interactions et la logique d'un jeu. GuessWhat m'a permis d'aborder la communication en temps réel, tandis que My Driving School et My Restaurant m'ont amenée à développer des fonctionnalités de gestion plus complexes. J'ai également progressé dans la mise en ligne de mes applications et la résolution des problèmes rencontrés pendant leur développement.",
  },
  {
    title: "Mes prochains objectifs",
    text: "Je souhaite continuer à approfondir mes compétences en architecture d'applications, en tests et en sécurité. Mon objectif est de développer des projets toujours plus fiables, accessibles et faciles à maintenir.",
  },
];
