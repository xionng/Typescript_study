//  infer
// inference -> 추론하다
type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;
// 타입변수 T에 들어오는 타입이 '()=>string 함수'의 서브타입이라면 string으로 반환, 아니라면 never로 반환
// infer R : 조건식을 참으로 만드는 (서브)R 타입을 추론할 수 있으면 R, 아니면 never
type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
type C = ReturnType<number>; // 추론 불가 -> never

// 예제
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 조건 1. T는 Promise 타입이어야 함
// 조건 2. Promise 타입의 결과값 타입을 반환해야 함

// 타입변수 T에 제공한 Promise 타입에서 결과값 타입만 가져오도록
type PromiseA = PromiseUnpack<Promise<number>>;
// number
// Promise<number>타입이 Promise<infer R>의 서브타입이 되도록 하는 R타입을 추론해라

type PromiseB = PromiseUnpack<Promise<string>>;
// string
