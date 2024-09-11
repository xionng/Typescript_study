import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../component/Footer";
import Top from "../component/Top";
import Home from ".";
function App({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default App;

/**
 * 페이지 전환시 레이아웃을 유지할 수 있음
 * 페이지 전환시 상태값을 유지할 수 있음
 * componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있음
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능함
 * 글로벌 css를 이곳에 선언함
 */

/**
 * props로 넘어온 component는 현재 페이지를 의미함
 * pageProps는 데이터 패칭 메소드를 이용해 미리 가져온 초기 객체
 */
