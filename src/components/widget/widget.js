import React from "react"
import styles from "./widget.module.scss"
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

export default class Widget extends React.Component {   
    isWidget = {
        isWidget: true
    }
    render() {
        let widgetClasses = cx({
            widget : true,
            style1 : this.props.widgetStyle === "1",
            style2 : this.props.widgetStyle === "2",
            style3 : this.props.widgetStyle === "3",
            style4 : this.props.widgetStyle === "4",
            style5 : this.props.widgetStyle === "5",
            cta : this.props.widgetStyle === "cta",
            textCenter : this.props.textCenter == "true",
            fullWidth : this.props.fullWidth == "true"
        })

        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                isInWidget: true
            })
        );

        return (
            <section id={this.props.id} className={widgetClasses}>
                <div className={styles.inner}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}