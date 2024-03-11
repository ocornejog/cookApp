import * as React from "react";
import { useEffect, useState, useContext } from "react";

import C from "../constants/colors";
import { APIuri } from "../constants/Api";
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import DropDownList from "../components/DropDownList";
import ButtonComponent from "../components/ButtonComponent";
import CommentCard from "../components/CommentCards";
import RecipeCard from "../components/recipeCard";
import CommentCard2 from "../components/CommentCard2";

import "../style.css/ButtonComponent.css";
import "../style.css/CommentCards.css";

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function ScreenTemplate() {
  // put here your constants

  const testConstant = "I am a constant";
  //const auth_context = useContext(AuthContext); Constant to be used later

  // put here your states

  const [testState, setTestState] = useState("I am a state variable");

  // const title = "Coquiles Saint-jacques";
  // const description = `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche.
  //  Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`;

  // put here your functions and handlers

  const testFunction = async () => {
    console.log(`My current state variable value is : ${testState}`);
  };

  //put here your permanent operations

  useEffect(() => {
    testFunction();
  }, [testState]);

  //---------------------------------------------------------
  // Render your screen here
  return (
    <div className="screen-view-1" style={{ backgroundColor: C.white }}>
      <div
        className="screen-view-1"
        style={{ width: "95%", backgroundColor: C.white }}
      >
        {/* put your content here */}

        <DropDownList />
        {/* <ButtonComponent type="primary" text="Click me" onClick={testFunction}/> */}
      </div>

      <div className="Comment_Flexbox">
        <CommentCard />
      </div>

      <div className="Comment_Flexbox2">
        <CommentCard2
          name="Name"
          date={new Date()}
          starRating={4}
          comment="C'est une très bonne recette.Sa seule 
          erreur est la quantité de sel."
        />
      </div>

      {/* <div className="app">
         <RecipeCard title={title} description={description} />
        {" "}
      </div> */}
    </div>
  );
}

export default ScreenTemplate;

//Do not put styles in screens, use or put your new styles in ./src/index.css
