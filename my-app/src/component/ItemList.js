import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";
// a 태그또는 location을 이용하면 페이지가 새로고침되면서 이동함 -> 느려지고 요청 늘어남
// next/link를 이용하면 페이지가 새로고침되지 않고 안의 내용물만 바뀜

export default function ItemList({ list }) {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {list.map((item) => (
          <Grid.Column key={item.id}>
            <Link href={`/detail/${item.id}`}>
              <div className={styles.wrap}>
                <img
                  src={item.image_link}
                  alt={item.name}
                  className={styles.img_item}
                />
                <strong className={styles.tit_item}>{item.name}</strong>
                <span className={styles.txt_info}>
                  {item.category} {item.product_type}
                </span>
                <strong className={styles.num_price}>${item.price}</strong>
              </div>
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}
