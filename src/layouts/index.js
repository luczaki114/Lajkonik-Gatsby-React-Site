import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classNames from 'classnames/bind';
import styles from './index.module.scss'

import appleTouchIcon from '../assets/favicons/apple-touch-icon.png'
import favicon32 from '../assets/favicons/favicon-32x32.png'
import favicon16 from '../assets/favicons/favicon-16x16.png'
import safariPin from '../assets/favicons/safari-pinned-tab.svg'

import Header from '../components/header/header'
import Menu from "../components/menu/menu"
import Footer from '../components/footer/footer'

let cx = classNames.bind(styles);

export default class TemplateWrapper extends React.Component {  
	constructor (props) {
		super(props);
		this.toggleMenu = this.toggleMenu.bind(this);
		this.state = {
			menuOpen: false
		};
	}

	toggleMenu () {
        var invertMenu = !this.state.menuOpen;
        this.setState({menuOpen: invertMenu})
    }

    render () {
		let className = cx({
			pageWrapper: true,
            menuOpen: this.state.menuOpen
        });

        return (
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
		
				<div id="page-wrapper" className={className}>
					<Header toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} />
					{this.props.children}
					<Footer />
				</div>
				<Menu toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} />
			</div>
        )
    }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
