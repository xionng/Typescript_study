// Partial<T>
// -> 부분적인, 일부분의
// -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  // Partial : Post 타입의 모든 프로퍼티를 다 선택적 프로퍼티로 만들어줌
  title: "제목",
  content: "초안..",
};

// Required<T>
// -> 필수의, 필수적인
// -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
  [key in keyof T]-?: T[key]; // '?'를 빼겠다
};

const withThumbnailPost: Required<Post> = {
  // Required : 선택적 프로퍼티도 필수 프로퍼티로 바뀜
  title: "안녕안녕",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

// Readonly<T>
// -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
  // Readonly: 모든 프로퍼티가 readonly프로퍼티가 됨
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시물 입니다.",
  tags: [],
  content: "",
};
