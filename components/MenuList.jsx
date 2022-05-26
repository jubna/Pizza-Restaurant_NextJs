import React from 'react'
import styles from "./MenuList.module.css"
import Image from 'next/image'
import pizza from "../public/img/pizza.png"
import router from 'next/router'
import Link from 'next/link'
// import {data} from "../data/data"


function menuList({data}) {
return(
    // <div className={styles.container}>
    <>
      {data.map((item,index)=>
 
 (
      <div  className={styles.container} key={index}>
        <Link href={`/product/${item._id}`} passHref>
         <div className={styles.foodimg}>
    <Image src={item.image} alt="food" width={200} height={200} objectFit="contain"/>
    </div>
        </Link>
   
    <div className={styles.foodName}>{item.name}</div>
    <div className={styles.foodPrice}>${item.price[0]}</div>
    <div className={styles.foodDetail}>
    {item.desc}
    </div>
</div>
)
)}

</>

)
}

export default menuList