/* 타입 단언 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person; // 뒤의 타입이라고 간주하라고 함

person.name = "이시온";
person.age = 22;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "뽀미",
  color: "brown",
  breed: "시츄",
} as Dog;

/* 타입 단언의 규칙 */

// 값 as 단언 <- 단언식
// A as B : A가 B의 슈퍼타입이거나 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string; 슈퍼, 서브타입이 아니기 때문에 단언할 수 없음
let num3 = 10 as unknown as string; // 한 번 더 단언하면 가능하긴 함 -> 좋은 방법 아님

/* const 단언*/
// const로 선언한 것과 같게 해줌
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // -> 읽기 전용이 됨
// 아무리 프로퍼티가 많더라도 as const를 붙이면 readonly 프로퍼티로 만들 수 있음

/* Non Null 단언 */
// 어떤 값이 null이거나 undefined가 아니라고 단언하는 역할

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이시온",
};

const len: number = post.author!.length;
// as 사용하지 않고 !만 붙여주면 이 값이 null이거나 undefined가 아닐거라고 typescript가 믿도록 함
