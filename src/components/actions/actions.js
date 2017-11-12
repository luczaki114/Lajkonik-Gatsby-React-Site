import React from "react"
import Link from "gatsby-link"
import styles from "./actions.module.scss"

export default class Actions extends React.Component {  
    render() {
        const children = this.props.children;
        const childrenList = children.map((child, i) => 
            <li key={i}>
                {child}
            </li>
        )

        var actionClasses = {
            [styles.actions] : true,
            [styles.fit] : this.props.fit === "true",
            [styles.small] : this.props.small === "true",
            [styles.vertical] : this.props.vertical === "true",
            [styles.thin] : this.props.thin === "true"
        }
        
        var actionClassesString = "";
        for (var key in actionClasses) {
            if (actionClasses.hasOwnProperty(key) && actionClasses[key] === true)  {
                actionClassesString += key + " ";
            }
        }

        return (
            <ul className={actionClassesString}>
                {childrenList}
            </ul>
        )
    }
}

