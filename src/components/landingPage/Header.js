import React from 'react';
import logo from '../../assets/img/logo.png'

class Header extends React.Component {
    render() {
        return (
            <header className="header" id="section1">
                <img src={logo} alt="logo" />
                <div className="nav">
                    <button><a href="#section1">Home</a></button>
                    <button><a href="#section2">About</a></button>
                    <button><a href="#section3">Templates</a></button>
                    <button><a href="#section4">Build now</a></button>
                </div>
                <div className="custom-shape-divider-bottom-1676153311">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z" className="shape-fill" ></path>
                    </svg>
                </div>
            </header>
        );
    }
}

export { Header };