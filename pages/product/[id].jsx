import React, { useState, useEffect } from 'react'
import styles from "../../styles/Product.module.css"
import Image from 'next/image'
import sizeImg from "../../public/img/size.png"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from '../../redux/cartSlice';

// import {data} from "../../data/data"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const additional_ingredients = [
    "Double ingredients", "Extra Cheese", "Spicy Sause", "Garlic Sauce"
]
function Product({ productData }) {

    const [size, setSize] = useState(0)
    const [counter, setCounter] = useState(1);
    const [totalprice, setTotalPrice] = useState(productData?.price[0])

    const [additionalIng, setAdditionalIng] = useState([])
    const [counterChnge,setCounterChnge]=useState(false)
    const [orgQty,setOrgQty]=useState(1)
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cartlist)
    console.log(cart);

    const incrementCounter = () => {
        setCounter(counter + 1)
        setOrgQty(orgQty+1)
        setCounterChnge(true)

    }

    let decrementCounter = () => {
        setCounter(counter - 1)
        setOrgQty(orgQty-1)
        setCounterChnge(true)
    }
    if (counter <= 1) {
        decrementCounter = () => setCounter(1);
    }
    const [checkedState, setCheckedState] = useState(
        new Array(productData?.extraOptions?.length).fill(false)
    );



    const changePrice = (total) => {
        setTotalPrice(totalprice + total)
    }

    const handleSize = (size_index) => {
        const difference = productData?.price[size_index] - productData?.price[size]
        setSize(size_index)
        changePrice(difference)
    }
    const handleOnChange = (e, option) => {
        const checked = e.target.checked
        if (checked) {
            changePrice(option.price)
            setAdditionalIng((prev) => [...prev, option])
        }
        if (!checked) {
            changePrice(-option.price)
            setAdditionalIng(additionalIng.filter((item) => item._id !== option._id))
        }
    }
    let totalPrice = totalprice * counter
    let index = productData._id
    let itemCopy = {}

    const notify = () => {
        toast("Added to Cart!")
        if (cart?.products?.length > 0) {
            cart?.products?.map((item) => {
                if (item._id === productData._id) {
                    itemCopy = { ...item }
                    if(counterChnge)
                    {
                      
                        itemCopy.counter += orgQty
                    }
                    else{
                       
                        itemCopy.counter += 1
                    }
                   
                    counter = itemCopy.counter
                }
            })
        }

        dispatch(addProduct({ ...productData, index, size, counter, totalprice, totalPrice, additionalIng,orgQty }))


        // router.push("/checkout")
        // alert("hh")
    };


    // let totalPrice = 0
    // useEffect(() => {
    //     if (size == 0) {
    //         // if (additionalPrice !== 0) {
    //             totalPrice = productData?.price[0] + additionalPrice
    //             setTotal(totalPrice*counter)
    //         // }
    //         // else {
    //         //     totalPrice = productData?.price[0]
    //         //     setTotal(totalPrice*counter)
    //         // }


    //     }
    //     else if (size == 1) {
    //         if (additionalPrice !== 0) {
    //             totalPrice = productData?.price[1] + additionalPrice
    //             setTotal(totalPrice*counter)
    //         }
    //         else {
    //             totalPrice = productData?.price[1]
    //             setTotal(totalPrice*counter)
    //         }


    //     }
    //     if (size == 2) {
    //         if (additionalPrice !== 0) {
    //             totalPrice = productData?.price[2] + additionalPrice
    //             setTotal(totalPrice*counter)
    //         }
    //         else {
    //             totalPrice = productData?.price[2]
    //             setTotal(totalPrice*counter)
    //         }


    //     }
    // }, [total, size, additionalPrice,counter])
    console.log(totalprice, additionalIng);


    return (

        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={productData?.image} alt="food" objectFit="contain" layout="fill" />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.heading}>
                    {productData?.name}
                </div>
                <div className={styles.price}>
                    ${(totalprice * counter).toFixed(2)}
                </div>
                <div className={styles.desc}>
                    {productData?.longDesc}
                </div>
                <div className={styles.size}>
                    <div className={styles.choose}>
                        Choose the size
                    </div>
                    <div className={styles.sizeWrapper}>
                        <div className={styles.sizeContainer} onClick={() => { handleSize(0) }}>
                            <Image src={sizeImg} alt="size" width={40} height={40} />
                            <div className={styles.sizeTag}>
                                small</div>
                        </div>

                        <div className={styles.sizeContainer} onClick={() => { handleSize(1) }}>
                            <Image src={sizeImg} alt="size" width={45} height={45} />
                            <div className={styles.sizeTag}>
                                medium</div>
                        </div>

                        <div className={styles.sizeContainer} onClick={() => { handleSize(2) }}>
                            <Image src={sizeImg} alt="size" width={50} height={50} />
                            <div className={styles.sizeTag}>
                                large</div>
                        </div>
                    </div>

                </div>
                {productData?.extraOptions?.length > 0 ?
                    <div className={styles.additional}>
                        <div className={styles.choose}>
                            Choose additional ingredients
                        </div>
                        <div className={styles.checkBox}>
                            {productData?.extraOptions?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <input type="checkbox" id={index} name={item.text} value={item.text}
                                            onChange={(e) => handleOnChange(e, item)} />
                                        <label style={{ marginLeft: 5 }}>{item.text}</label>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                    : ""
                }


                <div className={styles.qty}>
                    <div>
                        <button className={styles.counterBtn} onClick={incrementCounter}>
                            +
                        </button>
                        <label style={{ marginLeft: 10, marginRight: 10 }}>{counter}</label>
                        <button className={styles.counterBtn} onClick={decrementCounter}>
                            -
                        </button>
                    </div>
                    <button className={styles.addToCart} onClick={notify} >ADD TO CART</button>
                    <ToastContainer />
                </div>
            </div>


        </div>
    )
}

export const getServerSideProps = async ({ params }) => {

    const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
    return {
        props: {
            productData: res.data
        },
    };
};

export default Product