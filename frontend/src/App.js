//import logo from './logo.svg';
import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import './styles/ButtonComponent.css'
//import {TestComponent} from './TestComponent';
import {TestComponent2} from './components/TestComponent2';
import ListItem from './components/ListItem';
import DropDownList from './components/DropDownList';
import Tabs from "./components/Tabs";
import ScreenTemplate from './screens/ScreenTemplate';

function App() {
  
  return (
    <div className="App">
      {/*
      <TestComponent2 name={'Hedi'} onChange={(e) => console.log('My name is', e)} />
      <div style={{width: '50%', marginTop: 16, display: 'flex', alignItems: 'center'}}>
        <DropDownList onSelect={(t, i) => console.log(t, i)}/>
      </div>
      */}
      <Tabs>
        <div label="Chercher">
          {/*
          Welcome to the tab, <em>Chercher</em>!
          */}
          <ScreenTemplate/>
        </div>
        <div label="Recettes">
          After a while, <em>Recettes</em>!
        </div>
        <div label="Profil" icon="person-circle">
          Nothing to see here, this tab is <em>Profil</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
