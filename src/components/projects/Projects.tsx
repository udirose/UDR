import React from 'react';
import './projects.css';

const Projects: React.FC = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className="projects-grid">
                <div className="project-item">
                    <iframe frameBorder="0" src="https://itch.io/embed/3270904?linkback=true&amp;border_width=0&amp;bg_color=000000&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=000000" width="100%" height="100%"><a href="https://udro.itch.io/powery">powery by UDR</a></iframe>
                </div>
                <div className="project-item">
                    <iframe frameBorder="0" src="https://itch.io/embed/2796076?linkback=true&amp;border_width=0&amp;bg_color=000000&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=000000" width="100%" height="100%"><a href="https://udro.itch.io/parry">parry! by UDR</a></iframe>
                </div>
                <div className="project-item">
                    <iframe frameBorder="0" src="https://itch.io/embed/1712966?linkback=true&amp;border_width=0&amp;bg_color=000000&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=000000" width="100%" height="100%"><a href="https://udro.itch.io/crossyhell">CrossyHell by UDR</a></iframe>
                </div>
                <div className="project-item">
                    <iframe frameBorder="0" src="https://itch.io/embed/2028826?linkback=true&amp;border_width=0&amp;bg_color=000000&amp;fg_color=eeeeee&amp;link_color=fa5c5c&amp;border_color=000000" width="100%" height="100%"><a href="https://udro.itch.io/bullethell">Bullet Hell Concept by UDR</a></iframe>
                </div>
                {/* Add more project items here */}
            </div>
        </section>
    );
}

export default Projects;