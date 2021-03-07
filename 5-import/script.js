//5-1 Import

import {hello} from './functions.js'; // import la function hello du fichier functions.js
hello();

import {showError} from "./functions.js"; // import la function hello du fichier functions.js
showError('test');

// 5-2 Export
const [a, b] = [7, 9];

import * as math from "./math.js"; // importe toutes les function de math.js

console.log(math.sum(a, b));
console.log(math.sub(a, b));
console.log(math.multiply(a, b));
console.log(math.divide(a, b));
console.log(math.pow(a, b));
