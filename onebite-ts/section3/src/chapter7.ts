// 타입 좁히기
// -> 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 상황에 따라 좁힘

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => date : getTime
// value => Person : name은 age살입니다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    // 조건문 내부에서는 number 타입 보장
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    // 조건문 내부에서는 string 타입 보장
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // value가 Date객체냐고 물어보는 연산자
    console.log(value.getTime());
  } else if (value && "age" in value) {
    // value가 null이 아님을 확인시켜줌 (&& : value가 있을 때에만 검사하도록 함)
    console.log(`${value.name}은 ${value.age}살 입니다`);
  }
  //   } else if (typeof value === "object") {
  //     // date 객체이거나 null값이라고 추론되어버림 -> getTime()을 null값에는 사용할 수 없음
  //     console.log(value.getTime());
  //   }
}
