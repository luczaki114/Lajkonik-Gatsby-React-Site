import React from "react"
import Link from 'gatsby-link'
import styles from "../assets/sass/components/header.module.scss"
import Nav from "./nav"
import Menu from "./menu"
import logoIcon from "../assets/images/logo/Lajkonik Icon - Small.png"

export default () => 
<header id="header" className={styles.header + " " + styles.alt}>
    <h1>
        <Link to="/">
            <img src={logoIcon} alt="Lajkonik Icon" />
            Lajkonik <span>Song and Dance Ensemble</span>
        </Link>
    </h1>
    <Nav />
    <Menu />
</header>