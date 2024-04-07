import React, { useState, useEffect } from "react";
import API from "../constants/Api";
import "../styles/RecipeScreen2.css";
import RecipeCard from "../components/recipeCard";
import { useNavigate, useParams } from "react-router-dom";
import C from "../constants/colors";

function RecipeScreen2() {
  const [data, setData] = React.useState([]);
  const { category, buttonText } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API.APIuri}/api/recipes/recipesByTag/${buttonText}`, {})
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, [buttonText]);

  const handleClick = (title) => {
    navigate(`/detail/${category}/${buttonText}/recipe/${title}`);
  };

  const textMap = {
    Entrée: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Voyagez au cœur des saveurs : Découvrez nos délicieuses entrées pour
        éveiller vos papilles"
      </span>
    ),
    Plats: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Savourez la richesse de nos plats principaux"
      </span>
    ),
    Desserts: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Plongez dans la douceur de nos desserts irrésistibles"
      </span>
    ),
    Viandes: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Découvrez la tendresse de nos viandes sélectionnées"
      </span>
    ),
    Poissons: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Explorez la fraîcheur de nos poissons du jour"
      </span>
    ),
    Fruits: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Goûtez à la douceur de nos fruits juteux"
      </span>
    ),
    Légumes: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Appréciez la saveur de nos légumes de saison"
      </span>
    ),
    Ramadan: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Célébrez le Ramadan avec nos recettes traditionnelles"
      </span>
    ),
    Noël: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Faites briller votre table de Noël avec nos recettes festives"
      </span>
    ),
    Pâques: (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Fêtez Pâques avec nos recettes gourmandes"
      </span>
    ),
    "Saint-Valentin": (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Célébrez la Saint-Valentin avec nos recettes romantiques"
      </span>
    ),

    "Recettes pas chères": (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Cuisinez malin avec nos recettes économiques"
      </span>
    ),
    "Recette facile et rapide": (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Cuisinez en un clin d'œil avec nos recettes express"
      </span>
    ),
    "Recette anti-gaspillage": (
      <span
        style={{
          fontFamily: "Montaga",
          fontSize: "32px",
          color: "black",
          fontWeight: "normal",
        }}
      >
        "Cuisinez malin avec nos recettes anti-gaspi"
      </span>
    ),
  };

  return (
    <div className="recipe-screen2">
      <div
        style={{
          width: "100%",
          textAlign: "left",
          fontSize: "6px",
          color: "grey",
          marginLeft: "20px",
          marginTop: "24px",
        }}
      >
        <div
          className="montserrat_700"
          style={{
            fontSize: "11px",
            color: C.grey,
            textAlign: "left",
            width: "100%",
          }}
        >
          {category} {">"} {buttonText}
        </div>
        <h2 style={{ textAlign: "center", fontSize: 20, marginTop: "24px" }}>
          {textMap[buttonText]}
        </h2>
      </div>
      {data.length !== 0 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            padding: "10px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          {data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <>
                  <RecipeCard
                    title={item.name}
                    description={item.description}
                    image={item.photo}
                    onClick={() => handleClick(item.title)}
                    onClickFavorite={(e) =>
                      console.log("My favorite status is: ", e)
                    }
                  />
                </>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <div
          className="montserrat_700"
          style={{
            color: C.greenLight,
            fontSize: "20px",
            textAlign: "center",
            width: "100%",
            marginTop: "56px",
            marginBottom: "16px",
          }}
        >
          {`Aucun résultat n'a été trouvé, essayez d'autres critères de recherche`}
        </div>
      )}
    </div>
  );
}
export default RecipeScreen2;
