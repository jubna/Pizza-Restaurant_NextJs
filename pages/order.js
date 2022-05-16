import React from 'react'
import styles from "../styles/Cart.module.css"
import Image from 'next/image'
import checked from "../public/img/checked.png"
import router from 'next/router'


const status = [
  { name: "Order Confirmed", status: 1 },
  { name: "Preparing", status: 1 },
  { name: "On the way", status: 0 },
  { name: "Delivered", status: 0 }
]

function cart() {

  return (
    <div className={styles.container} style={{paddingBottom:60}}>
      <div className={styles.left}>
        <table className={styles.table} style={{ textAlign: 'left' }}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Date</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr} style={{ textAlign: "left" }}>
              <td>
                <span className={styles.orderId}>123456</span>
              </td>
              <td>
                <span className={styles.date}>
                  11-05-2022
                </span>
              </td>
              <td>
                <span className={styles.adrs}>Hilton North,st:10,<br />Apartmen No:12A</span>
              </td>
              <td>
                <span className={styles.total}>$30.00</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.statusWrapper}>
          {status.map((item, index) => {
            return (
              <div key={index} className={styles.status}>
                {item.status == 1 ?
                  <Image src={checked} width={30} height={30} alt="" />
                  :
                  <div className={styles.yellowCircle}></div>
                }
                <div className={styles.statusName}>{item.name}</div>
              </div>
            )
          })}
          {/* <div></div>
              <div></div>
              <div></div> */}

        </div>
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

        </div>
      </div>
    </div>
  )
}

export default cart