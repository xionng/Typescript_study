// object
let user: {
  // 구조적 타입 시스템(property based type)
  id?: number; // 선택적 프로퍼티 : 이 프로퍼티가 있어도 되고 없어도 된다
  name: string;
} = {
  id: 1,
  name: "이시온",
};

user = {
  name: "김성규",
};

let config: {
  readonly apikey: string; // 값을 바꿀 수 없음(읽기 전용)
} = {
  apikey: "MY API KEY",
};
