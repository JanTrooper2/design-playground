import './App.css';
import FireshipNav from './components/FireshipNav.js'
import RandomText from './components/RandomText.js'
function App() {
  return (
    <div className="App">
      <FireshipNav></FireshipNav>
      <main>
        <RandomText></RandomText>
      </main>
    </div>
  );
}
export default App;
