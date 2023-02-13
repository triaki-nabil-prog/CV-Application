import React from 'react';
import { Link } from "react-router-dom";

class Action extends React.Component {
    render() {
        return (
            <div className="action">
                <h2>it's free start building your resume now</h2>
                <Link to="/Builder"><button>Build</button></Link>
            </div>
        );
    }
}

export { Action };