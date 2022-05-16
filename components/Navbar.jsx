import React ,{ useState }from 'react'
import styles from "./Navbar.module.css"
import Image from 'next/image'
import toggler from "../public/img/toggler.svg"
import telephone from "../public/img/telephone.png"
import cart from "../public/img/cart.png"
import router from 'next/router'
import Menu from './Menu'


function Navbar() {
    const [toggle,setToggle]=useState(false)
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
                    <li  onClick={()=>router.push("/login")}>Login</li>
                    <li  onClick={()=>router.push("/register")}>Register</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={styles.toggle}>
                <button onClick={()=>setToggle(!toggle)} style={{backgroundColor:"white",border:"none"}} >
                    <Image src={toggler} alt="" width={30} height={30} />
                </button>
            </div>
            {toggle?
             <div className={styles.mobileMenu}>
             <ul onClick={()=>setToggle(!toggle)} >
                     <li onClick={()=>router.push("/")}>Home</li>
                     <li onClick={()=>router.push("/")}>Products</li>
                     <li>Menu</li>
                     <li className={styles.logo}>
                     {/* <Image src={logo} width={160} height={70} alt="logo" /> */}
                     Pizza
                     </li>
                     <li  onClick={()=>router.push("/login")}>Login</li>
                     <li  onClick={()=>router.push("/register")}>Register</li>
                     <li  onClick={()=>router.push("/cart")}>Cart</li>
                     <li>Contact</li>
                 </ul>
             </div>
             :""
            }
           
            

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