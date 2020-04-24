# Remed Destructuration

La déstructuration permet d’aller **chercher rapidement** plusieurs propriétés d’un objet, ou éléments au sein d'un tableau sans avoir à multiplier les déclarations de variables.

## Exemples

```js
const obj = { first: "Paul", last: "Henta", age: 35 };
const objDeep = { person: obj };

console.log("obj = " + JSON.stringify(obj));
console.log("objDeep = " + JSON.stringify(objDeep));

// Avant ES6 avec une affectation par valeur
const firstname = obj.first;
const lastname = obj.last;

console.log("firstname classic = " + firstname);
console.log("lastname classic = " + lastname);

// Grace à ES6
const { age, last } = obj;

console.log("age destructuré = " + age);
console.log("last destructuré = " + last);

// En renommant à la volée
const { first: firstName, last: lastName } = obj;
console.log("firstName destructuration renommé = " + firstName);
console.log("lastName destructuration renommé = " + lastName);

// On peut même aller chercher des valeurs imbriqués 
const {
  person: { first, age: old },
} = objDeep;
console.log("first destructuration imbriqué = " + first);
console.log("age destructuration imbriqué renommé = " + old);

// Pour les tableaux on peut aussi l'utiliser
const users = ["thierry", "jacques", "marie"];
const [user1, user2] = users;
console.log("destructuration tableau : " + user1);
console.log("destructuration tableau : " + user2);

// On peut également omettre un paramètre
const [, user] = users;
console.log("je récupère seulement le 2e utilisateur : " + user);

```

## Bonus - Avancé

On peut également lors de la destructuration récupérer le reste des valeurs dans une nouvelle variable, à l'exception des clés que l'ont aura déjà destructuré.

```js
const {first: FirstName, ...rest} = obj; 
// on note l'utilisation des ... (appelé spread) suivi du nom de la variable qui va contenur le reste des éléments
// Ici on l'appelle "rest" car cela fait sens mais on peut lui donner le nom que l'on veut
console.log(rest);
// Affiche { last: 'Henta', age: 35 }
```
