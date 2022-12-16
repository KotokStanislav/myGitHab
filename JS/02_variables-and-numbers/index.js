
/* Exercise 1 */
let x1 = 5;
let y1 = 8;
let x2 = 5;
let y2 = 5;

console.log(Math.abs(x1 - x2) * Math.abs(y1 - y2));

/* Exercise 2 */
let a = 13.890123;
let b = 2.891564;
let n = 3;

let z = a % 1;
let zNormalise = Math.round(z * Math.pow(10, n));

let q = b % 1;
let qNormalise = Math.round(q * Math.pow(10, n));

console.log(zNormalise);
console.log(qNormalise);

console.log('a > b', zNormalise > qNormalise);
console.log('a < b', zNormalise < qNormalise);
console.log('a >= b', zNormalise >= qNormalise);
console.log('a <= b', zNormalise <= qNormalise);
console.log('a === b', zNormalise === qNormalise);
console.log('a ≠ b', zNormalise !== qNormalise);

/* Exercise 3 */
let p = -3;
let o = -10;

let range = Math.abs(o - p);
let numberInRange = Math.round(Math.random() * range);
let min = Math.min(p, o);

let result = min + numberInRange;

console.log(result + 1 - Math.abs(result % 2));
