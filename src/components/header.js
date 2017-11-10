import React from "react"
import Link from 'gatsby-link'
import header from "../assets/sass/components/header.module.scss"
import Nav from "./nav"
import Menu from "./menu"
import logoIcon from "../assets/images/logo/Lajkonik Icon - Small.png"

export default class Header extends React.Component {   
    render () {
        return (
            <header id="header" className={header.header}>
                <h1>
                    <Link to="/">
                        <img src={logoIcon} alt="Lajkonik Icon" />
                        Lajkonik <span>Song and Dance Ensemble</span>
                    </Link>
                </h1>
                <Nav />
                {/* <Menu /> */}
            </header>
        )
    }
}
