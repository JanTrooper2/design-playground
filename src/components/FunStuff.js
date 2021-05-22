import React, {useState} from 'react';
import './FunStuff.css';
const FunStuff = props => {
  const [theme, setTheme] = useState('light');
  return (
    <article id="fun">
      <section className="card-list">
        <article className="card">
          <header className="card-header">
            <p>May 25th 2020</p>
            <h2>Card Tricks are fun</h2>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <p>August 15th 2020</p>
            <h2>Card Tricks are still fun</h2>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <p>February 30th 2021</p>
            <h2>Card Tricks continue to be fun</h2>
          </header>
        </article>
        <article className="card">
          <header className="card-header">
            <p>June 26th 2021</p>
            <h2>Card Tricks remain fun</h2>
          </header>
        </article>
      </section>
      <section className="polygon-emoji">
        <figure className="blue-eye"></figure>
      </section>
      <section className={theme + ' color-experiment'}>
        <ul className="dropdown">
          <li className="dropdown-item">
            <button onClick={e => setTheme('light')} id="light">
              light
            </button>
          </li>
          <li className="dropdown-item">
            <button onClick={e => setTheme('dark')} id="dark">
              dark
            </button>
          </li>
          <li className="dropdown-item">
            <button onClick={e => setTheme('transparent')} id="solarize">
              transparent
            </button>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default FunStuff;
