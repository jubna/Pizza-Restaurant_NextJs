import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'
import pizza from "../public/img/pizza.png"

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>

      </div>
      <div className={styles.quotes}>
        “My love is pizza shaped. Won’t you have a slice? It’s circular, so there’s enough to go around.”
        <p>– Dora J. Arod</p>
      </div>
      <div className={styles.findOurRestaurant}>
        <div className={styles.heading}>
          Find Our Restaurant
        </div>
        <div className={styles.address}>
          <div>1654 R. Don Road #304.</div>
          <div>NewYork, 85022</div>
          <div>(123) 456-7890</div>
        </div>
        <div className={styles.address}>
          <div> 2356 K. Laquie Rd #235.</div>
          <div> 2356 K. Laquie Rd #235.</div>
          <div>(123) 456-7890</div>
        </div>
        <div className={styles.address}>
          <div>1614 E. Erwin St #104.</div>
          <div>NewYork, 85022</div>
          <div>(123) 456-7890</div>
        </div>
        <div className={styles.address}>
          <div>1614 E. Erwin St #104.</div>
          <div>NewYork, 85022</div>
          <div>(123) 456-7890</div>
        </div>
      </div>
      <div className={styles.workingHours}>
        <div className={styles.heading}>Working Hours</div>
        <div className={styles.address}>
          <div>MONDAY UNTIL FRIDAY</div>
          <div>9.00 - 22.00</div>
        </div>
        <div className={styles.address}>
          <div>SATURDAY - SUNDAY</div>
          <div>12.00 - 24.00</div>
        </div>
      </div>
    </div>
  )
}

export default Footer