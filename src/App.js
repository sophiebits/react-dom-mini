import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [showLogo, setShowLogo] = React.useState(true);

  let [color, setColor] = React.useState('red');
  React.useEffect(() => {
    let colors = ['red', 'green', 'blue'];
    let i = 0;
    let interval = setInterval(() => {
      i++;
      setColor(colors[i % 3]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="App"
      onClick={() => {
        setShowLogo(show => !show);
      }}
    >
      <header className="App-header">
        {showLogo && <img src={logo} className="App-logo" alt="logo" />}
        <p bgColor={color}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
