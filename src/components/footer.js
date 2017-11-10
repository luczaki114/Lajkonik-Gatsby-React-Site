import React from "react"
import Link from 'gatsby-link'
import footer from "../assets/sass/components/footer.module.scss"

import Icon from "./icon"

export default () => 
<footer className={footer.footer}>
    <ul className={footer.icons}>
        <li>
            <Link to="#">
                <Icon icon="fa-twitter" label="Twitter"/>
            </Link>
        </li>
        <li>
            <Link to="#">
                <Icon icon="fa-facebook" label="Facebook"/>
            </Link>
        </li>
        <li>
            <Link to="#">
                <Icon icon="fa-instagram" label="Instagram"/>
            </Link>
        </li>
        <li>
            <Link to="#">
                <Icon icon="fa-envelope-o" label="Email"/>
            </Link>
        </li>

    </ul>
    <ul className={footer.copyright}>
        <li>&copy; Lajkonik - Song and Dance Ensemble</li><li>Design: <Link to="#">Ireneusz Luczak</Link></li>
    </ul>
</footer>