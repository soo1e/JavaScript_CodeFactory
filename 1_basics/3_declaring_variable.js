/**
 * Variable 선언하기
 *
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let - 선언한 변수의 값을 바꿀 수 있다.
 * 3) const - 선언한 변수의 값을 바꿀 수 없다.
 *
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 * */

var name = '코드팩토리';
console.log(name);

var age = 30;
console.log(age);

let ive = '아이브';
console.log(ive);

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);
// newJeans = '채수원'; <- 이건 안됨

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것.
 * 2) 할당 -> 초기값 undefined 설정
 * 3) */