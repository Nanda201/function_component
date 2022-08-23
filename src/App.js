import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Test from './components/Test';
import { useState } from 'react';

function App() {
  const [data,setdata]=useState("ayesha")
  return (
    <div className="App">
      <h1>state and props</h1>
      <Counter />
      <Test abc={data}/>
    </div>
  );
}

export default App;
