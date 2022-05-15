import React from 'react'
import styles from "./Menu.module.css"
import MenuList from './MenuList'
function Menu() {
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                THE BEST PIZZA IN TOWN
            </div>
            <div className={styles.details}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
                in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
            </div>
           <div className={styles.wrapper}>
                <MenuList/>
                {/* <MenuList/>
                <MenuList/>
                <MenuList/> */}
           </div>
        </div>
    )
}

export default Menu