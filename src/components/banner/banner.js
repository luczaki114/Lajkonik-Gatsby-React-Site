import React from "react"
import Link from 'gatsby-link'
import banner from "./banner.module.scss"
import classNames from 'classnames/bind';

let cx = classNames.bind(banner);

export default class Banner extends React.Component {   
    constructor(props) {
        super(props);
        this.scrollPastBanner = this.scrollPastBanner.bind(this);
        this.state = {
            isLoading: true,
            animate: false
        }
    }

    scrollPastBanner (event) {
        event.preventDefault();

        let $target = document.getElementById("one");

        function scrollTo(element, to, duration) {
            if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;
        
            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                scrollTo(element, to, duration - 10);
            }, 10);
        }

        scrollTo(document.documentElement, $target.offsetTop, 500)
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
                <a onClick={this.scrollPastBanner} className={banner.more}></a>
            </section>
        )
    }
}
