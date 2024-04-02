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
import MyRecipie from './components/MyRecipie'

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
          {/*<ProfileScreen1 recettes={[["Cheese naan","Cette recette de la pâte à naan est excellente. L'amélioration consistant à y inclure du gruyère pour obtenir le cheese naan indien m'a été confiée par une relation indienne : je ne l'ai personnellement pas encore testée !! NDChef : Il est fréquent de voir utiliser de la pâte de gruyère de type Vache qui rit.",
              "https://www.papillesetpupilles.fr/wp-content/uploads/2006/11/Cheese-naans.jpg"],
              ["Cheese naan","Cette recette de la pâte à naan est excellente. L'amélioration consistant à y inclure du gruyère pour obtenir le cheese naan indien m'a été confiée par une relation indienne : je ne l'ai personnellement pas encore testée !! NDChef : Il est fréquent de voir utiliser de la pâte de gruyère de type Vache qui rit.",
              "https://www.papillesetpupilles.fr/wp-content/uploads/2006/11/Cheese-naans.jpg"]]}/>
        */}
          {/*<ProfileScreen2/>*/}
          {/*<ProfileScreen3 currentPassword={"lourd"}/>*/}
          <ProfileScreen4/>
        </div>
      </Tabs>
    </div>
  );
}



export default App;
