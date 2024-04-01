import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import './styles/ButtonComponent.css';
import C from './constants/colors';
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";

/*
import RecipeScreen1 from "./screens/RecipeScreen1";
import RecipeScreen2 from "./screens/RecipeScreen2";
import RecipeScreen3 from "./screens/RecipeScreen3"; // Assurez-vous d'importer le nouveau composant d'écran ici
*/

import SearchScreen1 from "./screens/SearchScreen1";
import SearchScreen2 from "./screens/SearchScreen2";
import SearchScreen3 from "./screens/SearchScreen3";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"; // Importez la page d'inscription
import Search from './screens/Search';

function App() {

  return (
    <div className="App">
      <Tabs>
        <div label="Chercher">
          <Search/>
        </div>
        <div label="Recettes">
          {/*
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<RecipeScreen1 />} />
              <Route
                path="/detail/:category/:buttonText"
                element={<RecipeScreen2 />}
              />
              <Route
                path="/detail/:category/:buttonText/recipe/:title2"
                element={<RecipeScreen3 />}
              />
            </Routes>
          </BrowserRouter>
          */}
        </div>
        <div label="Profil" icon="person-circle">
          {/* Incluez les composants SignIn et SignUp */}
          <SignIn />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
