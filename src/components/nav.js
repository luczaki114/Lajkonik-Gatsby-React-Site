import React from "react"
import Link from "gatsby-link"
import styles from "../assets/sass/components/nav.module.scss"

export default () => 
    <nav className={styles.nav}>
        <ul>
            <li>
                <a href="#menu" className={styles.menuToggle}><span>Menu</span></a>
            </li>
        </ul>
    </nav>