import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Slider from "../components/Slider"
import Menu from "../components/Menu"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="Pizza Ordering App" />
      </Head>

      <main className={styles.main}>
      <Slider/>
      <Menu/>
      </main>

     
    </div>
  )
}
