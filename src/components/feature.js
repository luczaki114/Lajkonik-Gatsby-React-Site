import React from "react"
import Link from "gatsby-link"

import Icon from "./icon"

export default class Feature extends React.Component {   
    render() {
        return (
            <li>
                <Icon icon={this.props.icon} label={this.props.iconLabel} leftOffset="true" />
                <h3>
                    <Link to={this.props.link}>
                        {this.props.heading}
                    </Link>
                </h3>
                <p>{this.props.text}</p>
            </li>
        )
    }
}

