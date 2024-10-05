// 타입 추론

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이시온",
  profile: {
    nickname: "xionng",
  },
};
let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  //반환값 추론은 초기화하는 값이 아니라 return문 다음에 오는 반환값 기준으로 추론함
  return "hello";
}

// any 타입의 진화
let d; // 암묵적 any타입 <-> 명시적으로 지정하는 것과는 다름
d = 10; // number으로 진화
d.toFixed();

d = "hello"; // string으로 진화
d.toUpperCase();

const num = 10;
const str = "hello";

let arr = [1, "string"];
