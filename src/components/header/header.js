import React from "react"
import Link from 'gatsby-link'
import Nav from "../nav/nav"
import logoIcon from "../../assets/images/logo/Lajkonik Icon - Small.png"

export default () => 
<header id="header" className="alt">
    <h1>
        <Link to="/">
            <img src={logoIcon} alt="Lajkonik Icon" />
            Lajkonik <span>Song and Dance Ensemble</span>
        </Link>
    </h1>
    <Nav />
</header>