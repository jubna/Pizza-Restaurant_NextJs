import React from 'react'
import styles from "../styles/Register.module.css"
import router from 'next/router'
import {  useSelector } from 'react-redux';
export default function Checkout() {

const other=useSelector(state=>state.cartlist)
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>${other.totalPrice.toFixed(3)}
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>$0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>${other.totalPrice.toFixed(3)}
              </div>
                <h2 className={styles.title}>Billing Address</h2>
                <form>
                        <input type="text" placeholder='Name'/>
                        <input type="number" placeholder='Phone'/>
                        <textarea id="address" placeholder='Address' name="address"  />
                </form>
                <button className={styles.button} onClick={()=>{router.push("/order")}}>PLACE ORDER</button>
                <p>Go to Cart<span onClick={()=>{router.push("/cart")}}>Cart</span></p>
            </div>
        </div>
    )
}
