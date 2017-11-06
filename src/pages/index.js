import React from 'react'
import Link from 'gatsby-link'

import Banner from '../components/banner/banner'
import WidgetOne from '../components/widget-one/widget-one'
import WidgetTwo from '../components/widget-two/widget-two'
import WidgetThree from '../components/widget-three/widget-three'

const IndexPage = () => (
	<div>
		<Banner />
		<WidgetOne />
		<WidgetTwo />
		<WidgetThree />
	</div>
)

export default IndexPage
