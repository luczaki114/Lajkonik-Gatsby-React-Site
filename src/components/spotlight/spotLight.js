import React from "react"
import Link from "gatsby-link"
import styles from "./spotlight.module.scss"

export default class Spotlight extends React.Component {   
    render() {
        return (
            <section className={styles.spotlight}>
                <div className={styles.image}>
                    <img src={this.props.image} alt={this.props.altText} />
                </div>
                <div className={styles.content}>
                    {this.props.children}
                </div>
            </section>
        )
    }
}

