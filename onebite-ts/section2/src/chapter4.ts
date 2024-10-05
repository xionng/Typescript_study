// 타입 별칭

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
function func() {
  // 함수 안에서는 같은 이름이라도 다르게 사용 가능
  type User = {};
}
let user: User = {
  id: 1,
  name: "이시온",
  nickname: "xionng",
  birth: "2003.07.17",
  bio: "안녕안녕",
  location: "부천시",
};

let user2: User = {
  id: 1,
  name: "이시온",
  nickname: "xionng",
  birth: "2003.07.17",
  bio: "안녕안녕",
  location: "부천시",
};

// 인덱스 시그니처 -> 위반하지만 않으면 모두 허용(프로퍼티 없어도 됨)
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // Korea는 무조건 가지도록 함
};
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnutedKingdom: 826,
};
