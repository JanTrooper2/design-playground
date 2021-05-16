import './FeedbackForm.css';
import {Link} from 'react-router-dom';

const FeedbackForm = props => {
  return (
    <div className="feedback">
      <h2>Feedback Form</h2>
      <p>
        Normal Text with a <span>span</span> part.
      </p>
      <h3> Awesome</h3>
      <h3> Cool</h3>
      <h3> Radical</h3>
      <div className="feedback-form">
        <button className="feedback-button">Feedback</button>
        <div className="feedback-menu">
          <Link to="/cat">Cat</Link>
          <Link to="/dog">Dog</Link>
          <Link to="/">Back</Link>
        </div>
      </div>
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
    </div>
  );
};

export default FeedbackForm;
