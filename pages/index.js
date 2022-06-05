import Head from 'next/head'
import Image from 'next/image'
import axios from "axios";

import styles from '../styles/Home.module.css'
import Slider from "../components/Slider"
import Menu from "../components/Menu"

export default function Home({pizzaList}) {
  // console.log(pizzaList);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Pizza Ordering App" />
      </Head>

      <main className={styles.main}>
      <Slider/>
      <Menu data={pizzaList}/>
      </main>

     
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await axios.get("https://food-ordering-next-js-lemon.vercel.app/api/products");
  return {
    props: {
      pizzaList: res.data
    },
  };
};
