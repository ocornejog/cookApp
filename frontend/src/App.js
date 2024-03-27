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

function App() {
  return (
    <div className="App">
      <Router>
        <Tabs>
          <div label="Chercher">
            {/*<SearchScreen2/>*/}
            {/*<SearchScreen1/>*/}
            {<SearchScreen3 />}
          </div>
          <div label="Recettes">
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
          </div>
          <div label="Profil" icon="person-circle">
            <SignUp />
          </div>
        </Tabs>
      </Router>
    </div>
  );
}

export default App;
