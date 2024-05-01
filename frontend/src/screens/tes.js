const fs = require("fs");
const extractQuantityAndName = (ingredientText) => {
  const regex = /^(\d+(\.\d+)?)?\s*(\w+)?\s*(.*)$/;
  const match = regex.exec(ingredientText);
  const quantity = match[1] ? parseFloat(match[1]) : null;
  const name = (match[3] ? match[3] + " " : "") + (match[4] ? match[4] : "");
  return { quantity, name };
};
const fetchData = async (categorie) => {
  const recipes = [];
  const response = await fetch(
    `https://api.edamam.com/search?app_id=900da95e&app_key=40698503668e0bb3897581f4766d77f9&q=${categorie}`
  );

  const data = await response.json();

  const recipesData = data.hits.map((item) => {
    const ingredients = item.recipe.ingredientLines.map((ingredientText) => {
      const { quantity } = extractQuantityAndName(ingredientText);
      return quantity;
    });
    return {
      _id: {
        $oid: Math.random().toString(16).substr(2, 24), // Génération d'un ID aléatoire
      },
      name: item.recipe.label,
      description: "Description manquante", // Ajoutez une description par défaut si elle est manquante
      type_of_cuisine: "Type de cuisine manquant", // Ajoutez le type de cuisine par défaut si il est manquant
      type_of_dishes: "Type de plat manquant", // Ajoutez le type de plat par défaut si il est manquant
      specific_regime: "Régime spécifique manquant", // Ajoutez le régime spécifique par défaut si il est manquant
      preparation_time: "Temps de préparation manquant", // Ajoutez le temps de préparation par défaut si il est manquant
      culinary_skill_level: "Niveau de compétence culinaire manquant", // Ajoutez le niveau de compétence culinaire par défaut si il est manquant
      nutritional_value: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ], // Ajoutez la valeur nutritionnelle par défaut si elle est manquante
      preparation_steps: ["Étapes de préparation manquantes"], // Ajoutez les étapes de préparation par défaut si elles sont manquantes
      photo: item.recipe.image,
      ingredients: item.recipe.ingredientLines.map((ingredient) =>
        translateToFrench(ingredient)
      ),
      quantity_ingredients: ingredients, // Ajoutez les quantités d'ingrédients par défaut si elles sont manquantes
      tags: ["Tags manquants"],
    }; // Ajoutez les tags par défaut si ils sont manquants
  });

  recipes.push(...recipesData);

  return recipes;
};

const fetchRecipesForList = async (list) => {
  const recipes = {};
  for (const query of list) {
    const recipesForQuery = await fetchData(query);
    recipes[query] = recipesForQuery;
  }
  return recipes;
};

const translateToFrench = (ingredient) => {
  // Mettez en place votre mécanisme de traduction ici
  // Par exemple, vous pouvez utiliser une API de traduction ou un dictionnaire
  // Pour cet exemple, je vais simplement retourner l'ingrédient tel quel
  return ingredient;
};

const list = ["ramadan", "viandes"]; // Votre liste d'éléments
fetchRecipesForList(list)
  .then((recipes) => {
    console.log(recipes);
    const jsonContent = JSON.stringify(recipes, null, 2);
    fs.writeFileSync("recettes.json", jsonContent);
    console.log("Fichier recettes.json créé avec succès.");
  })
  .catch((error) => console.error(error));
