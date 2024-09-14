import { Icon } from "semantic-ui-react";

export default function Error404() {
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      404 : 페이지를 찾을 수 없습니다.
    </div>
  );
}
// 404에러는 static으로 만드는 것이 좋다!
