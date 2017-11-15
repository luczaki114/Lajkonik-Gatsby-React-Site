import React from 'react'
import Link from 'gatsby-link'

import styles from '../../layouts/interior.module.scss'

import Widget from '../../components/widget/widget'

const HistoryPage = () => (
	<article className={[styles["interior-page"], styles["history"]].join(" ")}>
		<header>
			<h2>History</h2>
		</header>

		<Widget widgetStyle="5">
		<h3>Lajkonik's Mission</h3>
		<p>The Polish Song &amp; Dance Ensemble Lajkonik, or Lajkonik for short, is a group which focuses on promoting Polish folk culture through artistic dances, passionate songs and colorful performances. Lajkonik’s four performing groups present a variety of national and regional Polish dances, which feature traditional dynamic steps and songs sung in the original language. The Lajkonik, which describes a masquerading Tatar warrior on his horse, became a symbol of Poland’s victory over the Tatars in 1241, and still plays an important role in the Krakowiak, the traditional dance of the people of Krakow.</p>
		<p>Lajkonik was founded in the fall of 1991 to foster Polish culture and tradition in the United States.  The founders of Lajkonik and its  first choreographers and instructors were Ewa and Marek Kus who managed the ensemble until 1997.  Lajkonik was established at the Polish Mission Holy Trinity Church in Chicago with the permission of father Wladyslaw Gowin, S.Ch., who was Mission's Director at that time. The Statute of the ensemble, signed by father Wladyslaw Gowin, emphasises a direct affiliation of Lajkonik with The Holy Trinity Polish Mission.The current director of Lajkonik is father Andrzej Maślejak, S.Ch.</p>
		<hr />
		<p>Lajkonik is a member of the Polish National Alliance, Group 3241, and the Polish Folk Dance Association of America. </p>
		<hr />
		<p>In its first year, Lajkonik consisted of merely 12 dancers.  That number increased tenfold over the next 6 years. At present, over 120 young people dance in Lajkonik.  In the spring of 1997, Halina Misterka became the Artistic Director of Lajkonik. She is also the choreographer and instructor of Grupa Reprezentacyjna (Representative Ensemble). Other groups practice and rehearse under the direction of Malgorzata Lyda. Marta Dudek has been Music Director and accompanist of the ensemble since 1992. Maria Grzebień has been Lajkonik’s Administrative Director since 2002. All important decisions regarding the ensemble are made by the Advisory Committee, consisting of instructors and volunteering parents.</p>
		</Widget>
	</article>
)

export default HistoryPage
