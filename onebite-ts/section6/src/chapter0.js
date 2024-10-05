// 클래스

let studentA = {
  name: "이시온",
  grade: "A+",
  age: 22,
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  //   메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다!`);
  }
}

class StudentDeveloper extends Student {
  // 필드
  favoritSkill;

  //   생성자
  constructor(name, grade, age, favoritSkill) {
    super(name, grade, age);
    this.favoritSkill = favoritSkill;
  }
  //   메서드

  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("이시온", "B+", 22, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();

// 인스턴스(클래스를 이용해 만든 객체)
let studentB = new Student("이시온", "A+", 22);
console.log(studentB);
studentB.study();
studentB.introduce();
