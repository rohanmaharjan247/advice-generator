import React from 'react';
import { ReactComponent as Divider } from './images/pattern-divider-mobile.svg';
import { ReactComponent as Dice } from './images/icon-dice.svg';
import './App.css';

function App() {
  return (
    <>
      <main className="app">
        <div className="card">
          <p className="card-header">Advice #117</p>
          <p className="card-content">
            It is easy to sit up and take notice, what's difficult is getting up
            and taking action.
          </p>
          <Divider className="card-divider" />
          <button className="card-button">
            <Dice />
          </button>
        </div>
        {/* Advice #<!-- Advice ID goes here --> */}

        {/* "<!-- Advice text goes here -->" */}
      </main>
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Rohan Maharjan</a>.
      </div>
    </>
  );
}

export default App;
