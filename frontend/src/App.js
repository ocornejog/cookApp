import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import './styles/ButtonComponent.css';

import C from './constants/colors';
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";

import LogIn from './screens/LogIn';
import Search from './screens/Search';
import Recipe from './screens/Recipe';
import Profile from './screens/Profile';

function App() {

  return (
    <div className="App">
        <Tabs>
          <div label="Chercher">
            <Search/>
          </div>
          <div label="Recettes">
            <Recipe/>
          </div>
          <div label="Profil" icon="person-circle">
            {<Profile/>
            }
          </div>
          <div label="LogIn">
            <LogIn/>
          </div>
        </Tabs>
    </div>
  );
}


export default App;
