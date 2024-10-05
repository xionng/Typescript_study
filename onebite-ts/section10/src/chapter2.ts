// Pick<T, K>
// -> 뽑다, 고르다
// -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title'|'tags'|'content'|'thumbnailURL'
  // "title" | "content" extends 'title'|'tags'|'content'|'thumbnailURL' -> 참

  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  // Pick : title, content 프로퍼티만 있는 객체타입으로 새롭게 타입 정의
  title: "옛날 글",
  content: "옛날 콘텐츠",
};

// Omit<T, K>
// -> 생략하다, 빼다
// -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post , Exclude<keyof Post, 'title'>>
// Pick<Post , Exclude<'title'|'tags'|'content'|'thumbnailURL' , 'title'>>
// Pick<Post ,'tags'|'content'|'thumbnailURL'>

const noTitlePost: Omit<Post, "title"> = {
  // Omit : Post타입에서 title프로퍼티만 제거
  content: "",
  tags: [],
  thumbnailURL: "https://...",
};

// Record<K, V>

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
// <유니온으로 받은 객체의 key, value>
// 동일한 패턴을 갖는 객체 타입을 쉽게 정의할 수 있음
