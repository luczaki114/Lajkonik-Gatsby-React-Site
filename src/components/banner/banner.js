import React from "react"
import Link from 'gatsby-link'
import banner from "./banner.module.scss"
import classNames from 'classnames/bind';
import ScrollLink from '../scrollLink/scrollLink'

let cx = classNames.bind(banner);

export default class Banner extends React.Component {   
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            animate: false
        }
    }

    componentDidMount() {
        let that = this;
        setTimeout(() => {
            that.setState({
                animate: true,
                isLoading: false
            })
        },300)
    }
    
    render() {
        let bannerClasses = cx({
            banner: true,
            "banner--animate": this.state.animate,
            "banner--loading": this.state.isLoading
        })
        return (
            <section id="banner" className={bannerClasses}>
                <div className={banner.inner}>
                    <h2>Lajkonik</h2>
                    <p>Song &amp; Dance Ensemble</p>
                </div>
                <ScrollLink to="one" className={banner.more} />
            </section>
        )
    }
}
