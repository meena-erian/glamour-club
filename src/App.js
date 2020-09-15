import React from 'react';
import './App.css';
import { PageContextProvider } from "./component/PageContext";
import Wizard from "./component/Wizard";

function App() {
  return (
    <PageContextProvider>
      <div className="App">
        <header className="App-header">
            <Wizard />
        </header>
      </div>
    </PageContextProvider>
  );
}

export default App;
