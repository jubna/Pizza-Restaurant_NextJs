import React from 'react'
import styles from "../styles/Register.module.css"
import router from 'next/router'
export default function checkout() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>$75.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Discount:</b>$0.00
              </div>
              <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Total:</b>$75.00
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
