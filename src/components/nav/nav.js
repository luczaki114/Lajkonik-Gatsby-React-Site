import React from "react"
import Link from 'gatsby-link'

export default () => 
    <nav id="nav">
        <ul>
            <li>
                <a href="#menu" className="menuToggle"><span>Menu</span></a>
                <div id="menu">
                    <ul>
                        <li><Link to="index.html">Home</Link></li>
                        <li><Link to="video-gallery.html">Video Gallery</Link></li>
                        <li><Link to="photo-gallery.html">Photo Gallery</Link></li>
                        <li><Link to="events.html">Events</Link></li>
                        <li>
                            <Link to="about-us.html">About Us</Link>
                            <ul>
                                <li><Link to="about-us/history.html">History</Link></li>
                                <li><Link to="about-us/highlights.html">Highlights</Link></li>
                                <li><Link to="about-us/press.html">Press</Link></li>
                                <li><Link to="about-us/folk-song-and-dance.html">Folk Song &amp; Dance</Link></li>
                                <li><Link to="about-us/craft-workshops.html">Craft Workshops</Link></li>
                            </ul>
                        </li>
                        <li><Link to="contact-us.html">Contact Us</Link></li>
                        <li><Link to="join-us.html">Join Us!</Link></li>
                        
                    </ul>
                </div>
            </li>
        </ul>
    </nav>