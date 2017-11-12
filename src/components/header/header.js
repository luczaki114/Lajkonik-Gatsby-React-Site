import React from "react"
import Link from 'gatsby-link'
import header from "./header.module.scss"
import Nav from "../nav/nav"
import logoIcon from "../../assets/images/logo/Lajkonik Icon - Small.png"

export default class Header extends React.Component {
    constructor (props) {
        super(props);
    }   

    render () {
        console.log(this.props)
        return (
            <header id="header" className={header.header}>
                <h1>
                    <Link to="/">
                        <img src={logoIcon} alt="Lajkonik Icon" />
                        Lajkonik <span>Song and Dance Ensemble</span>
                    </Link>
                </h1>
                <Nav toggleMenu={this.props.toggleMenu} />
            </header>
        )
    }
}
