//2.1 Fonctions simples
const sayHello = () => {
    console.log('Hello')
};

const sayMyName = (first, last) => {
    console.log(first, last)
};

const sayMyAge = (age) => {
    console.log('You are ' + age + ' years old')
};

sayHello();
sayMyName('Odile', 'Crok');
sayMyAge(23);

// on enleve function et on rajoute =>

//----------------------//
//2.2 this

const object = {
    color: 'red',
    shape: 'circle',
    threeDimensions: false,
    showThis: () => {
        console.log(this)
    }
};

object.showThis();

// En changeant en fonction arrow, l'objet object ne s'affiche plus, mais on observe un objet Window
// Les fonctions fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour déclarer des méthodes. (ref MDN)

//----------------------//
//2.3 Application

const odile = {
    name: {
        first: 'Odile',
        last: 'Crok'
    },
    age: 23,
    sayHello: () => {
        console.log('Hello');
    },
    sayMyName() {
        console.log(this.name.first, this.name.last);
    },
    sayMyAge: function () {
        console.log(`You are ${this.age} years old`);
    }
};

odile.sayHello()
odile.sayMyName()
odile.sayMyAge()
