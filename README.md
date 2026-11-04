# NEXUS V7

Portfolio de Safiya Jazouli. Il contient un site classique et une station 3D à explorer avec un robot.

## Lancer le projet

Il faut Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

Ouvre ensuite l'adresse affichée dans le terminal, souvent `http://localhost:5173`.

## Vérifier le projet

```bash
npm test
npm run build
```

Les tests vérifient les données du portfolio et les liens entre les projets et les compétences.

## Comment utiliser la station

- Sur ordinateur : ZQSD, WASD ou les flèches pour avancer. La souris permet d'orienter la vue.
- Sur téléphone : les flèches affichées en bas.
- La touche E sert à ouvrir et fermer les fiches des terminaux.
- Les portails s'activent quand le robot entre dedans.
- Le bouton CARTE permet de changer rapidement de plateforme.
- Le bouton QUITTER ramène au portfolio.

## Où modifier les informations

Tout le contenu principal est dans `src/data.js`.

- `profile` : nom, présentation, contact et liens.
- `projects` : réalisations, technologies, démonstrations et dépôts.
- `skills` : compétences et projets associés.
- `timeline` : formations et étapes du parcours.
- `reflections` : journal d'apprentissage.

Le portfolio présente six projets réalisés pendant ma formation. Chaque projet contient une description, les technologies utilisées et des liens vers sa démonstration et son dépôt.

# NEXUS

Portfolio de Safiya Jazouli. Il contient un site web et une station 3D interactive à explorer avec un robot.

## Voir le portfolio

[Lien vers mon portfolio](https://ton-site.netlify.app)

## Structure

- `src/main.js` : pages du portfolio et décor Three.js.
- `src/explore.js` : station 3D, robot, collisions et portails.
- `src/style.css` : styles du site.
- `src/explore.css` : styles de la station.
- `src/data.js` : contenu du portfolio.
- `tests/data.test.js` : tests automatiques.
- `public/favicon.svg` : icône du site.

La section RNCP38436 est générée dans src/explore.js. Elle présente les trois blocs de compétences et les projets associés.

## Formulaire de contact

Le formulaire utilise Formspree (`https://formspree.io/f/xjyyadza`). Les messages arrivent sur l'adresse configurée dans le tableau de bord Formspree. Pour tester, lancez `npm run dev`, envoyez un message depuis la section Contact, puis vérifiez la boîte de réception et le tableau de bord Formspree.
