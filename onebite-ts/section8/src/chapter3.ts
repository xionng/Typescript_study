// 맵드 타입
// interface에서는 사용 불가, 타입 별칭에서만 사용해야함!!

interface User {
  id: number;
  name: string;
  age: number;
}
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key]; // [key]:value의 타입
  // id:User["id"] 라는 의미 -> number
  // ? : 모든게 선택적 프로퍼티가 됨
};

type BooleanUser = {
  [key in keyof User]: boolean; // keyof User ==  "id" | "name" | "age"
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

//  한 명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ~~ 기능
  return {
    id: 1,
    name: "이시온",
    age: 22,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ~~ 기능
}

updateUser({
  id: 1,
  name: "이시온",
  age: 23,
});
