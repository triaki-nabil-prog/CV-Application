import React from 'react';
import executive from '../../assets/img/executive-resume-template-1.png';
import professional from '../../assets/img/professional-resume-template.png';
import simple from '../../assets/img/simple-resume-template-1.png';

class Template extends React.Component {
    render() {
        return (
            <div className="templates" id="section3">
                <h1>Resume Templates</h1>
                <img src={executive} alt="" />
                <h2>Executive</h2>
                <img src={professional} alt="" />
                <h2>Professional</h2>
                <img src={simple} alt="" />
                <h2>Simple</h2>
            </div>
        );
    }
}

export { Template };