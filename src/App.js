import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import router from './features/router/router'
import {withRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Counter />
        <div>{router}</div>
    </div>
  );
}

export default App;
