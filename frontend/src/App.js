import React from 'react';
import './App.css';
import './styles/ButtonComponent.css';
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";
import RecipeScreen1 from './screens/RecipeScreen1';
import RecipeScreen2 from './screens/RecipeScreen2';

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
          <RecipeScreen1/>
          {/* <RecipeScreen2/> */}
        </div>
        <div label="Profil" icon="person-circle">
        </div>
      </Tabs>
    </div>
  );
}

export default App;