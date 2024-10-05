// 첫 번째 사례
function swap<T, U>(a: T, b: U) {
  // a에 들어오는 값은 string값 -> T는 string -> b는 number이므로 U라는 다른 타입을 설정
  return [b, a];
}

const [] = swap("1", 2);

// 두 번째 사례
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  // 배열 타입과 함께 쓸 수 있음
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "my name is"]);
// data:T[] -> number과 string 중에 어떤게 첫 번째 요소인지 모르기 때문에 유니언 타입으로 나타남
// data: [T, ...unknown[]] -> 첫 번째 요소의 타입으로 제대로 추론됨

// 세 번째 사례
function getLength<T extends { length: number }>(data: T) {
  // number 타입의 프로퍼티 length를 가지고 있는 객체를 확장하는 타입으로 T를 제한
  return data.length;
}

let vat1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); -> length 프로퍼티가 없음
