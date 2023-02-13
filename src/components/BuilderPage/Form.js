import React from 'react';
import { PersonalInfo } from './PersonalInfo.js';
import { Experience } from './Experience.js';

class Form extends React.Component {
    render() {
        return (
            <div className="Form">
                <div className="custom-shape-divider-top-1676153749">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                    </svg>
                </div>
                <h1>Write your information</h1>
                <PersonalInfo />
                <Experience />
            </div>
        );
    }
}

export { Form }