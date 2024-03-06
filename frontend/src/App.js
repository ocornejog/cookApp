// import React from "react";
// //import "./style.css/recipeCard.css";
// import RecipeCard from "./recipeCard.js";

// class App extends React.Component {
//   render() {
//     const title = "Coquiles Saint-jacques";
//     const description = `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche.
//     Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`;
//     return (
//       <div className="App">
//         <RecipeCard title={title} description={description} />
//       </div>
//     );
//   }
// }

// export default App;

//App.js
import React from "react";
import "./style.css/ButtonComponent.css";
import ButtonComponent from "./Components.js/ButtonComponent";
import "./App.css";

const App = () => {
  const handleButtonClick = () => {
    console.log("Bouton cliqué !");
  };

  return (
    <div className="btn">
      <div className="button_container_1">
        <ButtonComponent
          type="primary"
          text="Cliquez-moi !"
          onClick={handleButtonClick}
        />
      </div>
      <div className="button_container_2">
        <ButtonComponent
          type="secondary"
          text="Cliquez-moi aussi !"
          onClick={handleButtonClick}
        />
      </div>
      <div className="button_container_3">
        <ButtonComponent
          type="tertiary"
          text="Et moi aussi !"
          onClick={handleButtonClick}
          className="underline_text"
        />
      </div>
    </div>
  );
};

export default App;
