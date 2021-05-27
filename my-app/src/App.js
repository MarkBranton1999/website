import Mark from './Mark.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Mark} className="App-logo"/>
        <h3>
          Hello, my name is Mark Branton and welcome to my website
        </h3>
        <p>
          I am a 4th year computer engineering student at the University of Waterloo who is always looking for new job opportunities.
        </p>
      </header>
    </div>
  );
}

export default App;
