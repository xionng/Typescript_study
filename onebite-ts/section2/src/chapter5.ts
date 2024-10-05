// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  // 숫자를 따로 지정하지 않아도 알아서 0번부터 들어감
  // 시작하고 싶은 번호가 있으면 그 순서대로 됨
  ADMIN,
  USER = 10,
  GUEST,
}
enum Language {
  Korean = "ko",
  english = "en",
}
const user1 = {
  name: "이시온",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.Korean,
};

const user2 = {
  name: "김성규",
  role: Role.USER, // 1 <- 일반 유저
};

const user3 = {
  name: "최영재",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
