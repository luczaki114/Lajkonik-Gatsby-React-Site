import React from 'react'
import Link from 'gatsby-link'

import styles from '../../layouts/interior.module.scss'

import Widget from '../../components/widget/widget'

const HighlightsPage = () => (
	<article className={[styles["interior-page"], styles["hightlights"]].join(" ")}>
		<header>
			<h2>HighLights</h2>
		</header>

		<Widget widgetStyle="5">
			<p>The Lajkonik dancers have graced many stages including those of the Chicago Public Libraries, the Chicago Cultural Center, the Children’s Museum, Daley Plaza, the Taste of Chicago, Millennium Park, Navy Pier and Polish Fest in Milwaukee. Lajkonik has represented the Chicago Polish Community four times at the International Folk Dance Festival in Rzeszów, Poland.  Additionally, Lajkonik has participated in the International Youth Folk Dance Festival in Iwonicz Zdroj, Poland.</p>
			<p>Since 1998 Lajkonik, has presented well-received annual winter concerts. In 2006 Lajkonik celebrated its 15 anniversary with a Gala Concert: “Znaszli ten kraj” – roughly, taking your homeland to heart, which received very enthusiastic reviews. A review of the concert by the Polish daily Dziennik Zwiazkowy described Lajkonik as: “brylantem wśród polonijnych zespołów folklorystycznych” – “a gem among Polish folk dance groups.”  Lajkonik's 20th anniversary in 2011 continued to showcase their ever-expanding repertoire.  The gala concert titled "Nie ma skrzydeł bez korzeni" - "No wings without roots" aptly presented just how much the ensemble had grown.</p>
			<p>Lajkonik continues to perform in numerous public concerts and private performances all over the Chicagoland area and the greater Midwest.  Selected highlights include Polish Days at Navy Pier, at Loyola University, at Independence Day Parades in Brookfield and Naperville, and at Children’s International Day in Naperville.</p>		
		</Widget>
	</article>
)

export default HighlightsPage
