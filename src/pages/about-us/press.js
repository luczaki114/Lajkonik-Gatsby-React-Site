import React from 'react'
import Link from 'gatsby-link'

import styles from '../../layouts/interior.module.scss'

import Widget from '../../components/widget/widget'

const PressPage = () => (
	<article className={[styles["interior-page"], styles["about-us"]].join(" ")}>
		<header>
			<h2>Press</h2>
		</header>

		<Widget widgetStyle="5">

		</Widget>
	</article>
)

export default PressPage
