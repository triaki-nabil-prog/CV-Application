import React from 'react';
import userLogo from '../../assets/img/user.png';

class Lockup extends React.Component {
    render() {
        return (
            <div className="lockup">
                <div className="main-lockup">
                    <h1>The Best Resume Builder</h1>
                    <h3>A quick and easy way to create your professional resume. Fast and easy to use.</h3>
                    <button>Build my resume now</button>
                </div>
                <img src={userLogo} alt="user building a resume" />
            </div>
        );
    }
}

export { Lockup };