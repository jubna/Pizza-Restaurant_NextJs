import React from 'react'
import styles from "../styles/Cart.module.css"
import Image from 'next/image'
import pizza from "../public/img/pizza.png"
import router from 'next/router'


function cart() {
  return (
        <div className={styles.container}>
          <div className={styles.left}>
            <table className={styles.table}>
              <thead className={styles.trTitle}>
                <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                </tr>
              </thead>
              <tbody className={styles.tr}>
                <tr>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>Campagnola</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$15.00</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>$30.00</span>
                </td>
                </tr>
            
              </tbody>
              <tbody className={styles.tr}>
                <tr>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>Campagnola</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredient, spicy sauce
                  </span>
                </td>
                <td>
                  <span className={styles.price}>$15.00</span>
                </td>
                <td>
                  <span className={styles.quantity}>2</span>
                </td>
                <td>
                  <span className={styles.total}>$30.00</span>
                </td>
                </tr>
              
              </tbody>
            </table>
          </div>
          <div className={styles.right}>
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
              <button className={styles.button} onClick={()=>{router.push("/checkout")}}>CHECKOUT NOW!</button>
            </div>
          </div>
        </div>
  )
}

export default cart