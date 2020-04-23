# Notes exos
Faire un peu la même chose avec les différentes façon de gérer import/export default/ export nommé - Tu peux renommer à la volée lors de l'import un export default - Tu peux renommer mais explicitement un import d'un export nommé

Et peut-être une introduction à async/await

Balayé tout ça assez rapidement et dire qu'aujourd'hui à partir du moment ou ils vont rencontrer du code/doc sur des problématiques SPA, ils vont rencontrer ça de partout

Async/await est de plus en plus présent dans les docs. Et ça permet de réfléchir aux promesses de manière bien plus simple

## EXO 3

const busKeys = Object.keys(bus);
busKeys.map((key) => {
  console.log(`${key} : ${JSON.stringify(bus[key])}`);
});

Si on veut pouvoir voir l'objet garage ce qu'il y a à l'intérieur au lieu de [object Object]

# Remédiations
## Fonctions Fléchées
arrow functions : 
- Syntaxe plus concise 
- Return implicite 
- La valeur du this

Ça devient extrêmement rare de tomber sur des fonctions déclaré en function même si ça reste complètement valide

Ce qu'on essaie de voir ici c'est que les fonctions fléchées ne sont pas à utiliser partout en remplacement de function. Le cas de figure le plus courant de leur utilisation est en fonction de “callback“. Ou pour remplacer “une création” de fonction. Les fonctions fléchées ne peuvent donc pas être utilisé pour définir des méthodes d’objet comme vous avez pu vous en rendre compte. Car les fonctions fléchées font référence au this du contexte “supérieur”. Le this à l’intérieur de votre méthode devient le this qui était présent lorsque votre objet a été défini. Ici window
// Ce que vaut `this`ici
const object = {
  color: "red",
  shape: "circle",
  threeDimensions: false,
  showThis: () => {
    console.log(this); // …sera la valeur de this ici
  },
};

object.showThis();

ES6 nous propose tout de même le raccourci syntaxique suivant pour définir une méthode sur un objet sans utiliser le mot clé fonction:
const object = {
  color: "red",
  shape: "circle",
  threeDimensions: false,
  showThis() {
    console.log(this);
  },
};

Autre avantage pas négligeable : le return implicite
people.map(function (person) {
  return person.firstName
})

// vs 

people.map((person) => person.firstName)

Dans le second cas person.firstName est bien return mais pas besoin de le préciser



