import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cuisine: null,
    cuisineComplement: null,
    dish: null,
    diet: null,
    preparationTime: null,
    culinaryProficiency: null,
    popularity: null,
    ingredients: null,
    nutritionalValue: null,
    amountPeople: null,
    searchText: null,
    specificRecipe: null
}
export const navSlice= createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setCuisine: (state, action) => {
            state.cuisine = action.payload;
        },
        setCuisineComplement: (state, action) => {
            state.cuisineComplement = action.payload;
        },
        setDish: (state, action) => {
            state.dish = action.payload;
        },
        setDiet: (state, action) => {
            state.diet = action.payload;
        },
        setPreparationTime: (state, action) => {
            state.preparationTime = action.payload;
        },
        setCulinaryProficiency: (state, action) => {
            state.culinaryProficiency = action.payload;
        },
        setPopularity: (state, action) => {
            state.popularity = action.payload;
        },
        setIngredients: (state, action) => {
            state.ingredients = action.payload;
        },
        setNutritionalValue: (state, action) => {
            state.nutritionalValue = action.payload;
        },
        setAmountPeople: (state, action) => {
            state.amountPeople = action.payload;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setSpecificRecipe: (state, action) => {
            state.specificRecipe = action.payload;
        }
    },
});

export const { setCuisine, setCuisineComplement, setDish, setDiet, setPreparationTime, setCulinaryProficiency, setPopularity, 
setIngredients, setNutritionalValue, setAmountPeople, setSearchText, setSpecificRecipe } = navSlice.actions;

// Selectors
export const selectCuisine = (state) => state.nav.cuisine;
export const selectCuisineComplement = (state) => state.nav.cuisineComplement;
export const selectDish = (state) => state.nav.dish;
export const selectDiet = (state) => state.nav.diet;
export const selectPreparationTime = (state) => state.nav.preparationTime;
export const selectCulinaryProficiency = (state) => state.nav.culinaryProficiency;
export const selectPopularity = (state) => state.nav.popularity;
export const selectIngredients = (state) => state.nav.ingredients;
export const selectNutritionalValue = (state) => state.nav.nutritionalValue;
export const selectAmountPeople= (state) => state.nav.amountPeople;
export const selectSearchText = (state) => state.nav.searchText;
export const selectSpecificRecipe = (state) => state.nav.specificRecipe;

export default navSlice.reducer;