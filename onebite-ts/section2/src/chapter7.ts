// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function fun2(): void {
  console.log("hello");
}

let a: void;
a = undefined; // undefined 만 들어갈 수 있음

// never -> 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never; // 다른 값들은 절대 저장할 수 없음
