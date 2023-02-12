import React from 'react';

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
                            <li>Email: triaki.nabil2@gmail.com</li>
                            <li>Phone: 555-555-5555</li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Me</h3>
                        <ul>
                            <li><a href="https://github.com/triaki-nabil-prog">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/triaki-nabil-87a9a9189/">Linkedin</a></li>
                            <li><a href="https://www.instagram.com/nabil_triaki/">Instagram</a></li>
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