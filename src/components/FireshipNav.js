import './FireshipNav.css';
import {ReactComponent as LightbulbSVG} from './../images/lightbulb.svg';
import {ReactComponent as RestaurantSVG} from './../images/restaurant.svg';
import {ReactComponent as CatSVG} from './../images/cat.svg';
import {ReactComponent as DogSVG} from './../images/dog.svg';
import {ReactComponent as FeedbackSVG} from './../images/feedback.svg';
import {Link} from 'react-router-dom';

const FireshipNav = props => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <LightbulbSVG className="svg-logo" />
            <span className="nav-desc">DesignPlay</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/restaurant" className="nav-link">
            <RestaurantSVG className="svg-item" />
            <span className="nav-desc">Restaurant</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cat" className="nav-link">
            <CatSVG className="svg-item" />
            <span className="nav-desc">Cats</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dog" className="nav-link">
            <DogSVG className="svg-item" />
            <span className="nav-desc">Dogs</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/feedback" className="nav-link">
            <FeedbackSVG className="svg-item" />
            <span className="nav-desc">Feedback</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FireshipNav;
