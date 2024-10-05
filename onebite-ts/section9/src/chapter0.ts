// 조건부 타입

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 오버로드 시그니처
function removeSpaces<T>(text: T): T extends string ? string : undefined;
// 구현부 시그니처
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", ""); // 문자열에서 첫 번째 인수들을 찾아서 두 번째 인수들로 바꿔주는 메서드
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi hi im sion");
result.toUpperCase();

let result2 = removeSpaces(undefined);
