import './FeedbackForm.css';
import { Link } from 'react-router-dom'

const FeedbackForm = (props) => {
  return (
    <div className="feedback">
      <h2>Feedback Form</h2>
      <p>Normal Text with a <span>span</span> part.</p>
      <h3> Awesome</h3>
      <h3> Cool</h3>
      <h3> Radical</h3>
      <div className="feedback-form">
        <button className="feedback-button">Feedback</button>
        <ul className="feedback-menu">
          <li>
            <Link to="/cat">Cat</Link>
          </li>
          <li>
            <Link to="/dog">Dog</Link>
          </li>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FeedbackForm
