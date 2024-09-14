import { Button, Header } from "semantic-ui-react";
import { useRef } from "react";
import styles from "./Item.module.css";

export default function Item({ item }) {
  const buttonRef = useRef(null); // Button 요소에 사용할 ref 생성

  if (!item || Object.keys(item).length === 0) {
    return <p>Loading...</p>; // 데이터가 없을 경우 로딩 메시지를 표시
  }

  const {
    image_link,
    name,
    price,
    description,
    category,
    product_type,
    product_link,
    updated_at,
  } = item;

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.img_item}>
          <img src={image_link} alt={name} />
        </div>
        <div className={styles.info_item}>
          <strong className={styles.tit_item}>{name}</strong>
          <strong className={styles.num_price}>${price}</strong>
          <span className={styles.txt_info}>
            {category ? `${category}/` : ""}
            {product_type}
          </span>
          {/* ref를 Button 요소에 직접 추가 */}
          <Button color="orange" ref={buttonRef}>
            구매하기
          </Button>
        </div>
      </div>
      <Header as="h3">Description</Header>
      <p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
    </>
  );
}
