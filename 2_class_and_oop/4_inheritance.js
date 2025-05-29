/**
 * Inheritance : 상속! 객체들 간의 관계를 구축하는 방법이다. 기존 클래스로부터 속성과 동작을 상속받을 수 있다.
 */

// Super 클래스, 부모 클래스
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

// 상속 클래스 1
class FemaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다.'
    }
}

// 상속 클래스 2
class MaleIdolModel extends IdolModel {
    sing() {
        return '남자 아이돌이 노래를 부릅니다.'
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.name);

// console.log(yuJin.sing()); maleIdolModel의 함수이므로 불가능!

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);

console.log('--------------');

console.log(jiMin instanceof IdolModel);
console.log(jiMin instanceof FemaleIdolModel);
console.log(jiMin instanceof MaleIdolModel);

