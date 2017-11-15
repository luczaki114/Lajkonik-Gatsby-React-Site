import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import classNames from 'classnames/bind';
import styles from './index.module.scss'
import debounce from '../utils/debounce.js'

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
		this.isPastBanner = debounce(this.isPastBanner.bind(this), 50);
		this.clickOutsideOfMenu = this.clickOutsideOfMenu.bind(this);
		this.state = {
			isLoading: true,
			menuOpen: false,
			isPastBanner: false,
		};
	}

	// The home page uses a banner and the header is initially invisible. 
	// Once you scroll past the banner, the header will have a background.
	isPastBanner () {
		let isHomePage = document.getElementById("banner") != null ;
		if (!isHomePage) {
			return;
		}
		let $bannerHeight = document.getElementById("banner").clientHeight
		let $windowOffsetTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

		if ($windowOffsetTop >= $bannerHeight && this.state.isPastBanner == false)  {
			this.setState({isPastBanner: true});
		} else if ($windowOffsetTop <= $bannerHeight && this.state.isPastBanner == true) {
			this.setState({isPastBanner: false});
		}
	}

	clickOutsideOfMenu () {
		if (this.state.menuOpen == true) {
			this.toggleMenu();
		}
	}

	toggleMenu () {
        var invertMenu = !this.state.menuOpen;
        this.setState({menuOpen: invertMenu})
    }

	componentDidMount () {

		let that = this;
		setTimeout(() => {
			that.setState({isLoading: false});
		}, 200)

		this.isPastBanner();
		window.addEventListener('scroll', this.isPastBanner);

	}
	
	componentWillUnmount () {
		window.removeEventListener('scroll', this.isPastBanner);
	}

    render () {
		let pageWrapperClasses = cx({
			pageWrapper: true,
            menuOpen: this.state.menuOpen
		});
		
		let pageClasses = cx({
			"page--loading": this.state.isLoading
		})

        return (
			<div className={pageClasses}>
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
		
				<div id="page-wrapper" onClick={this.clickOutsideOfMenu} className={pageWrapperClasses}>
					<Header isPastBanner={this.state.isPastBanner} toggleMenu={this.toggleMenu} menuOpen={this.state.menuOpen} />
					{this.props.children()}
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
