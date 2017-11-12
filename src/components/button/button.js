import React from "react"
import Link from "gatsby-link"
import styles from "./button.module.scss"

export default class Button extends React.Component {   
    render() {
        const isTextLink = this.props.textLink === "true" ? true : false;

        var buttonClasses = {
            [styles.button] : !isTextLink,
            [styles.fit] : this.props.fit === "true",
            [styles.small] : this.props.small === "true",
            [styles.big] : this.props.big === "true",
            [styles.dotted] : this.props.dotted ==="true",
            [styles.special] : this.props.special === "true",
            [styles.disabled] : this.props.disabled === "true"
        }
        var buttonClassesString = "";
        for (var key in buttonClasses) {
            if (buttonClasses.hasOwnProperty(key) && buttonClasses[key] === true)  {
                buttonClassesString += key + " ";
            }
        }

        return (
            <Link to={this.props.to} className={buttonClassesString}>{this.props.children}</Link>
        )
    }
}

