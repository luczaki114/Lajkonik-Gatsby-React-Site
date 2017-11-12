import React from "react"
import Link from "gatsby-link"
import styles from "./features.module.scss"

import Icon from "../icon/icon"

export default class Features extends React.Component {   
    render() {
        return (
            <ul className={styles.features}>
                {this.props.children}
            </ul>
        )
    }
}

