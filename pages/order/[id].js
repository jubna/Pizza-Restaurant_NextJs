import React from 'react'
import styles from "../../styles/Cart.module.css"
import Image from 'next/image'
import checked from "../../public/img/checked.png"
import router from 'next/router'
import axios from "axios";
const status = [
  { name: "Order Confirmed"},
  { name: "Preparing" },
  { name: "On the way" },
  { name: "Delivered" }
]

function cart({orderData}) {
console.log(orderData);
  return (
    <div className={styles.container} style={{paddingBottom:60}}>
      <div className={styles.left}>
        <table className={styles.table} style={{ textAlign: 'left' }}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              {/* <th>Date</th> */}
              <th>Address</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr} style={{ textAlign: "left" }}>
              <td>
                <span className={styles.orderId}>{orderData._id}</span>
              </td>
              {/* <td>
                <span className={styles.date}>
                  11-05-2022
                </span>
              </td> */}
              <td>
                <span className={styles.adrs}>{orderData.address}</span>
              </td>
              <td>
                <span className={styles.total}>${orderData.total}</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.statusWrapper}>
          {status.map((item, index) => {
            return (
              <div key={index} className={styles.status}>
                {orderData.status == 1 ?
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
            <b className={styles.totalTextTitle}>Subtotal:</b>${orderData.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${orderData.total}
          </div>

        </div>
      </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {

  const res = await axios.get(`https://food-ordering-next-js-lemon.vercel.app/api/orders/${params.id}`);
  return {
      props: {
          orderData: res.data
      },
  };
};


export default cart