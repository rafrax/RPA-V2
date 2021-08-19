import React from 'react';
import NavBar from './navBar';
import './styles/styles.css';

const Error = () => {
    return (
        <div>
            <NavBar />
            <h1>Esta pagina no existe</h1>
            <img  className="center" src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/153493-apps-news-chrome-s-dinosaur-game-has-been-upgraded-with-weapons-image1-3oqmgiuytg.jpg"></img>
        </div>
    );
};

export default Error;