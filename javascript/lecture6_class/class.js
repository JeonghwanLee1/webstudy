class Person{
    //constructor
    constructor(name){
        this.name = name;
        console.log(`생성 완료`);
    }
    sayHello(){
        console.log(`Hi. I am ${this.name}이야`);
    }
}

const kim = new Person('Kim');
kim.sayHello();

class Student extends Person{
    constructor(name,school,major){
        super(name);
        this.school = school;
        this.major = major;
    }
    //상속
}