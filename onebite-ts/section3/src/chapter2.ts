// UnKnown 타입 -> 모든 값 넣을 수 있음

function unKnownExam() {
  // 업캐스팅
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = null;

  // 다운캐스팅 -> 불가
  //   let unKnownVar: unknown;
  //   let num: number = unKnownVar;
}

// Never 타입
function neverExam() {
  function neverfunc(): never {
    while (true) {}
  }
  //   업캐스팅
  let num: number = neverfunc();
  let bool: boolean = neverfunc();
  //   다운캐스팅
  //   let never1: never = 10;
  //   let never2: never = "string";
}

// void
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined; // -> undefined의 슈퍼타입이기 때문에 return 가능
  }
  let voidVar: void = undefined;
}

// any
function anyExam() {
  let unKnownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  //   let neverVar: never;

  anyVar = unKnownVar; // 다운캐스팅이지만 가능
  undefinedVar = anyVar; // 다운캐스팅이지만 가능
  //   neverVar = anyVar;  never로는 어떤 것도 불가능
}
