import React, { useEffect, useState } from "react";
import RecipeCard from "../components/recipeCard";
import API from "../constants/Api";

function FavoriteRecipesScreen() {
  const default_user_id = "65e31cf769050ff9bab2a6c1";
  const [data, setData] = useState([]);

  return (
    <div>
      {data.map((recipe, index) => (
        <RecipeCard
          key={index}
          title={recipe.title}
          description={recipe.description}
          favorite={true}
          image={recipe.image}
        />
      ))}
    </div>
  );
}

export default FavoriteRecipesScreen;
