import React from "react"
import Link from "gatsby-link"
import classNames from 'classnames/bind';
import styles from "./menu.module.scss"

let cx = classNames.bind(styles);

export default class Menu extends React.Component {  
    constructor (props) {
        super(props);
        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu () {
        this.props.toggleMenu();
    }

    render () {
        let classNames = cx({
            menu: true,
            menuOpen: this.props.menuOpen
        });

        return (
            <div className={classNames}>
                <a onClick={this.closeMenu} href="#menu" className={styles.close}></a>
                <ul>
                    <li><Link to="">Home</Link></li>
                    <li><Link to="video-gallery">Video Gallery</Link></li>
                    <li><Link to="photo-gallery">Photo Gallery</Link></li>
                    <li><Link to="events">Events</Link></li>
                    <li>
                        <Link to="about-us">About Us</Link>
                        <ul>
                            <li><Link to="about-us/history">History</Link></li>
                            <li><Link to="about-us/highlights">Highlights</Link></li>
                            <li><Link to="about-us/press">Press</Link></li>
                            <li><Link to="about-us/folk-song-and-dance">Folk Song &amp; Dance</Link></li>
                            <li><Link to="about-us/craft-workshops">Craft Workshops</Link></li>
                        </ul>
                    </li>
                    <li><Link to="contact-us">Contact Us</Link></li>
                    <li><Link to="join-us">Join Us!</Link></li>
                </ul>
            </div>
        )
    }
}