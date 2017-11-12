import React from "react"
import Link from "gatsby-link"

import Icon from "../icon/icon"
import Button from "../button/button"

export default class Feature extends React.Component {   
    render() {
        return (
            <li>
                <Icon icon={this.props.icon} label={this.props.iconLabel} leftOffset="true" />
                <h3>
                    <Button to={this.props.link} textLink="true" dotted="true">
                        {this.props.heading}
                    </Button>
                </h3>
                <p>{this.props.text}</p>
            </li>
        )
    }
}

