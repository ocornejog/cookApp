import React from 'react';
import './App.css';
import './styles/ButtonComponent.css';
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";
import UserCard from './components/UserCard';
import ButtonComponent from './components/ButtonComponent';
import C from './constants/colors';
import ProfileScreen1 from './screens/ProfileScreen1';
import ProfileScreen2 from './screens/ProfileScreen2';
import ProfileScreen3 from './screens/ProfileScreen3';
import ProfileScreen4 from './screens/ProfileScreen4';

function App() {
  return (
    <div className="App">
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
          <ProfileScreen3/>
        </div>
      </Tabs>
    </div>
  );
}

export default App;

