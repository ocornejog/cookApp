import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import './styles/ButtonComponent.css';

import C from './constants/colors';
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";

import RecipeScreen1 from "./screens/RecipeScreen1";
import RecipeScreen2 from "./screens/RecipeScreen2";
import RecipeScreen3 from "./screens/RecipeScreen3"; // Assurez-vous d'importer le nouveau composant d'écran ici

import SearchScreen1 from "./screens/SearchScreen1";
import SearchScreen2 from "./screens/SearchScreen2";
import SearchScreen3 from "./screens/SearchScreen3";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"; // Importez la page d'inscription
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
            <SignIn />
            {/*<Profile recettes={[["Cheese naan","Cette recette de la pâte à naan est excellente. L'amélioration consistant à y inclure du gruyère pour obtenir le cheese naan indien m'a été confiée par une relation indienne : je ne l'ai personnellement pas encore testée !! NDChef : Il est fréquent de voir utiliser de la pâte de gruyère de type Vache qui rit.",
              "https://www.papillesetpupilles.fr/wp-content/uploads/2006/11/Cheese-naans.jpg"],
              ["Cheese naan","Cette recette de la pâte à naan est excellente. L'amélioration consistant à y inclure du gruyère pour obtenir le cheese naan indien m'a été confiée par une relation indienne : je ne l'ai personnellement pas encore testée !! NDChef : Il est fréquent de voir utiliser de la pâte de gruyère de type Vache qui rit.",
              "https://www.papillesetpupilles.fr/wp-content/uploads/2006/11/Cheese-naans.jpg"]]}/>
            */}
          </div>
        </Tabs>
    </div>
  );
}

export default App;
