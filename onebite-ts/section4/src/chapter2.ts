// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 기준 1 . 반환값이 호환되는가

type A = () => number;
type B = () => 10;

let a: A = () => 10; //number
let b: B = () => 10; // 리터럴

a = b; // 허용(업)
// b = a; -> 불가(다운)

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; -> 매개변수의 타입을 기준으로 판단할때는 업은 불가
d = c; // 허용(다운

type Animal = {
  name: string;
}; // 슈퍼
type Dog = {
  name: string;
  color: string;
}; // 서브

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; -> 업캐스팅(불가) : Animal에는 color가 없음!!
dogFunc = animalFunc;
//  ==
let testFunc = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; -> 불가 func1 : 2개, func2 : 1개 => 매개변수의 개수가 더 적을 때만 가능(같은 타입의 매개변수 있어야 함)
