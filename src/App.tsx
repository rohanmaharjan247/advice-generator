import React from 'react';
import { ReactComponent as Divider } from './images/pattern-divider-mobile.svg';
import { ReactComponent as Dice } from './images/icon-dice.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hook';
import {
  fetchRandomAdvice,
  selectAdviceStatus,
  selectErrorMessage,
  selectRandomAdvice,
} from './features/adviceSlice';

function App() {
  const randomAdvice = useAppSelector(selectRandomAdvice);
  const status = useAppSelector(selectAdviceStatus);
  const error = useAppSelector(selectErrorMessage);

  const randomAdviceDispatch = useAppDispatch();

  const getRandomAdvice = () => {
    randomAdviceDispatch(fetchRandomAdvice());
  };

  if (status === 'failed') return <p>{error}</p>;

  return (
    <>
      <main className="app">
        <div className="card">
          <p className="card-header">Advice #{randomAdvice?.slip?.id}</p>

          {status === 'loading' ? (
            <p>Loading...</p>
          ) : (
            <p className="card-content">{randomAdvice?.slip?.advice || ''} </p>
          )}

          <Divider className="card-divider" />
          <button
            type="button"
            id="random-advice"
            aria-label="random-advice"
            className="card-button"
            onClick={getRandomAdvice}
          >
            <Dice />
          </button>
        </div>
      </main>
      <div className="attribution">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by Rohan Maharjan.
      </div>
    </>
  );
}

export default App;
