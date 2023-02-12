import React from 'react';
import github from '../../assets/img/github.svg';
import linkedin from '../../assets/img/linkedin.svg';
import insta from '../../assets/img/instagram.svg';
import email from '../../assets/img/email.svg';
import phone from '../../assets/img/phone.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-container">
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#section1">Home</a></li>
                            <li><a href="#section2">About</a></li>
                            <li><a href="#section3">Templates</a></li>
                            <li><a href="#section4">Resume Builder</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Me</h3>
                        <ul>
                            <li><img src={email} alt="email" /> <p>triaki.nabil2@gmail.com</p></li>
                            <li><img src={phone} alt="phone" /> <p>+213 0675 31 03 97</p></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Me</h3>
                        <ul>
                            <li><a href="https://github.com/triaki-nabil-prog"><img src={github} alt="github" /></a></li>
                            <li><a href="https://www.linkedin.com/in/triaki-nabil-87a9a9189/"><img src={linkedin} alt="Linkedin" /></a></li>
                            <li><a href="https://www.instagram.com/nabil_triaki/"><img src={insta} alt="Instagram" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2023 Practice Web Development | All Rights Reserved
                </div>
            </footer>
        );
    }
}

export { Footer };