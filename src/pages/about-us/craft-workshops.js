import React from 'react'
import Link from 'gatsby-link'

import styles from '../../layouts/interior.module.scss'

import Widget from '../../components/widget/widget'

const CraftWorkShopsPage = () => (
	<article className={[styles["interior-page"], styles["craft-workshops"]].join(" ")}>
		<header>
			<h2>Craft Workshops</h2>
		</header>

		<Widget widgetStyle="5">

		</Widget>
	</article>
)

export default CraftWorkShopsPage
