import React from "react"
import Link from "gatsby-link"
import styles from "../assets/sass/components/features.module.scss"

import Icon from "./icon"

export default class Features extends React.Component {   
    render() {
        return (
            <ul className={styles.features}>
                {this.props.children}
            </ul>
        )
    }
}

