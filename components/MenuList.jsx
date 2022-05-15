import React from 'react'
import styles from "./MenuList.module.css"
import Image from 'next/image'
import pizza from "../public/img/pizza.png"
import router from 'next/router'
import {data} from "../data/data"


function menuList() {
return(
    // <div className={styles.container}>
    <>
      {data.map((item,index)=>
 
 (
      <div  className={styles.container} key={index}>
    <div className={styles.foodimg} onClick={()=>{router.push(`/product/${item.id}`)}}>
    <Image src={item.image} alt="food" width={200} height={200} objectFit="contain"/>
    </div>
    <div className={styles.foodName}>{item.name}</div>
    <div className={styles.foodPrice}>${item.price[1]}</div>
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