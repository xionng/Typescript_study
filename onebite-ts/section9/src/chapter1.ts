// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;
// 분산하고 싶지 않다면? =>  [T] extends [number] ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // 분산적인 조건부 타입으로 변경됨
// 한 번은 number타입으로 한 번은 string 타입으로 들어감 -> 분리된 타입들을 다시 유니온으로 묶어줌

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch <boolean> |
// StringNumberSwitch <number> |
// StringNumberSwitch <string>

// 2단계
// number |
// string |
// number

// 결과
// number | string

// 실용적인 예제 1 - 특정 타입 제거하기

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean -> 결과에 never가 있으면 사라짐
// => number | boolean

// 예제 2 - 특정 타입만 뽑아내기

type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// 1단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// string
