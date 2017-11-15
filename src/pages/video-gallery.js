import React from 'react'
import Link from 'gatsby-link'

import styles from '../layouts/interior.module.scss'

import Widget from '../components/widget/widget'

const SecondPage = () => (
	<article className={[styles["interior-page"], styles["about-us"]].join(" ")}>
		<header>
			<h2>About Us</h2>
		</header>

		<Widget widgetStyle="5">
			<h3>Lajkonik's Mission</h3>
			<p>Lajkonik’s mission is much deeper than promoting Polish folk culture through artistic dances, passionate songs and colorful performances throughout the United States. The group aims to acquaint Polish-Americans with the richness of their thousand year-old heritage, and to help build pride in Polish Americans through performances of their dances and songs. The group also encourages other Americans to learn about and appreciate Polish culture and traditions. This is done by performing at venues that are attended by individuals who would otherwise not be exposed to Polish culture, and by narrating in English, so that broader audiences can fully enjoy the presentations. These narratives describe the dances and costumes presented, explain Polish traditions and customs and give insights into Polish history.</p>

			<hr />

			<h4>Broader Goal</h4>
			<p>The ensemble also promotes a broader goal of providing its youth and audiences with access to the arts at a time when schools and public organization are cutting their funding for these types of programs. Even though, as a folk dance ensemble, Lajkonik occupies a niche in the arts, its members are still educated in music, dance and theater – artistic skills that have universal applications.</p>

		</Widget>
	</article>
)

export default SecondPage
