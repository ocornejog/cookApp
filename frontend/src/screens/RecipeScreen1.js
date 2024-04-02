import React from "react";
import ImageComponent from "../components/ImageComponent";
import "../styles/ImageComponent.css";
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonRecipe.css";
import { useNavigate } from "react-router-dom";
import C from "../constants/colors";

function RecipeScreen1() {
  const navigate = useNavigate();

  const handleClick = (category, buttonText) => {
    navigate(`/detail/${category}/${buttonText}`);
  };
  return (
    <div className="recipe-screen">
      <ImageComponent />
      <div className="button-catégorie" style={{ textAlign: "center", marginTop: '8px' }}>
        <div className="montserrat_700" style={{ color: C.black, fontSize: '20px', textAlign: 'center', textDecoration: "underline"}}>
          {`CATEGORIES`}
        </div>
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
      <div className="rectangle"></div>
      <div className="button-ingrédient" style={{ textAlign: "center", marginTop: '8px' }}>
        <div className="montserrat_700" style={{ color: C.black, fontSize: '20px', textAlign: 'center', textDecoration: "underline"}}>
          {`INGREDIENT`}
        </div>
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
      <div className="rectangle"></div>
      <div className="button-classique" style={{ textAlign: "center", marginTop: '8px' }}>
        <div className="montserrat_700" style={{ color: C.black, fontSize: '20px', textAlign: 'center', textDecoration: "underline"}}>
          {`LES CLASSIQUES`}
        </div>
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
      <div className="rectangle"></div>
      <div className="button-fête" style={{ textAlign: "center", marginTop: '8px' }}>
        <div className="montserrat_700" style={{ color: C.black, fontSize: '20px', textAlign: 'center', textDecoration: "underline"}}>
          {`SPECIALE FÊTE`}
        </div>
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
      <div className="rectangle"></div>
      <div className="button-Favoris" style={{ textAlign: "center", marginTop: '8px' }}>
        <div className="montserrat_700" style={{ color: C.black, fontSize: '20px', textAlign: 'center', textDecoration: "underline"}}>
          {`FAVORIS`}
        </div>
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
            onClick={() => console.log("My favorites button was pressed")}
            fontSize={"15px"}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeScreen1;
