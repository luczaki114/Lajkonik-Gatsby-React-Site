import React from "react"


export default class ScrollLink extends React.Component {   
    constructor(props) {
        super(props);
        this.scrollPastBanner = this.scrollPastBanner.bind(this);
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
    
    render() {
        return (
            <a onClick={this.scrollPastBanner} className={this.props.className}></a>
        )
    }
}
