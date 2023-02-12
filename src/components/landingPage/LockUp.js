import React from 'react';
import userLogo from '../../assets/img/user.png';

class Lockup extends React.Component {
    render() {
        return (
            <div className="lockup">
                <div className="custom-shape-divider-top-1676153749">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                    </svg>
                </div>
                <div className="main-lockup">
                    <h1>The Best Resume Builder</h1>
                    <h3>A quick and easy way to create your professional resume.
                        Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With our Resume Maker, it’s quick, pain-free, and effective.
                        Fast and easy to use.</h3>
                    <button>Build my resume now</button>
                </div>
                <img src={userLogo} alt="user building a resume" />
                <div className="custom-shape-divider-bottom-1676156989">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        );
    }
}

export { Lockup };