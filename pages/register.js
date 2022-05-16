import React from 'react'
import styles from "../styles/Register.module.css"
import router from 'next/router'
export default function register() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>REGISTER</h2>
                {/* <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>$75.00
              </div> */}
                <form>
                        <input type="text" placeholder='Name'/>
                        <input type="email" placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
                </form>
                <button className={styles.button}>REGISTER</button>
                <p>Already have an account?<span onClick={()=>{router.push("/login")}}>Login</span></p>
            </div>
        </div>
    )
}
