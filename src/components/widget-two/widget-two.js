import React from "react"

import pic1 from '../../assets/images/pic01.jpg'
import pic2 from '../../assets/images/pic02.jpg'
import pic3 from '../../assets/images/pic03.jpg'

export default () => 
<section id="two" className="wrapper alt style2">
    <section className="spotlight">
        <div className="image">
            <img src={pic1} alt="" />
        </div>
        <div className="content">
            <h2>Photo Gallery</h2>
            <p>Take a look at our recent and past trips.</p>
        </div>
    </section>
    <section className="spotlight">
        <div className="image">
            <img src={pic2} alt="" />
        </div>
        <div className="content">
            <h2>Video Gallery</h2>
            <p>Take a look at some past performances, interviews and promotional videos.</p>
        </div>
    </section>
    <section className="spotlight">
        <div className="image">
            <img src={pic3} alt="" />
        </div>
        <div className="content">
            <h2>Events</h2>
            <p>See our upcoming events and concert schedule</p>
        </div>
    </section>
</section>