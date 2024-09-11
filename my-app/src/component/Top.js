import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          {/* /images 라고 하면 public 폴더 아래에 있는 이미지를 가리키게 됨 */}
          <img
            src="/images/MainLogo.png"
            alt="logo"
            style={{ display: "block", width: 80 }}
          />
        </div>
        <Header as="h1">웰니스코치</Header>
      </div>
      <Gnb />
    </div>
  );
}
