//import logo from './logo.svg';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
//import {TestComponent} from './TestComponent';
import {TestComponent2} from './TestComponent2';
import ListItem from './components/ListItem';

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

      <ListItem/>

    </div>
  );
}

export default App;
