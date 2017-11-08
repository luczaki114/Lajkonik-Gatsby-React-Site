import React from "react"
import styles from "../assets/sass/components/widget.module.scss"

let className = cx(styles.base, {
    [styles.clickable]: this.props.clickable,
    [styles.withIcon]: !!this.props.icon
});

export default class Widget extends React.Component {   
    componentDidMount() {
        this.widgetStyle = "style" + this.props.widgetStyle; 
    }
    render() {
        return (
            <section id={this.props.id} className={styles.widgetStyle + " wrapper"}>
                <div className="inner">
                    {this.props.children}
                </div>
            </section>
        );
    }
}