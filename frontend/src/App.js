import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
import Recipe from './screens/Recipe';

function App() {
  return (
    <div className="App">
      
        <Tabs>
          <div label="Chercher">
            {/*<SearchScreen2/>*/}
            <SearchScreen1/>
            {/* {<SearchScreen3 />} */}
          </div>
          <div label="Recettes">
          <Recipe/>
          </div>
          <div label="Profil" icon="person-circle">
          <SignIn />
          </div>
        </Tabs>
     
    </div>
  );
}

export default App;
