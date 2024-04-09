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
          {<Profile recettes={[["Cheese naan","Cette recette de la pâte à naan est excellente. L'amélioration consistant à y inclure du gruyère pour obtenir le cheese naan indien m'a été confiée par une relation indienne : je ne l'ai personnellement pas encore testée !! NDChef : Il est fréquent de voir utiliser de la pâte de gruyère de type Vache qui rit.",
            "https://www.papillesetpupilles.fr/wp-content/uploads/2006/11/Cheese-naans.jpg"],
            ["Cheese naan","Cette recette de la pâte à naan est excellente. L'amélioration consistant à y inclure du gruyère pour obtenir le cheese naan indien m'a été confiée par une relation indienne : je ne l'ai personnellement pas encore testée !! NDChef : Il est fréquent de voir utiliser de la pâte de gruyère de type Vache qui rit.",
            "https://www.papillesetpupilles.fr/wp-content/uploads/2006/11/Cheese-naans.jpg"]]}/>
          }
        </div>
        <div label="LogIn">
          <LogIn/>
        </div>
      </Tabs>
    </div>
  );
};

export default App;
