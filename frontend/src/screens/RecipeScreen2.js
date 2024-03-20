import React from "react";
import "../styles/RecipeScreen2.css";
import RecipeCard from "../components/recipeCard";

function RecipeScreen2() {
  const data = [
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées 2",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
    {
      title: "Coquilles Saint-Jacques gratinées",
      description:
        "Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !",
    },
  ];

  return (
    <div className="recipe-screen2">
      <div
        className="titre"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1>
          “Voyagez au cœur des saveurs : Découvrez nos délicieuses entrées pour
          éveiller vos papilles”{" "}
        </h1>
      </div>
      {data.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <>
              <RecipeCard
                title={item.title}
                description={item.description}
                onClick={() =>
                  console.log("Recipe card has just been clicked!")
                }
                onClickFavorite={(e) =>
                  console.log("My favorite status is: ", e)
                }
              />
              {index !== 4 && index !== 9 && <div class="rectangle2" />}
            </>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default RecipeScreen2;
