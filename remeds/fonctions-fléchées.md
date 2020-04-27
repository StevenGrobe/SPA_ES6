# Fonctions fléchées ou arrow functions

## Avantages
- Syntaxe plus concise
- Return implicite
- La valeur du this

## Utilisation

Aujourd'hui dans les exemples que vous allez rencontrer dans les docs/tuto et autre vous allez voir de plus en plus souvent l'utilisation de la fonction fléchée. La syntaxe étant plus concise, les developpeurs ont tendance à la privilégier. Dans une majorité de cas on peut l'utiliser en lieu et place d'une déclaration de fonction. 
**Attention** cependant à la portée du this notamment lorsqu'on déclare **des méthodes sur un objet** on aura tendance à toujours privilégier une fonction classique.

On se rend compte de l'avantage qu'elle procure notamment lorsqu'on les utilises pour déclarer une fonction de “callback“. On a ainsi accès au `this` du contexte supérieur et dans une grande majorité des cas c'est ce que l'on souhaite.

Les fonctions fléchées font référence au this du contexte “supérieur”. Le this à l’intérieur de votre méthode devient le this qui était présent lorsque votre objet a été défini. 

```js
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
```

ES6 nous propose tout de même le raccourci syntaxique suivant pour définir une méthode sur un objet sans utiliser le mot clé fonction: 
```js
const object = {
  color: "red",
  shape: "circle",
  threeDimensions: false,
  showThis() {
    console.log(this);
  },
};

```

Autre avantage non négligeable : le return implicite : 
```js
people.map(function (person) {
  return person.firstName;
});

// vs

people.map((person) => person.firstName);
```

Dans le second cas person.firstName est bien retourné par la fonction mais pas besoin de le préciser
