import React from 'react';
import About from './components/About';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';
import itch from './images/itch.svg';

const App: React.FC = () => {
    return (
        <div>
            <header>
                <h1>UDR GAMES</h1><a href="https:udro.itch.io" target="_blank" rel="noopener noreferrer">
                    <img src={itch} alt="itch" style={{ width: '200px', height: 'auto' }} />
                </a>
            </header>
            <main>
                <Projects />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;