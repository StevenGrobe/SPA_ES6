# Syntaxes ES6 et ES6+

En préambule, prenez un moment pour lire ce résumé de l'évolution du langage Javascript au cours des dernières décennies : https://javascript.developpez.com/actu/267495/L-historique-de-JavaScript-Brendan-Eich-l-a-ecrit-en-seulement-10-jours-et-c-est-ainsi-qu-il-a-change-le-monde-pour-toujours/

Ces exercices ont pour but de vous familiariser avec les principales nouveautés introduites par la version ES6 (ou ES2015) du langage.

## Ressources
Pour les réaliser, vous pourrez vous appuyer sur le site Mozilla Developer Network (MDN) qui documente et illustre les notions abordées ci-dessous.

* Let : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let
* Const : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/const
* Arrow functions : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es
* Object.keys : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/keys
* Object.values : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/values
* Destructuring : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Syntaxe_d%C3%A9composition
* Import / Export - Modules JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules
* Promises : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses

- [Les syntaxes ES6 expliquées - javascripttutorial](https://www.javascripttutorial.net/es6)
- [Toutes les nouvelles syntaxes JavaScript, ES.Next - javascripttutorial](https://www.javascripttutorial.net/es-next/)

Pour chaque exercice, placez-vous dans le dossier indiqué et ouvrez le fichier index.html avec Google Chrome.
  
## 1 — Variables `let` et `const`
➡️ Exercice à réaliser dans le dossier `1-variables`

### Ex 1.1
1. Remplacez toutes les occurences de `var` par `let`.
2. Constatez que le code s'exécute toujours sans erreur. Expliquez pourquoi.
3. Remplacez toutes les occurences de `let` par `const`.
4. Expliquez l'erreur.
5. Corrigez le code en conservant le maximum de valeurs constantes.

### Ex 1.2
1. Remplacez toutes les occurences de `let` par `const`.
2. Expliquez l'absence d'erreur.

### Ex 1.3
1. Remplacez toutes les occurences de `let` par `const`.
2. Expliquez l'erreur.
3. Corrigez le code en conservant le maximum de valeurs constantes

## 2 — Arrow functions
➡️ Exercice à réaliser dans le dossier `2-functions`

### Ex 2.1
Convertissez les 3 fonctions avec la notation "Arrow function" et vérifiez que le code fonctionne comme avant la conversion.

### Ex 2.2
1. **Avant toute modification : assurez-vous de comprendre le code déjà écrit ! Au besoin commentez-le.**
2. Convertissez la fonction `showThis` en notation "Arrow function".
3. Observez le résultat. Que pouvez-vous en conclure ?

### Ex 2.3
Complétez le code pour reproduire le comportement de la section 1 mais cette fois-ci grâce à l'objet `odile`. Vous utiliserez dès que possible des "Arrow functions".

## 3 — `Object.keys` & `Object.values`
➡️ Exercice à réaliser dans le dossier `3-objects`

### Ex 3.1
Afficher les caractéristiques du véhicule sours la forme `clé : valeur` (Ex: `id: 3221`).

### Ex 3.2
Le fichier `data.js` comporte un tableau des perturbations du réseau de transport Grenoblois. Pour chacune des perturbations, afficher le champ texte.

## 4 — Destructuring
➡️ Exercice à réaliser dans le dossier `4-destructuring`

### Ex 4.1
1. Prenez le temps de bien comprendre le code de la première partie, en le commentant.
2. Afficher le 3e élément du tableau ainsi que la propriété `age` de l'objet.

### Ex 4.2
Le fichier `data.js` comporte un tableau des perturbations du réseau de transport Grenoblois. Pour chacune des perturbations, récupérez leur texte, date de début et date de fin dans des variables puis affichez-les.

Après ce premier exercice, prenez connaissance du guide MDN sur le destructuring : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition

Vérifiez que le code réalisé dans cet exercice est bien optimal compte-tenu des exemples fournis par MDN. Optimisez-le si nécessaire.

## 5 — Import / Export
➡️ Exercice à réaliser dans le dossier `5-import`
__⚠ Cet exercice est à exécuter soit sous Firefox soit sous Chrome avec un serveur de développement (via WebStorm, ou WAMP, http-server...)__

**Rappel** - Avant de réaliser cet exercice, prenez connaissance du guide MDN sur le sujet : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Modules

### Ex 5.1
1. Lire et comprendre le code déjà écrit dans la première partie.
2. Importer et utiliser la fonction `showError`.
2. Importer et utiliser la fonction anonyme définie à la fin du fichier.

### Ex 5.2
Exporter les fonctions du fichier `math.js` pour pouvoir les utiliser dans le script principal (`script.js`).

## 6 — Promises
➡️ Exercice à réaliser dans le dossier `6-promises`

**Rappel** - Avant de réaliser cet exercice, prenez connaissance du guide MDN sur le sujet : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses

1. Observer et expliquer l'ordre des messages affichés dans la console.
2. Utiliser les `promises` afin que les messages s'enchaînent dans le bon ordre (1, 2, 3).
3. Remplacer l'appel à la fonction second() par secondWithError() afin de simuler une erreur lors de l'exécution.
4. Modifier le code afin de ne pas briser la chaîne des appels malgré tout.
5. Modifier le code afin d'afficher le message d'erreur entre les messages 1 et 3.
   
