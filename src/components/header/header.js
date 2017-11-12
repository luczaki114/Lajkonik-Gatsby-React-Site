import React from "react"
import Link from 'gatsby-link'
import header from "./header.module.scss"
import classNames from 'classnames/bind';
import Nav from "../nav/nav"
import logoIcon from "../../assets/images/logo/Lajkonik Icon - Small.png"

let cx = classNames.bind(header);

export default class Header extends React.Component {
    render () {
        let classNames = cx({
            header: true,
            "header--invisible": !this.props.isPastBanner
        });

        return (
            <header id="header" className={classNames}>
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
