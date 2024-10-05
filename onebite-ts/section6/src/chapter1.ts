// 타입스크립트의 클래스

const employee = {
  name: "이시온",
  age: 22,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;
  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 상속
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employee2 = new Employee("이시온", 22, "개발자");
console.log(employee2);

const employee3: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
