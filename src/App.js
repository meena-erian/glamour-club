import React from 'react';
import './App.css';
import { PageContextProvider } from "./component/PageContext"

function App() {
  return (
    <PageContextProvider>
      <div className="App">
        <header className="App-header">
          <p>
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
    </PageContextProvider>
  );
}

export default App;
