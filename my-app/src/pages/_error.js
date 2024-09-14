function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
// 이렇게 하면 서버쪽 에러와 클라이언트쪽 에러를 동시에 관리할 수 있음
// 이 페이지는 정적으로 최적화되어있지 않음
// -> 에러가 발생했을 때 서버 쪽으로 에러를 보내는 작업을 동반하는 경우가 많기 때문
// 어떤 에러다 라는 것을 로그에도 넘겨 레프팅 하는 것
