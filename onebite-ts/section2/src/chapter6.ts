// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = () => {};

let num: number = 10;
num = anyVar;
anyVar.toUpperCase();

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; 불가
// unknownVar.toUpperCase(); 불가

if (typeof unknownVar === "number") {
  // 타입 정제
  num = unknownVar;
}
