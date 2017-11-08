import React from 'react'
import Link from 'gatsby-link'

import Banner from '../components/banner'
import Widget from '../components/widget'

import pic1 from '../assets/images/pic01.jpg'
import pic2 from '../assets/images/pic02.jpg'
import pic3 from '../assets/images/pic03.jpg'

const IndexPage = () => (
	<div>
		<Banner />

		<Widget id="one" widgetStyle="3" textCenter="true">
			<header className="major">
				<h2>About Lajkonik</h2>
				<p>Lajkonik’s mission is much deeper than promoting Polish folk culture through artistic dances, passionate songs and colorful performances throughout the United States.</p>
			</header>
		</Widget>

		<Widget widgetStyle="2" fullWidth="true">
			<section className="spotlight">
				<div className="image">
					<img src={pic1} alt="" />
				</div>
				<div className="content">
					<h2>Photo Gallery</h2>
					<p>Take a look at our recent and past trips.</p>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={pic2} alt="" />
				</div>
				<div className="content">
					<h2>Video Gallery</h2>
					<p>Take a look at some past performances, interviews and promotional videos.</p>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={pic3} alt="" />
				</div>
				<div className="content">
					<h2>Events</h2>
					<p>See our upcoming events and concert schedule</p>
				</div>
			</section>
		</Widget>

		<Widget widgetStyle="1">
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
		</Widget>
	</div>
)

export default IndexPage
