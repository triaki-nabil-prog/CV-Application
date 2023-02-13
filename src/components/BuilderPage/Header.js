import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className="header" id="section1">
                <img src={logo} alt="logo" />
                <div className="nav">
                    <Link to="/cv-application"><button>Home</button></Link>
                    <a href="#Preview"><button>Preview</button></a>
                    <a href="#section2"><button>About</button></a>
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