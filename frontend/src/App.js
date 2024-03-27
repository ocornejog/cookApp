import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";
import RecipeScreen1 from "./screens/RecipeScreen1";
import RecipeScreen2 from "./screens/RecipeScreen2";
import RecipeScreen3 from "./screens/RecipeScreen3"; // Assurez-vous d'importer le nouveau composant d'écran ici

function App() {
  return (
    <div className="App">
      <Router>
        <Tabs>
          <div label="Chercher">
            <ScreenTemplate />
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
          <div label="Profil" icon="person-circle"></div>
        </Tabs>
      </Router>
    </div>
  );
}

export default App;
