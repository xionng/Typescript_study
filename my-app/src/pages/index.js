import Axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Divider, Header } from "semantic-ui-react";
import ItemList from "../component/ItemList";
// import styles from "./styles/Home.module.css";

export default function Home({ list }) {
  // 페이지가 바로 뜨기 때문에 로딩 화면 필요 없음
  return (
    <div>
      <Head>
        <title>HOME | 시온</title>
        <meta name="description" content="시온이의 홈"></meta>
      </Head>
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl; // 클라이언트 환경이 아니기 때문에 NEXT_PUBLIC을 붙일 필요 없음 -> .env 파일 안에서도 추가
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}
