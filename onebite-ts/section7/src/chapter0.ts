// 제네릭

// 제네릭 함수
// <T> : 타입 변수
function func<T>(value: T): T {
  //  value의 타입은 함수를 호출할때마다 결정됨
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");
let arr = func<[number, number, number]>([1, 2, 3]); // 튜플 타입으로 추론됨
