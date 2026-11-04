import test from "node:test";
import assert from "node:assert/strict";
import { profile, projects, skills, timeline, reflections } from "../src/data.js";

test("le profil contient les informations nécessaires", () => {
  assert.ok(profile.name.trim());
  assert.ok(profile.role.trim());
  assert.match(profile.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});

test("chaque projet a un identifiant unique", () => {
  const ids = projects.map((project) => project.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const project of projects) {
    assert.ok(project.name.trim());
    assert.ok(project.description.trim());
    assert.ok(Array.isArray(project.stack));
    assert.ok(Array.isArray(project.skills));
  }
});

test("les preuves de compétences renvoient à des projets existants", () => {
  const ids = new Set(projects.map((project) => project.id));
  for (const skill of skills) {
    assert.ok(skill.level >= 0 && skill.level <= 100);
    for (const evidence of skill.evidence) {
      assert.ok(ids.has(evidence), `${evidence} est introuvable`);
    }
  }
});

test("les liens de projet sont vides ou utilisent HTTPS", () => {
  for (const project of projects) {
    for (const link of [project.url, project.repo]) {
      assert.ok(!link || new URL(link).protocol === "https:");
    }
  }
});

test("le parcours et le journal ne sont pas vides", () => {
  assert.ok(timeline.length > 0);
  assert.ok(reflections.length > 0);
  for (const entry of timeline) {
    assert.ok(entry.title.trim());
    assert.ok(entry.text.trim());
  }
});

test("les six projets disposent de liens vers le site et le code", () => {
  assert.equal(projects.length, 6);
  for (const project of projects) {
    assert.equal(new URL(project.url).protocol, "https:");
    assert.equal(new URL(project.repo).hostname, "github.com");
  }
});
