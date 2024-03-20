import React from "react";
import ImageComponent from "../components/ImageComponent";
import "../styles/ImageComponent.css";
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonRecipe.css";

function RecipeScreen1() {
  const handleClick = (category, buttonText) => {
    console.log(category, ">", buttonText);
  };
  return (
    <div className="recipe-screen">
      <ImageComponent />
      <div className="button-catégorie">
        <h3>CATEGORIES</h3>
        <div className="button1Categorie">
          <ButtonComponent
            type="primary"
            text="Entrée"
            onClick={() => handleClick("CATEGORIES","Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button2Categorie">
          <ButtonComponent
            type="primary"
            text="Plats"
            onClick={() => handleClick("Plats")}
            fontSize={"15px"}
          />
        </div>
        <div className="button3Categorie">
          <ButtonComponent
            type="primary"
            text="Desserts"
            onClick={() => handleClick("Desserts")}
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-ingrédient">
        <h3>INGREDIENT</h3>
        <div className="button1Ingrédient">
          <ButtonComponent
            type="primary"
            text="Viandes"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button2Ingrédient">
          <ButtonComponent
            type="primary"
            text="Poissons"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button3Ingrédient">
          <ButtonComponent
            type="primary"
            text="Fruits"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button4Ingrédient">
          <ButtonComponent
            type="primary"
            text="Légumes"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-classique">
        <h3>LES CLASSIQUES </h3>
        <div className="button1Classique">
          <ButtonComponent
            type="primary"
            text="Recettes pas chères"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button2Classique">
          <ButtonComponent
            type="primary"
            text="Recette facile et rapide"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button3Classique">
          <ButtonComponent
            type="primary"
            text="Recette anti-gaspillage"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-fête">
        <h3> SPECIALE FÊTE</h3>
        <div className="button1Fête">
          <ButtonComponent
            type="primary"
            text="Ramadan"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button2Fête">
          <ButtonComponent
            type="primary"
            text="Noël"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button3Fête">
          <ButtonComponent
            type="primary"
            text="Saint-Valentin"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div className="button4Fête">
          <ButtonComponent
            type="primary"
            text="Pâques"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-Favoris">
        <h3>FAVORIS</h3>
        <div className="buttonFavoris">
          <ButtonComponent
            type="primary"
            text="Voir mes favoris"
            onClick={() => handleClick("Entrée")}
            fontSize={"15px"}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeScreen1;
