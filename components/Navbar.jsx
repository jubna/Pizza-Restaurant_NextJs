import React from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import telephone from "../public/img/telephone.png"
import logo from "../public/img/logo.png"
import cart from "../public/img/cart.png"
import router from 'next/router'
import Menu from './Menu'

function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.circle}>
                    <Image src={telephone} width={30} height={30} alt="telephone" />
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>012 2345 343</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul>
                    <li onClick={()=>router.push("/")}>Home</li>
                    <li onClick={()=>router.push("/")}>Products</li>
                    <li>Menu</li>
                    <li className={styles.logo}>
                    {/* <Image src={logo} width={160} height={70} alt="logo" /> */}
                    Pizza
                    </li>
                    <li>Events</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart} onClick={()=>router.push("/cart")}>
                <Image src={cart} width={30} height={30} alt="cart" />
                <div className={styles.counter}>
                       2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar