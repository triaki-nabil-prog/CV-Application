import React from 'react';


class PersonalInfo extends React.Component {
    render() {
        return (
            <form className='Personal-info'>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id='first-name' />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id='last-name' />
                <label htmlFor="email">Email</label>
                <input type="email" id='email' />
                <label for="phone">Phone Number</label>
                <input type="number" id="phone"/>
            </form>
        );
    }
}

export { PersonalInfo }