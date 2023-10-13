/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

console.log(iveMembers);

// push() : 맨 끝에 추가 후 그 길이를 반환해줌.
iveMembers.push('코드팩토리');
console.log(iveMembers);
console.log('--------------');

// pop() : 맨 끝에 삭제 후 삭제 값을 반환해줌.
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('--------------');

// shift() : 첫 번째 값을 반환받고 그 값을 삭제해줌.
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('--------------');

// unshift() : 맨 앞에 추가하고 그 길이를 반환.
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
console.log('--------------');

// splice(시작점,몇개를 삭제할지) : 자른다!
console.log(iveMembers.splice(0,3))
console.log(iveMembers);
console.log('--------------');

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

console.log(iveMembers);
console.log('--------------');

// concat() : 새로운 값을 맨 뒤에 추가하여 새로운 array 생성.
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
console.log('--------------');

// slice(시작점, 끝점) : 시작점부터 끝점까지의 array를 잘라서 생성.
console.log(iveMembers.slice(0,3));
console.log(iveMembers);
console.log('--------------');

// spread operator -> 모든 값들이 펼쳐져서 저장
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);
console.log('--------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log({
    ...iveMembers,
} === iveMembers);
console.log('--------------');
// 완전히 새로운 array가 생성된다.

// join() : ,를 기준으로 모든 값들을 합칠 수 있다.
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));
console.log('--------------');

// sort() : 오름차순으로 정렬
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse()); // 내림차순으로 정렬
console.log('--------------');

let numbers = [
    1,
    9,
    7,
    5,
    3,
];
console.log(numbers);

// a,b를 비교했을때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환

numbers.sort((a,b)=>{
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a,b)=>{
    return a > b ? -1 : 1;
});
console.log(numbers);

console.log('--------------');

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브 : ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브 : ${x}`;
} else {
        return x;
    }
}));
console.log('--------------');

// filter() : 필터링해서 해당되는 값들 반환
numbers = [1,8,7,6,3];
console.log(numbers.filter((x) => x % 2 === 0));

// find() : 가장 첫번째로 해당되는 값 반환
console.log(numbers.find((x) => x % 2 === 0))

// find() : 가장 첫번째로 해당되는 값의 인덱스를 반환
console.log(numbers.findIndex((x) => x % 2 === 0))

// reduce() :
console.log(numbers.reduce((p,n) => p+n ,0));