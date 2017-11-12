import React from "react"
import Link from "gatsby-link"
import styles from "./nav.module.scss"

export default class Nav extends React.Component {  
    constructor (props) {
        super(props);
    
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    
    toggleMenu () {
        this.props.toggleMenu();
    }

    render () {
        console.log(this.props)
        return (
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <a href="#menu" onClick={this.toggleMenu} className={styles.menuToggle}>
                            <span>Menu</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}