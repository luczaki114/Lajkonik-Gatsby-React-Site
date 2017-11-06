import React from "react"
import Link from 'gatsby-link'

export default () => 
<section id="three" className="wrapper style1 special">
    <div className="inner">
        
        <ul className="features">
            <li className="icon fa-heart">
                <h3><Link to="about-us.html">Its More than just Performance</Link></h3>
                <p>The Polish Folk Song &amp; Dance Ensemble Lajkonik aims to acquaint Polish-Americans with the richness of their thousand year-old heritage.  In addition to studying the art of song and dance, members of Lajkonik also participate in workshops to learn traditional folk arts and crafts.</p>
            </li>
            <li className="icon fa-book">
                <h3><Link to="about-us/history.html">Our History</Link></h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
            </li>
            <li className="icon fa-flash">
                <h3><Link to="about-us/highlights.html">Highlights</Link></h3>
                <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
            </li>
            <li className="icon fa-newspaper-o">
                <h3><Link to="about-us/press.html">Press</Link></h3>
                <p>Lajkonik has been featured in the news and on the web numerous times.</p>
            </li>
            <li className="icon fa-music">
                <h3><Link to="about-us/folk-song-and-dance.html">Songs and Dances</Link></h3>
                <p>Our repertoir of dances is extensive, and has been curated for over 25 years.</p>
            </li>
            <li className="icon fa-paint-brush">
                <h3><Link to="about-us/craft-workshops.html">Craft Workshops</Link></h3>
                <p>Out side of dance we also have years craft workshops during the holidays.</p>
            </li>
        </ul>

    </div>
</section>