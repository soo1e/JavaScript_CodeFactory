/**
 * 타입 변환
 * Type Conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log('명시적')
console.log(typeof stringAge, stringAge);
console.log('--------------');

// 암묵적
let test = age + '';
console.log('암묵적');
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

console.log('--------------');

/**
 * 명시적 변환 몇 가지 더 배우기
 */
console.log('명시적 변환 몇 가지 더 배우기');
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());
console.log('--------------');
/**
 * 숫자 타입으로 변환
 */
console.log('숫자 타입으로 변환');
console.log(typeof parseInt('0'), parseInt('0.99'));
console.log(typeof parseFloat('0'), parseFloat('0.99'));
console.log(typeof +'1', +1); //  자바스크립트에서 + 연산자를 피연산자 하나만 붙여서 쓰면, 그건 "숫자형으로 변환(Coerce)" 하라는 뜻이다.
console.log('--------------');

/**
 * Boolean 타입으로의 변환
 */
console.log('Boolean 타입으로의 변환');
console.log(!!'x');
console.log(!!'');
console.log(!!0);
console.log(!!'0');

console.log(!!{});
console.log(!![]);
console.log('object와 array는 값이랑 상관없이 true');
// object와 array는 값이랑 상관없이 true.