import React from "react";
import "../styles/RecipeScreen2.css";
import RecipeCard from "../components/recipeCard";
import { useParams, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RecipeScreen2() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/detail/${category}/${buttonText}/recipe/${title}`);
  };

  const { category, buttonText } = useParams();
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

  const data = [
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg",  
    },
    {
      title: "Coquilles Saint-Jacques gratinées 2",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
      image: "https://cache.magicmaman.com/data/photo/w600_c18/10f/9282-st-jacques1.jpg", 
    },
  ];

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
        <h1>
          {category} {">"} {buttonText}
        </h1>
        <h2 style={{ textAlign: "center", fontSize: 20, marginTop: "24px" }}>
          {textMap[buttonText]}
        </h2>
      </div>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <>
              <RecipeCard
                title={item.title}
                description={item.description}
                image={item.image}
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
  );
}
export default RecipeScreen2;
