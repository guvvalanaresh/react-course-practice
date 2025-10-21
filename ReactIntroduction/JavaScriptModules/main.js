//For normal functions you should import them with {} brackets
import {add, PI} from './mathOperations.js';
//For default functions you should import them without {} brackets
import multiplication from './mathOperations.js';
//You can also give a alias name for the imported functions
import { subtraction as minus } from './mathOperations.js';

console.log(add(5, 6));             // it prints 11
console.log(PI);                    // 3.14156
console.log(multiplication(5, 6));  // 30
console.log(minus(10, 5));          // 5