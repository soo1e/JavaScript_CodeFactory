/**
 * Using function to create objects
 */
function IdolModel(name, year){
    if(!new.target){ // new 키워드를 안 썼음에도 쓴 것 처럼 가능.
        return new IdolModel(name, year);
    }

    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
// console.log(yuJin.dance());
const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2);
// console.log(global.name);

const IdolModelArrow = (name, year)=>{
    this.name = name;
    this.year = year;
};

// const yuJin3 = new IdolModelArrow('안유진', 2003);