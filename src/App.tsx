import React from 'react';
import logo from './logo.svg';
import './App.css';
import MetaMaskLogin from 'pages/MetaMaskLogin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MetaMask Login</h1>
        <MetaMaskLogin />
        {/* <Test /> */}
      </header>
    </div>
  );
}

export default App;
