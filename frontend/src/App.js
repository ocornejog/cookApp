import React from 'react';
import './App.css';
import './styles/ButtonComponent.css';
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";
import SearchScreen1 from './screens/SearchScreen1';
import SearchScreen2 from './screens/SearchScreen2';

function App() {
  return (
    <div className="App">
      <Tabs>
        <div label="Chercher">
          <SearchScreen2/>
          {/*<SearchScreen1/>*/}
        </div>
        <div label="Recettes">
          <ScreenTemplate/>
        </div>
        <div label="Profil" icon="person-circle">
        </div>
      </Tabs>
    </div>
  );
}

export default App;