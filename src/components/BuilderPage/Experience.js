import React from 'react';


class Experience extends React.Component {
    render() {
        return (
            <form className='Experience-info'>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' />
                <label htmlFor="organization">organization</label>
                <input type="text" id='organization' />
                <label htmlFor="from">From</label>
                <input type="date" id='from' />
                <label htmlFor="to">To</label>
                <input type="date" id='to'/>
                <label htmlFor="description">Description</label>
                <textarea id="description"  rows="4" ></textarea>
            </form>
        );
    }
}

export { Experience }