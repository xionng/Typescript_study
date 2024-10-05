// 인덱스드 엑세스 타입 -> 객체 타입에 적합

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

// 뽑아내고 싶은 프로퍼티를 쓰기 -> post타입으로 부터 author의 value타입인 객체타입만 추출함
function printAuthorInfo(author: Post["author"]) {
  // 인덱스에는 오로지 타입만 들어올 수 있음
  // 인덱스를 이용해 특정 타입의 프로퍼티에 접근 -> 인덱스드 엑세스 타입
  console.log(`${author.name}-${author.id}`);
}
const post: Post = {
  title: "게시물 제목",
  content: "게시물 본문",
  author: {
    id: 1,
    name: "이시온",
    age: 22,
  },
};
// 배열
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

function printAuthorInfoList(author: PostList[number]["author"]) {
  // 이 객체 타입으로 부터 author 프로퍼티의 타입을 뽑겠다
  console.log(`${author.name}-${author.id}`);
}
const postList: PostList[number] = {
  // 배열 타입으로부터 하나의 요소 타입만 가져옴
  title: "게시물 제목",
  content: "게시물 본문",
  author: {
    id: 1,
    name: "이시온",
    age: 22,
  },
};

// 튜플타입
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
// type Tup3 = Tup[3]; -> 길이가 정해져있기 때문에 존재하지 않는 인덱스를 넣으면 오류 남

type TubNum = Tup[number]; // 최적의 공통 타입(유니언)으로 추측
