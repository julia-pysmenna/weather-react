import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
