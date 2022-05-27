import React from 'react'
import styles from "../../styles/Admin.module.css"
import tableStyles from "../../styles/Cart.module.css"
function index() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h2>Products</h2>
                <table className={tableStyles.table} style={{ textAlign: 'left' }}>
          <thead>
            <tr className={tableStyles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={tableStyles.tr} style={{ textAlign: "left" }}>
              <td>
                <span className={tableStyles.pro_Image}></span>
              </td>
              <td>
                <span className={tableStyles.pro_Id}></span>
              </td>
              <td>
                <span className={tableStyles.pro_title}></span>
              </td>
              <td>
                <span className={tableStyles.pro_price}></span>
              </td>
              <td>
                <span className={tableStyles.pro_action} style={{display:"flex"}}>
                    <button className={styles.edit_btn}>Edit</button>
                    <button className={styles.dlt_btn}>Delete</button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
            </div>
            <div className={styles.right}>
                <h2>Orders</h2>
            </div>
        </div>
    )
}

export default index