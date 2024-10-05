// 객체 타입간의 호환성 -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가?

type Animal = {
  // 슈퍼타입
  name: string;
  color: string;
};
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "뽀미",
  color: "brown",
  breed: "시츄",
};

animal = dog; // 업
// dog = animal; 다운
// name과 color 프로퍼티가 있는 것은 다 Animal 타입이야!! 라고 하는 것
// Dog 타입이 되려면 breed가 추가적으로 있어야 하기 때문

type Book = {
  // 슈퍼
  name: string;
  price: number;
};

type ProgrammingBook = {
  // 서브
  name: string;
  price: number;
  skill: string;
};

let book: Book;

let programmingBook: ProgrammingBook = {
  name: "어쩔",
  price: 33000,
  skill: "typescript",
};

book = programmingBook; // 업
// programmingBook = book; 다운

// 초과 프로퍼티 검사
let book2: Book = {
  name: "어쩔",
  price: 33000,
  //   skill: "typescript", -> 불가
};

let book3: Book = programmingBook; // -> 허용

function func(book: Book) {}
func(programmingBook); // 변수에 저장해 두었다가 인수로 변수를 전달해야함
