/**
 * Hoisting
 * 모든 변수 선언문이 코드의 최상단으로
 * 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * */

console.log('Hello');
console.log('World');
console.log('--------------');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);

var name;
console.log(name);
name = '코드팩토리';
console.log(name);


// let과 const는 TDZ 때문에 선언 전에 접근 불가 → ReferenceError 발생
console.log(yuJin); // ReferenceError: Cannot access 'yuJin' before initialization

let yuJin = '안유진';