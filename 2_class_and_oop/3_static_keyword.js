/**
 * Static Keyword -> 클래스의 인스턴스가 아닌 클래스 자체에서 호출하는 메서드. : 객체를 만들지 않아도 호출할 수 있음!
 */
// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnGroupName(){
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGroupName());

/**
 * factory constructor
 */
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // factory constructor
    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

// 객체를 만들기 전에 static을 활용한 factory constructor을 활용해서 yuJin2를 만듦.
const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung);