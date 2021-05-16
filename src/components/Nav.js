import './Nav.css';

const Nav = props => {
  return (
    <nav>
      <div className="dropdown">
        <button className="dropbtn">ClickMe</button>
        <div className="dropdown-content">
          <a href="/">Link 1</a>
          <a href="/">Link 2</a>
          <a href="/">Link 3</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
