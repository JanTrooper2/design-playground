import './App.css';
import FireshipNav from './components/FireshipNav.js'
import RandomText from './components/RandomText.js'
import FeedbackForm from './components/FeedbackForm.js'
import NotFound from './components/NotFound.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <FireshipNav />
        <main className="content">
          <Switch>
            <Route exact path="/">
              <RandomText />
            </Route>
            <Route exact path="/feedback">
              <FeedbackForm />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
export default App;
