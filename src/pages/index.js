import React from 'react'
import Link from 'gatsby-link'

import Banner from '../components/banner/banner'
import Widget from '../components/widget/widget'
import Spotlight from '../components/spotlight/spotlight'
import Features from '../components/features/features'
import Feature from '../components/feature/feature'
import Actions from '../components/actions/actions'
import Button from '../components/button/button'

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
			<Spotlight image={pic1} altText="basic text">
				<h2>Photo Gallery</h2>
				<p>Take a look at our recent and past trips.</p>
			</Spotlight>
			<Spotlight image={pic2} altText="basic text">
				<h2>Video Gallery</h2>
				<p>Take a look at some past performances, interviews and promotional videos.</p>
			</Spotlight>
			<Spotlight image={pic3} altText="basic text">
				<h2>Events</h2>
				<p>See our upcoming events and concert schedule</p>
			</Spotlight>
		</Widget>

		<Widget widgetStyle="1">
			<Features>
				<Feature 
					icon="fa-heart" 
					link="index.html"
					heading="Its More than just Performance"
					text="The Polish Folk Song &amp; Dance Ensemble Lajkonik aims to acquaint Polish-Americans with the richness of their thousand year-old heritage.  In addition to studying the art of song and dance, members of Lajkonik also participate in workshops to learn traditional folk arts and crafts." />
				<Feature 
					icon="fa-book"
					link="about-us/history.html"
					heading="Our History"
					text="Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat." />
				<Feature 
					icon="fa-flash"
					link="about-us/highlights.html"
					heading="Highlights"
					text="Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat." />
				<Feature 
					icon="fa-newspaper-o"
					link="about-us/press.html"
					heading="Press"
					text="Lajkonik has been featured in the news and on the web numerous times." />
				<Feature 
					icon="fa-music"
					link="about-us/folk-song-and-dance.html"
					heading="Songs and Dances"
					text="Our repertoir of dances is extensive, and has been curated for over 25 years." />
				<Feature 
					icon="fa-paint-brush"
					link="about-us/craft-workshops.html"
					heading="Craft Workshops"
					text="Out side of dance we also have years craft workshops during the holidays." />
			</ Features>
		</Widget>

		<Widget widgetStyle="4" textCenter="true">
			<header>
				<h2>Arcue ut vel commodo</h2>
				<p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
			</header>
			<Actions vertical="true" thin="true">
				<Button to="#" fit="true" special="true">Activate</Button>
				<Button to="#" fit="true">Learn More</Button>
			</Actions>
		</Widget>

	</div>
)

export default IndexPage
