import React from "react"
import Link from "gatsby-link"
import styles from "./button.module.scss"
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default class Button extends React.Component {   
    render() {
        let buttonClasses = cx({
            button: this.props.textLink != "true",
            textLink: this.props.textLink == "true",
            fit : this.props.fit === "true",
            small : this.props.small === "true",
            big : this.props.big === "true",
            dotted : this.props.dotted ==="true",
            special : this.props.special === "true",
            disabled : this.props.disabled === "true"
        });

        return (
            <Link to={this.props.to} className={buttonClasses}>{this.props.children}</Link>
        )
    }
}

