import "./App.css";

import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
        <p>
          <a
            href="https://github.com/julia-pysmenna/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Julia Pysmenna
        </p>
      </header>
    </div>
  );
}

export default App;
