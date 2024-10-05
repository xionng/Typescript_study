//  대수 타입
//  여러 개의 타입을 합성해서 새롭게 만들어 낸 타입
// 합집합 타입, 교집합 타입

// 합집합 타입 -Union 타입

let a: string | number | boolean; // 무한대로 추가 가능
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};
type Person = {
  name: string;
  language: string;
};
type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// name 프로퍼티밖에 없음-> Dog, Person 어느 곳에도 포함되지 않음
// let union4: Union1 = {
//   name: "",
// };

// 교집합 타입 - Intersection 타입

let variable: number & string;

type Dog2 = {
  name: string;
  color: string;
};
type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
  // 프로퍼티가 하나라도 빠지면 안됨
  name: "",
  color: "",
  language: "",
};
