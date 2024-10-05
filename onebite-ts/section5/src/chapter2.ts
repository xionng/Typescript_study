// 선언 합침

// 인터페이스는 동일한 이름으로 중복 선언이 가능함
// -> 중복 선언을 하면 모든 선언이 합쳐지게 됨

interface Person {
  name: string;
}

interface Person {
  // name: number; 동일한 프로퍼티를 중복 정의하는데 타입을 다르게 정의하면 '충돌' 일어남, 서브 타입으로 선언해도 안됨!!! 반드시 동일한 타입으로만 가능!!
  age: number;
}
interface Developer extends Person {
  name: "hello";
}
const person: Person = {
  name: "",
  age: 22,
};

// 모듈 보강

interface Lib {
  a: number;
  b: number;
}
interface Lib {
  s: string;
}
const lib = {
  a: 1,
  b: 2,
  c: "hello",
};
