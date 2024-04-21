import * as React from "react";
import { useEffect, useState, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import C from "../constants/colors";
import { APIuri } from "../constants/Api";
import RecipeScreen1 from "./RecipeScreen1";
import RecipeScreen2 from "./RecipeScreen2";
import RecipeScreen3 from "./RecipeScreen3";

//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function Recipe() {
  // put here your constants

  // put here your states

  // put here your functions and handlers

  function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return (
      <div style={{ position: "fixed", top: "0px", left: "0px" }}>
        {!isHomePage && (
          <div
            style={{ height: "36px", width: "36px", cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            <ion-icon
              name={"chevron-back-outline"}
              style={{ cursor: "pointer", color: C.green, fontSize: "30px" }}
            ></ion-icon>
          </div>
        )}
      </div>
    );
  }

  //put here your permanent operations

  //---------------------------------------------------------
  // Render your screen here
  return (
    <BrowserRouter>
      {/*<Navigation/>*/}
      <Routes>
        <Route index element={<RecipeScreen1 />} />
        <Route
          path="/detail/:category/:buttonText"
          element={<RecipeScreen2 />}
        />
        <Route
          path="/detail/:category/:buttonText/recipe/:title2/recipeID/:recipeID"
          element={<RecipeScreen3 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Recipe;

//Do not put styles in screens, use or put your new styles in ./src/index.css
