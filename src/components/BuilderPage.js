import React from 'react';
import { Footer } from "./landingPage/Footer.js";
import { About } from "./landingPage/About.js";
import { Header } from "./BuilderPage/Header.js";
import { Form } from "./BuilderPage/Form.js";
import { Preview } from "./BuilderPage/Preview.js";


class BuilderPage extends React.Component {
    render() {
        return (
            <div className="builder-page">
                <Header />
                <Form />
                <Preview />
                <About />
                <Footer />
            </div>
        );
    }
}

export { BuilderPage };