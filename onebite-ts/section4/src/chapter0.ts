// 함수 타입 정리
// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기

function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입 정의
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수

function introduce(name = "이시온", age: number, tall?: number) {
  // name : 필수 매개변수, tall? : 선택적 매개변수 / 필수 매개변수가 항상 앞에 와야 함
  console.log(`name : ${name}`);
  if (typeof tall === "number") {
    // tall이 number, undefined 둘 다 가능하기 때문에 ${tall + 10}을 하려면 if문으로 써야한다
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("이시온", 22, 156);
introduce("이시온", 22);

function getSum(...rest: number[]) {
  // 개수를 지정하고 싶다면 (...rest:[number, number, number])
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}
getSum(1, 2, 3); //6
