import React, { useState, useEffect } from 'react'
import styles from "../../styles/Product.module.css"
import Image from 'next/image'
import sizeImg from "../../public/img/size.png"

import { useRouter } from 'next/router';
import {data} from "../../data/data"
// const data = {
//     id: 1,
//     img: "/img/pizza.png",
//     name: "campagnola",
//     price: [15, 20, 25],
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit."
// }

const additional_ingredients = [
    "Double ingredients", "Extra Cheese", "Spicy Sause", "Garlic Sauce"
]
function Product() {
    const router=useRouter()
   let pId=router.query.id;
   console.log(pId);
//  
let productData = data.filter(function (el)
{
  return el.id ==pId 
}
);


    const [size, setSize] = useState(0)
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);

    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 0) {
        decrementCounter = () => setCounter(0);
    }
    const [checkedState, setCheckedState] = useState(
        new Array(additional_ingredients.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    }

    console.log(checkedState);

    return (
       
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={productData?.[0]?.image} alt="food" objectFit="contain" layout="fill" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.heading}>
                    { productData?.[0]?.name}
                </div>
                <div className={styles.price}>
                    ${size == 0 ?  productData?.[0]?.price[0] : size == 1 ?  productData?.[0]?.price[1] :  productData?.[0]?.price[2]}
                </div>
                <div className={styles.desc}>
                    { productData?.[0]?.longDesc}
                </div>
                <div className={styles.size}>
                    <div className={styles.choose}>
                        Choose the size
                    </div>
                    <div className={styles.sizeWrapper}>
                        <div className={styles.sizeContainer} onClick={() => { setSize(0) }}>
                            <Image src={sizeImg} alt="size" width={40} height={40} />
                            <div className={styles.sizeTag}>
                                small</div>
                        </div>

                        <div className={styles.sizeContainer} onClick={() => { setSize(1) }}>
                            <Image src={sizeImg} alt="size" width={45} height={45} />
                            <div className={styles.sizeTag}>
                                medium</div>
                        </div>

                        <div className={styles.sizeContainer} onClick={() => { setSize(2) }}>
                            <Image src={sizeImg} alt="size" width={50} height={50} />
                            <div className={styles.sizeTag}>
                                large</div>
                        </div>
                    </div>

                </div>
                <div className={styles.additional}>
                    <div className={styles.choose}>
                        Choose additional ingredients
                    </div>
                    <div className={styles.checkBox}>
                        {additional_ingredients.map((item, index) => {
                            return (
                                <div key={index}>
                                    <input type="checkbox" id={index} name={item} value={item} checked={checkedState[index]}
                                        onChange={() => handleOnChange(index)} />
                                    <label style={{marginLeft:5}}>{item}</label>
                                </div>
                            )
                        })}


                    </div>
                </div>

                <div className={styles.qty}>
                    <div>
                        <button  className={styles.counterBtn} onClick={incrementCounter}>
                            +
                        </button>
                        <label style={{marginLeft:10,marginRight:10}}>{counter}</label>
                        <button className={styles.counterBtn} onClick={decrementCounter}>
                            -
                        </button>
                    </div>
                    <button className={styles.addToCart} >ADD TO CART</button>
                </div>
            </div>


        </div>
    )
}

export default Product