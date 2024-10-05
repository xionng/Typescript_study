// 접근 제어자(access modifier)
// => public, private, protect

class Employee {
  // 필드
  //name: string; // 아무것도 적지 않아도 기본적으로 public => 자유롭게 인스턴스의 프로퍼티에 접근 가능
  //private age: number;
  //protected position: string;

  // 생성자
  constructor(
    public name: string,
    private age: number,
    protected position: string
  ) {
    // 생성자에 접근제어자를 달면 자동으로 필드를 만들기 때문에 둘 다 달게 되면 중복됨(필드 접근제어자 제거)
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }
  work() {
    console.log(`${this.age}일함`); // private : 메서드 안에서만 접근 가능
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
  func() {
    // this.age; => private : 파생클래스 내에서도 접근 불가
    this.position; // protected : 파생클래스 내에서는 접근 가능
  }
}

const employee = new Employee("이시온", 22, "개발자");
employee.name = "김성규";
// employee.age = 36; => 속성이 private라서 외부에서 프로퍼티에 접근할 수 없음(읽을 수도 없음 !== readonly)

console.log(employee);
