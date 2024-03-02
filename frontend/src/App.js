//import logo from './logo.svg';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
//import {TestComponent} from './TestComponent';
import {TestComponent2} from './TestComponent2';
import ListItem from './components/ListItem';
import DropDownList from './components/DropDownList';

function App() {
  const [name, setName] = useState('');
  useEffect(() => {
    setName('Hedi');
  }, []);

  useEffect(() => {
    console.log(name);
  }, [name]);
  
  

  return (
    <div className="App">
      <TestComponent2 name={'Hedi'} onChange={(e) => console.log('My name is', e)} />
      <div style={{width: '50%', marginTop: 16, display: 'flex', alignItems: 'center'}}>
        <DropDownList onSelect={(t, i) => console.log(t, i)}/>
      </div>

    </div>
  );
}

export default App;
