/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('--------------');
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log('--------------');
for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

// *을 이용해서 6x6의 정사각형을 출력해라.
let square = '';
let side = 6;

for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n'
}

console.log(square);

/**
 * for...in : 인덱스 값
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브',
}
console.log('--------------');

for (let key in yuJin) {
    console.log(key);
}

console.log('--------------');
const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
for (let key in iveMembersArray) {
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`);
}
console.log('--------------');
/**
 * for...of
 */
for (let value of iveMembersArray) {
    console.log(value);
}
console.log('--------------');
console.log('While');

/**
 * while
 */
let number = 0;
while (number < 10) {
    number++;
}

console.log(number);
console.log('--------------');
console.log('Do while');

/**
 * do...while
 */

number = 0;
do {
    number++;
} while (number < 10);

console.log(number);
console.log('--------------');

/**
 * break : 위의 조건 만족 시 조건식 종료.
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log('--------------');
console.log('Break');
number = 0;
while (number < 10) {
    if (number === 5) {
        break;
    }
    number++;
    console.log(number);
}

console.log('--------------');

/**
 * continue : 위의 조건일때만 안 하고 계속 진행.
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log('--------------');
console.log('Continue');

number = 0;
while (number < 10) {
    number++;

    if (number === 5) {
        continue;
    }
    console.log(number);
}