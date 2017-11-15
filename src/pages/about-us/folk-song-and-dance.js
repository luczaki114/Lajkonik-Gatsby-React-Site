import React from 'react'
import Link from 'gatsby-link'

import styles from '../../layouts/interior.module.scss'

import Widget from '../../components/widget/widget'

const FolkSongAndDancePage = () => (
	<article className={[styles["interior-page"], styles["folk-song-and-dance"]].join(" ")}>
		<header>
			<h2>Folk Songs and Dance</h2>
		</header>

		<Widget widgetStyle="5">

		</Widget>
	</article>
)

export default FolkSongAndDancePage
