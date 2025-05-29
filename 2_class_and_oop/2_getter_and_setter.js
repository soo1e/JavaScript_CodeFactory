/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name,year) {
        this.name = name;
        this.year = year;
    }

    /**
     * getter의 역할
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */

    get nameAndYear() {
        return `${this.name} - ${this.year}`;
    }

    /**
     * setter의 역할 -> 무조건 파라미터를 하나 받아야 함!
     * 값을 새로 저장할 때 사용
     */

    set setName(name){
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '밖유진';
console.log(yuJin);


// # -> private한 값. : 액세스 못함 -> Getter로만 가져올 수 있다.
class IdolModel2 {
    #name;
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);