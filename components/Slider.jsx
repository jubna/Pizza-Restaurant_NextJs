import React ,{useState} from 'react'
import styles from "./Slider.module.css"
import Image from 'next/image'
import arrowL from "../public/img/arrowl.png"
import arrowR from "../public/img/arrowr.png"
import slide1 from "../public/img/slide1.jpg"
import slide2 from "../public/img/slide2.jpg"
const images=[
  "/img/slide1.jpg",
  "/img/slide3.jpg"
]
function Slider() {
const [index,setIndex]=useState(0)
const handleArrow=(dir)=>{
if(dir=="l"){
  setIndex(index!==0?index-1:images.length-1)
}
if(dir=="r"){
  setIndex(index!==images.length-1?index+1:0)
}
}
// const handleArrow = (direction) =>{
//   if(direction==="l"){
//       setIndex(index !== 0 ? index-1 : 2)
//   }
//   if(direction==="r"){
//       setIndex(index !== 2 ? index+1 : 0)
//   }
// }
console.log(index);
  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit='cover' />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
}

export default Slider