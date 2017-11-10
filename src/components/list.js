// Placeholder component to isolate list styles away from global scope. 
// Finish this when the need for a list arises.

import React from "react"
import styles from "../assets/sass/components/list.module.scss"

export default class Unorderedlist extends React.Component {   
    render() {
        var listClasses = {
            [styles.list] : true,
            [styles["style1"]] : this.props.listStyle === "1",
            [styles["style2"]] : this.props.listStyle === "2"
        }
        
        var listClassesString = "";
        for (var key in listClasses) {
            if (listClasses.hasOwnProperty(key) && listClasses[key] === true)  {
                console.log(listClasses[key], key)
                listClassesString += key + " ";
            }
        }
        return (
            <ul className={styles.features}>
                {this.props.children}
            </ul>
        )
    }
}
