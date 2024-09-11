import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

/**
 * 서버에서만 작동
 * onClick과 같은 이벤트 헨들러는 작동하지 않음
 * css 사용하지 않음
 * document에서 사용하는 Head와 app에서 사용하는 Head는 다름
 * --> title 속성을 넣을 때 app에서 넣거나 각 페이지에서 head를 import해서 사용해야 함
 *
 */
