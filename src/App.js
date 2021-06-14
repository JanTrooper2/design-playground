import './styles/App.css';
import FireshipNav from './components/FireshipNav.js';
import LoremIpsum from './components/ipsum/LoremIpsum.js';
import CatIpsum from './components/ipsum/CatIpsum.js';
import DogIpsum from './components/ipsum/DogIpsum.js';
import Blog from './components/Blog.js';
import RestaurantScreen from './components/RestaurantScreen';
import FunStuff from './components/FunStuff.js';
import {Provider} from 'react-redux';
import store from './store';
import NotFound from './components/NotFound.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, useColorMode} from '@chakra-ui/react';

function App() {
  const {toggleColorMode} = useColorMode();

  return (
    <Router>
      <Provider store={store} className="App">
        <FireshipNav />
        <Button
          m="2"
          pos="absolute"
          top="0"
          right="0"
          onClick={toggleColorMode}
        >
          Toggle Dark Mode
        </Button>
        <main className="content">
          <Switch>
            <Route exact path="/">
              <LoremIpsum />
            </Route>
            <Route exact path="/restaurant">
              <RestaurantScreen />
            </Route>
            <Route exact path="/cat">
              <CatIpsum />
            </Route>
            <Route exact path="/dog">
              <DogIpsum />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/fun">
              <FunStuff />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </main>
      </Provider>
    </Router>
  );
}
export default App;
