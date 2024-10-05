//  keyof 연산자

// interface Person {
//   name: string;
//   age: number;
// }
type Person = typeof person2;
function getPropertyKey(person: Person, key: keyof Person) {
  // key의 타입은 string이 될 수 없음 :모든 문자열 값이 person객체의 key라고 볼 수 없기 때문
  // key: keyof Person : Person 타입의 모든 프로퍼티의 타입을 유니온 타입으로 추출
  // keyof typeof person 이라고 쓸 수 있음
  return person[key];
}

const person: Person = {
  name: "이시온",
  age: 22,
};

getPropertyKey(person, "name"); // 이시온 : person 객체로부터 name 프로퍼티의 값을 가져옴

const person2 = {
  name: "이시온",
  age: 22,
};
