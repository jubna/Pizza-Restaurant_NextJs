import React from 'react'
import styles from "../../styles/Register.module.css"
import router from 'next/router'
export default function login() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Login</h2>
                {/* <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>Subtotal:</b>$75.00
              </div> */}
                <form>
                      
                        <input type="email" placeholder='Email'/>
                        <input type="password" placeholder='Password'/>
                </form>
                <button className={styles.button}>Login</button>
                {/* <p>Don&apos;t have an account?<span onClick={()=>{router.push("/register")}}>Register</span></p> */}
            </div>
        </div>
    )
}
