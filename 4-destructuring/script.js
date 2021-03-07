//4.1 Découverte

const [a, b, c] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(c);

// prend les 2 premières valeures de l'array et les transforme en variable

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(age);

// prend les propriété d'un objet et les transforme en variable

//4.2 Application

Object.values(data).forEach( perturbation => {
    const { texte, dateDebut, dateFin } = perturbation;
    console.log(texte + '\n' + dateDebut, '-', dateFin)
})

// \n pour sauter ligne dans console

console.log(data);
