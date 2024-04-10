import React, { useState } from 'react';
import './App.css';
import './styles/ButtonComponent.css';
import Tabs from "./components/Tabs";
import LogIn from './screens/LogIn';
import Search from './screens/Search';
import Recipe from './screens/Recipe';
import Profile from './screens/Profile';


const App = () => {
  const [activeTab, setActiveTab] = useState("Chercher");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
        <div label="Chercher">
          <Search/>
        </div>
        <div label="Recettes">
          <Recipe/>
        </div>
        <div label="Profil" icon="person-circle">
          <Profile/>
        </div>
        <div label="LogIn">
          <LogIn/>
        </div>
      </Tabs>
    </div>
  );
};

export default App;
