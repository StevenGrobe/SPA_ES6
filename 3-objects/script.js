//3.1 Object.keys

const bus = {
    vehicle: 'Urbanway CNG 12',
    id: 3221,
    line: 'C6',
    paint: 'chrono',
    garage: {
        name: 'Sassenage',
        place: '47'
    },
    equipments: ['sae', 'tft', 'speech']
};

// foreach pour afficher les valeurs de l'objet bus
Object.keys(bus).forEach(key  => {
    console.log(key, ':', bus[key])
})

//3.2 Object.values

// foreach pour afficher toutes les valeurs "texte" de notre data
Object.values(data).forEach(perturbation => {
    console.log(perturbation.texte)
})

console.log(data);
