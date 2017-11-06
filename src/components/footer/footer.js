import React from "react"
import Link from 'gatsby-link'


export default () => 
<footer id="footer">
    <ul className="icons">
        <li><Link to="#" className="icon fa-twitter"><span className="label">Twitter</span></Link></li>
        <li><Link to="#" className="icon fa-facebook"><span className="label">Facebook</span></Link></li>
        <li><Link to="#" className="icon fa-instagram"><span className="label">Instagram</span></Link></li>
        <li><Link to="#" className="icon fa-envelope-o"><span className="label">Email</span></Link></li>
    </ul>
    <ul className="copyright">
        <li>&copy; Lajkonik - Song and Dance Ensemble</li><li>Design: <Link to="#">Ireneusz Luczak</Link></li>
    </ul>
</footer>