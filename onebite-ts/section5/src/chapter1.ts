// 인터페이스 확장

interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  // 인터페이스는 객체타입이면 확장할 수 있음
  //name: "hello"; // 상속받은 인터페이스에서 동일한 프로퍼티의 타입을 다시 정의할 수 있음(원본 타입의 서브타입이어야만 함)
  isBark: boolean;
}
const dog: Dog = {
  name: "", // 인터페이스 확장 : Dog 인터페이스에서 name을 리터럴로 재정의했기 때문에 hello만 들어갈 수 있음
  color: "",
  isBark: true,
};
interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
