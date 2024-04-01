import React from "react";
import ImageComponent from "../components/ImageComponent";
import "../styles/ImageComponent.css";
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonRecipe.css";
import { useNavigate } from "react-router-dom";

function RecipeScreen1() {
  const navigate = useNavigate();

  const handleClick = (category, buttonText) => {
    navigate(`/detail/${category}/${buttonText}`);
  };
  return (
    <div className="recipe-screen">
      <ImageComponent />
      <div className="button-catégorie" style={{ textAlign: "center" }}>
        <h3 style={{ textDecoration: "underline" }}>CATEGORIES</h3>
        <div>
          <ButtonComponent
            type="primary"
            text="Entrée"
            onClick={() => handleClick("CATEGORIES", "Entrée")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Plats"
            onClick={() => handleClick("CATEGORIES", "Plats")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Desserts"
            onClick={() => handleClick("CATEGORIES", "Desserts")}
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-ingrédient" style={{ textAlign: "center" }}>
        <h3 style={{ textDecoration: "underline" }}>INGREDIENT</h3>
        <div>
          <ButtonComponent
            type="primary"
            text="Viandes"
            onClick={() => handleClick("INGREDIENT", "Viandes")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Poissons"
            onClick={() => handleClick("INGREDIENT", "Poissons")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Fruits"
            onClick={() => handleClick("INGREDIENT", "Fruits")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Légumes"
            onClick={() => handleClick("INGREDIENT", "Légumes")}
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-classique" style={{ textAlign: "center" }}>
        <h3 style={{ textDecoration: "underline" }}>LES CLASSIQUES </h3>
        <div>
          <ButtonComponent
            type="primary"
            text="Recettes pas chères"
            onClick={() => handleClick("LES CLASSIQUES", "Recettes pas chères")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Recette facile et rapide"
            onClick={() =>
              handleClick("LES CLASSIQUES", "Recette facile et rapide")
            }
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Recette anti-gaspillage"
            onClick={() =>
              handleClick("LES CLASSIQUES", "Recette anti-gaspillage")
            }
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-fête" style={{ textAlign: "center" }}>
        <h3 style={{ textDecoration: "underline" }}> SPECIALE FÊTE</h3>
        <div>
          <ButtonComponent
            type="primary"
            text="Ramadan"
            onClick={() => handleClick("SPECIALE FÊTE", "Ramadan")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Noël"
            onClick={() => handleClick("SPECIALE FÊTE", "Noël")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Saint-Valentin"
            onClick={() => handleClick("SPECIALE FÊTE", "Saint-Valentin")}
            fontSize={"15px"}
          />
        </div>
        <div>
          <ButtonComponent
            type="primary"
            text="Pâques"
            onClick={() => handleClick("SPECIALE FÊTE", "Pâques")}
            fontSize={"15px"}
          />
        </div>
      </div>
      <div class="rectangle"></div>
      <div className="button-Favoris" style={{ textAlign: "center" }}>
        <h3 style={{ textDecoration: "underline" }}>FAVORIS</h3>
        <div 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          <ButtonComponent
            type="primary"
            text="Voir mes favoris"
            // onClick={() => handleClick()}
            fontSize={"15px"}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeScreen1;
