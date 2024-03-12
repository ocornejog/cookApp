import React from 'react';
import './App.css';
import './styles/ButtonComponent.css';
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";

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
        </div>
      </Tabs>
    </div>
  );
}

export default App;