import React from "react"
import styles from "../assets/sass/components/widget.module.scss"

export default class Widget extends React.Component {   
    render() {
        var widgetClasses = {
            [styles.widget] : true,
            [styles["style1"]] : this.props.widgetStyle === "1",
            [styles["style2"]] : this.props.widgetStyle === "2",
            [styles["style3"]] : this.props.widgetStyle === "3",
            [styles["style4"]] : this.props.widgetStyle === "4",
            [styles["style5"]] : this.props.widgetStyle === "5",
            [styles["textCenter"]] : this.props.textCenter == "true",
            [styles["fullWidth"]] : this.props.fullWidth == "true"
        }
        
        var widgetClassesString = "";
        for (var key in widgetClasses) {
            if (widgetClasses.hasOwnProperty(key) && widgetClasses[key] === true)  {
                widgetClassesString += key + " ";
            }
        }

        var innerClass = "";
        if (this.props.fullWidth != "true") {
            innerClass = styles.inner;
        }

        return (
            <section id={this.props.id} className={widgetClassesString}>
                <div className={innerClass}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}