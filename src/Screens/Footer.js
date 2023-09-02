import React from 'react'
import '../Screens/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faInstagram, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from '../Images/Medibridge-logo.png';

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>Hospital</h4>
                            <ul>
                            <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">daignostic services</a></li>
                                <li><a href="#">contact us</a></li>
                                <li><a href="#"></a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                        <div class="footer-col">
                            <div class="social-links">
                            <img src={Logo} alt="Medi Bridge" className="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
