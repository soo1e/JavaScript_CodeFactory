// 클래스는 객체 지향 프로그래밍에서 객체를 생성하기 위한 변수와 메소드를 정의하는 일종의 틀이다. -> 정보를 일반화해서 정리하는 방법이다.

/**
 * Class Keyword
 */

class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다.`
    }
}

// constructor - 생성자
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);

const ray = new IdolModel('레이', 2004);
console.log(ray);

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);

const liz = new IdolModel('리즈', 2004);
console.log(liz);

const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel);
console.log(typeof yuJin);

