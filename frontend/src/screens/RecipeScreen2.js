import React, { useState, useEffect } from "react";
import API from "../constants/Api";
import "../styles/RecipeScreen2.css";
import RecipeCard from "../components/recipeCard";
import { useNavigate, useParams } from "react-router-dom";
import C from "../constants/colors";
import TextMap from "../constants/TextMap";
import { AuthContext } from '../constants/Context';

import { AuthContext } from "../constants/Context";


function RecipeScreen2() {
  // put here your constants


  const auth_context = React.useContext(AuthContext);

  //const default_user_id = "65e31cf769050ff9bab2a6c1";
  let firstDeploy = true;

  const [data, setData] = React.useState([]);
  const { category, buttonText } = useParams();
  const navigate = useNavigate();
  const auth_context = React.useContext(AuthContext);

  const settingRecipesData = async (recipe, index) => {
    let response = await fetch(
      `${API.APIuri}/api/favoritesRecipes/checkFavoriteRecipe/user/${auth_context.id}/recipe/${recipe._id}`
    );

  const settingRecipesData = async(recipe, index) => {

    let response = 
    await fetch(`${API.APIuri}/api/favoritesRecipes/checkFavoriteRecipe/user/${auth_context.id}/recipe/${recipe._id}`);

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
  }, [buttonText]);

  const handleClick = (title, recipeID) => {
    navigate(
      `/detail/${category}/${buttonText}/recipe/${title}/recipeID/${recipeID}`
    );
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
      await fetch(
        `${API.APIuri}/api/favoritesRecipes/deleteFromFavorites/user/${auth_context.id}/recipe/${e}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

  const onClickFavorite = async(e, favorite) => {
    console.log('Clicked favorite button for card with id: ', e);
    if(!favorite) {
        await fetch(`${API.APIuri}/api/favoritesRecipes/create`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: auth_context.id,
                recipeID: e
            })
        });
    } else {
        await fetch(`${API.APIuri}/api/favoritesRecipes/deleteFromFavorites/user/${auth_context.id}/recipe/${e}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

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
          {TextMap[buttonText]}
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
                    title={item.title}
                    description={item.description}
                    favorite={item.favorite}
                    image={item.image}
                    onClick={() => handleClick(item.title, item.id)}
                    onClickFavorite={() =>
                      onClickFavorite(item.id, item.favorite)
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
