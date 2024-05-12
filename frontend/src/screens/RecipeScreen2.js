import React, { useState, useEffect } from "react";
import API from "../constants/Api";
import "../styles/RecipeScreen2.css";
import RecipeCard from "../components/recipeCard";
import { useNavigate, useParams } from "react-router-dom";
import C from "../constants/colors";
import TextMap from "../constants/TextMap";
import { AuthContext } from "../constants/Context";
import Spinner from "../components/Spinner";
import AlertModalFavoris from "../components/AlertModalFavoris"; // Importez AlertModal

function RecipeScreen2() {
  const auth_context = React.useContext(AuthContext);
  let firstDeploy = true;
  const [showPopup, setShowPopup] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [showIndicator, setShowIndicator] = useState(false);

  const [data, setData] = React.useState([]);
  const { category, buttonText } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 5;
  const navigate = useNavigate();

  const settingFavoritesRecipesData = async (recipe, index) => {
    let response = await fetch(`${API.APIuri}/api/recipes/recipe/${recipe.recipe_id}`,{
      method: 'GET',
      params: {
        userId: auth_context.id
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_context.token}`
      }
    });
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
  const handleNonClick = () => {
    // Ne rien faire pour maintenir l'état actuel des favoris
    setShowPopup(false); // Fermer la popup
  };

  const settingRecipesData = async (recipe, index) => {
    let response = await fetch(
      `${API.APIuri}/api/favoritesRecipes/checkFavoriteRecipe/user/${auth_context.id}/recipe/${recipe._id}`, {
        method: 'GET',
        params: {
          userId: auth_context.id
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_context.token}`
        }
    });
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
        fetch(`${API.APIuri}/api/recipes/recipesByTag/${buttonText}`,{
          method: 'GET',
          params: {
            userId: auth_context.id
          },
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth_context.token}`
          }
        })
          .then((response) => response.json())
          .then(async (data) => {
            console.log(data);
            setShowIndicator(true);
            for (let index = 0; index < data.length; index++) {
              const recipe = data[index];
              await settingRecipesData(recipe, index);
            }
            setShowIndicator(false);
          })
          .catch((err) => console.error(err));
      }
    }
  }, [buttonText]);

  const handleClick = (title, recipeID) => {
    navigate(
      `/recipe/detail/${category}/${buttonText}/recipe/${title}/recipeID/${recipeID}`
    );
  };

  const handleClickFavoris = async () => {
    fetch(
      `${API.APIuri}/api/favoritesRecipes/favoritesRecipes/user/${auth_context.id}`, {
        method: 'GET',
        params: {
          userId: auth_context.id
        },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth_context.token}`
        }
      }
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
          'Authorization': `Bearer ${auth_context.token}`
        },
        body: JSON.stringify({
          userID: auth_context.id,
          recipeID: e,
          userId: auth_context.id
        }),
      });
    } else {
      setSelectedRecipeId(e); // Enregistrer l'ID de la recette sélectionnée
      setShowPopup(true); // Ouvrir la popup si le favori est vrai
      return; // Sortez de la fonction sans modifier l'état de favorite
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


  const removeFromFavorites = async (recipeId) => {
    console.log("Removing recipe from favorites with id: ", recipeId);
    await fetch(
      `${API.APIuri}/api/favoritesRecipes/deleteFromFavorites/user/${auth_context.id}/recipe/${recipeId}`,
      {
        method: "DELETE",
        params: {
          userId: auth_context.id
        },
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${auth_context.token}`
        },
      }
    );
    setDeleteSuccess(true);
    setData((prevItems) =>
      prevItems.map((item) => {
        if (item.id === recipeId) {
          return { ...item, favorite: !item.favorite };
        }
        return item;
      })
    ); // Indique que la suppression a réussi
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
      {(showIndicator) &&
      <div style={{marginTop: "8px", marginBottom: "8px", width: '100%', alignItems: 'center',
      justifyContent: 'center'}}>
        <Spinner/>
      </div> 
      }
      {/* Render recipes */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {data
          .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
          .map((item, index) => (
            <RecipeCard
              key={index}
              title={item.title}
              description={item.description}
              favorite={item.favorite}
              image={item.image}
              onClick={() => handleClick(item.title, item.id)}
              onClickFavorite={() => onClickFavorite(item.id, item.favorite)}
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
            }}
          >
            {`Aucun résultat n'a été trouvé, essayez d'autres critères de recherche`}
          </div>
        )}
      </div>
      {/* Pagination */}
      <div style={{ marginTop: "20px", textAlign: "center", width: "100%" }}>
        {/* Flèche gauche */}
        <button
          onClick={() =>
            setCurrentPage(currentPage === 0 ? 0 : currentPage - 1)
          }
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: "#337D74",
            color: "#FFFFFF",
            border: "1px solid #337D74",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {"<"}
        </button>
        {Array.from(
          { length: Math.ceil(data.length / pageSize) },
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              style={{
                margin: "0 5px",
                padding: "5px 10px",
                backgroundColor: currentPage === index ? "#337D74" : "#FFFFFF",
                color: currentPage === index ? "#FFFFFF" : "#337D74",
                border: "1px solid #337D74",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              {index + 1}
            </button>
          )
        )}
        {/* Flèche droite */}
        <button
          onClick={() =>
            setCurrentPage(
              currentPage === Math.ceil(data.length / pageSize) - 1
                ? currentPage
                : currentPage + 1
            )
          }
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: "#337D74",
            color: "#FFFFFF",
            border: "1px solid #337D74",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {">"}
        </button>
      </div>
      {/* Affichage de la popup */}
      <AlertModalFavoris
        visible={showPopup}
        message="Voulez-vous supprimer cette recette de vos favoris ?"
        textButton1="Oui"
        textButton2="Non"
        onClickButton1={async () => {
          await removeFromFavorites(selectedRecipeId); // Appeler la fonction pour supprimer la recette des favoris
          setShowPopup(false); // Fermer la popup
        }}
        onClickButton2={handleNonClick}
      />
    </div>
  );
}

export default RecipeScreen2;
