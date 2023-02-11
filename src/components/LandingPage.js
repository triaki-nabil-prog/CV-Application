import React from 'react';
import { Header } from "./landingPage/Header.js";
import { Lockup } from "./landingPage/LockUp.js";
import { Template } from "./landingPage/ResumeTemplate.js";
import { About } from "./landingPage/About.js";
import { Action } from "./landingPage/EndAction.js";
import { Footer } from "./landingPage/Footer.js";

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-page">
                <Header />
                <Lockup />
                <Template />
                <About />
                <Action />
                <Footer />
            </div>
        );
    }
}

export { LandingPage };