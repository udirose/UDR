import React from 'react';
import logo from '../images/discord-logo-blue.png';

const Contact: React.FC = () => {
    return (
        <section>
            <h2>Contact UDR via Discord</h2>
            <a href="https://discordapp.com/users/221632445009625089" target="_blank" rel="noopener noreferrer">
                <img src={logo} alt="Discord" style={{ width: '200px', height: 'auto' }} />
            </a>
        </section>
    );
}

export default Contact;