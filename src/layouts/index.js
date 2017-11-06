import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {Helmet} from 'react-helmet'

import appleTouchIcon from '../assets/favicons/apple-touch-icon.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'
import favicon16 from '../assets/favicons/favicon-16x16.png'
import safariPin from '../assets/favicons/safari-pinned-tab.svg'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import '../assets/css/main.css'


const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet>
			<title>Lajkonik - Song and Dance Ensemble</title>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			
			{ /* https://realfavicongenerator.net/ */ }
			<link rel="apple-touch-icon" sizes="76x76" href={appleTouchIcon} />
			<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
			<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
			<link rel="manifest" href="../assets/favicons/manifest.json" />
			<link rel="mask-icon" href={safariPin} color="#5bbad5" />
			<meta name="theme-color" content="#ffffff" />
		</Helmet>
		{/* Page Wrapper */}
		<div id="page-wrapper">
			<Header />
			{children()}
			<Footer />
		</div>
	</div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
