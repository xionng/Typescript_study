// 인터페이스

interface Person {
  name: string;
  age: number;
  // sayHi: () => void; // 메소드 타입 정의
  sayHi(): void;
  sayHi(a: number, b: number): void; // 오버로드 사용하고 싶으면 호출 시그니처를 사용해야함!
}

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "이시온",
  age: 22,
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
