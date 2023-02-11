import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header"  id="section1">
                <div>logo</div>
                <button><a href="#section1">Home</a></button>
                <button><a href="#section2">About</a></button>
                <button><a href="#section3">Templates</a></button>
                <button><a href="#section4">Resume Builder</a></button>
            </header>
        );
    }
}

export { Header };