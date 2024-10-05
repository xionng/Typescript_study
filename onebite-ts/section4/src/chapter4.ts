// 사용자 정의 타입가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  // 이 함수가 참이면 내가 인수로 전달한 animal이라는 값이 Dog타입이겠구나로 알게됨
  //   -> 매개변수로 넘긴 animal이 Dog타입임을 보장함
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal) {
  return (animal as Cat).isScratch !== undefined;
}
function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else if ("isScratch" in animal) {
    animal;
  }
}
