import React, { useState, useEffect } from "react";
import API from "../constants/Api";
import "../styles/RecipeScreen2.css";
import RecipeCard from "../components/recipeCard";
import { useNavigate, useParams } from "react-router-dom";
import C from "../constants/colors";
import TextMap from "../constants/TextMap";
import { AuthContext } from "../constants/Context";

import AlertModalFavoris from "../components/AlertModalFavoris"; // Importez AlertModal

function RecipeScreen2() {
  const auth_context = React.useContext(AuthContext);
  let firstDeploy = true;

  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [showPopup, setShowPopup] = useState(false); // Utilisez l'état pour contrôler la visibilité de la popup
  const pageSize = 5;
  const { category, buttonText } = useParams();
  const navigate = useNavigate();

  const settingFavoritesRecipesData = async (recipe, index) => {
    let response = await fetch(
      `${API.APIuri}/api/recipes/recipe/${recipe.recipe_id}`
    );
    let recipeData = await response.json();

    const newItem = {
      id: recipeData[0]._id,
      title: recipeData[0].name,
      description: recipeData[0].description,
      image: recipeData[0].photo,
      favorite: true,
    };

    setData((prevRecipes) => [...prevRecipes, newItem]);
  };

  const settingRecipesData = async (recipe, index) => {
    let response = await fetch(
      `${API.APIuri}/api/favoritesRecipes/checkFavoriteRecipe/user/${auth_context.id}/recipe/${recipe._id}`
    );
    let myFavorite = await response.json();

    const newItem = {
      id: recipe._id,
      title: recipe.name,
      description: recipe.description,
      image: recipe.photo,
      favorite: myFavorite.length !== 0 ? true : false,
    };

    setData((prevRecipes) => [...prevRecipes, newItem]);
  };

  useEffect(() => {
    if (
      typeof buttonText === "string" &&
      buttonText.length !== 0 &&
      firstDeploy === true
    ) {
      firstDeploy = false;
      if (buttonText === "Favoris") {
        handleClickFavoris();
      } else {
        fetch(`${API.APIuri}/api/recipes/recipesByTag/${buttonText}`, {})
          .then((response) => response.json())
          .then(async (data) => {
            console.log(data);
            for (let index = 0; index < data.length; index++) {
              const recipe = data[index];
              await settingRecipesData(recipe, index);
            }
          })
          .catch((err) => console.error(err));
      }
    }
  }, [buttonText]);

  const handleClick = (title, recipeID) => {
    navigate(
      `/detail/${category}/${buttonText}/recipe/${title}/recipeID/${recipeID}`
    );
  };

  const handleClickFavoris = async () => {
    fetch(
      `${API.APIuri}/api/favoritesRecipes/favoritesRecipes/user/${auth_context.id}`
    )
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
          const favoris = data[index];
          await settingFavoritesRecipesData(favoris, index);
        }
      })
      .catch((err) => console.error(err));
  };

  const onClickFavorite = async (e, favorite) => {
    console.log("Clicked favorite button for card with id: ", e);
    if (!favorite) {
      await fetch(`${API.APIuri}/api/favoritesRecipes/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: auth_context.id,
          recipeID: e,
        }),
      });
    } else {
      // Ouvrir la popup si le favori est vrai
      setShowPopup(true);
    }
    setData((prevItems) =>
      prevItems.map((item) => {
        if (item.id === e) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    );
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
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
        <h2
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: "24px",
            color: "white",
          }}
        >
          {TextMap[buttonText]}
        </h2>
      </div>
      {/* Render recipes */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {currentPage !== 0 && (
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              margin: "8px",
              backgroundColor: "#337D74",
              border: "1px solid white",
              color: "white",
            }}
          >
            Prev
          </button>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.length !== 0 &&
            data
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map((item, index) => (
                <RecipeCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  favorite={item.favorite}
                  image={item.image}
                  onClick={() => handleClick(item.title, item.id)}
                  onClickFavorite={() =>
                    onClickFavorite(item.id, item.favorite)
                  }
                  style={{ margin: "8px" }}
                />
              ))}
          {data.length === 0 && (
            <div
              className="montserrat_700"
              style={{
                color: C.greenLight,
                fontSize: "20px",
                textAlign: "center",
                width: "100%",
                marginTop: "56px",
                marginBottom: "16px",
                color: "white",
              }}
            >
              {`Aucun résultat n'a été trouvé, essayez d'autres critères de recherche`}
            </div>
          )}
        </div>
        {currentPage !== Math.ceil(data.length / pageSize) - 1 && (
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(data.length / pageSize) - 1}
            style={{
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              margin: "20px",
              backgroundColor: "#337D74",
              border: "1px solid white",
              color: "white",
            }}
          >
            Next
          </button>
        )}
      </div>
      {/* Affichage de la popup */}
      <AlertModalFavoris
        visible={showPopup}
        message="Voulez-vous supprimer cette recette de vos favoris ?"
        textButton1="Oui"
        textButton2="Non"
        onClickButton1={async () => {
          // Actions à effectuer lors du clic sur le bouton "Oui" dans la popup
          // Par exemple, supprimer la recette des favoris et fermer la popup
          setShowPopup(false); // Fermer la popup
          // Ajoutez ici la logique pour supprimer la recette des favoris
        }}
        onClickButton2={() => {
          // Actions à effectuer lors du clic sur le bouton "Non" dans la popup
          // Par exemple, juste fermer la popup
          setShowPopup(false); // Fermer la popup
        }}
      />
    </div>
  );
}

export default RecipeScreen2;
