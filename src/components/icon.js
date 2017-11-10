import React from "react"
import icon from "../assets/sass/components/icon.module.scss"

export default class Icon extends React.Component {   
    render() {
        let isInline = "";
        if ( this.props.isInline == "true" ) {
            isInline = icon.inline;
        }

        let isLeftOffset = "";
        if ( this.props.leftOffset == "true" ) {
            isLeftOffset = icon.leftOffset;
        }

        return (
            <span className={[icon.icon, icon[this.props.icon], isInline, isLeftOffset].join(" ")}>
                <span className={icon.label}>{this.props.label}</span>
            </span>
        )
    }
}

