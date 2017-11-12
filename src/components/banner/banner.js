import React from "react"
import Link from 'gatsby-link'
import banner from "./banner.module.scss"

export default () => 
<section id="banner" className={banner.banner}>
    <div className={banner.inner}>
        <h2>Lajkonik</h2>
        <p>Song &amp; Dance Ensemble</p>
    </div>
    <a href="#one" className={banner.more}></a>
</section>