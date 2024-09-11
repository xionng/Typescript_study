// import Image from "next/image";
// import localFont from "next/font/local";
import Head from "next/head";

export default function Home() {
  const API_URL =
    "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";
  return (
    <div>
      <Head>
        <title>HOME | 시온</title>
      </Head>
    </div>
  );
}
