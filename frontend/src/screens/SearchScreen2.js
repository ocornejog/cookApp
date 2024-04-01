import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
//import { CheckBoxComp } from '../components/CheckBox';

import C from '../constants/colors';
import API from '../constants/Api';
import { useNavigate } from 'react-router-dom';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import RecipeCard from '../components/recipeCard';
import { useDispatch, Provider, useSelector } from 'react-redux';
import { setCuisine, selectCuisine, setCuisineComplement, selectCuisineComplement, setDish, selectDish, setDiet, selectDiet, 
setPreparationTime, selectPreparationTime, setCulinaryProficiency, selectCulinaryProficiency, setPopularity, selectPopularity, 
setIngredients, selectIngredients, setNutritionalValue, selectNutritionalValue, setAmountPeople, selectAmountPeople, setSearchText,
selectSearchText, setSpecificRecipe, selectSpecificRecipe } from '../constants/searchConfig/slices/navSlice';

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function SearchScreen2() {
    // put here your constants

    const default_user_id = "65e31cf769050ff9bab2a6c1"; //Oscar Cornejo

    const dispatch = useDispatch();
    const selectedCuisine = useSelector(selectCuisine);
    const selectedCuisineComplement = useSelector(selectCuisineComplement);
    const selectedDish = useSelector(selectDish);
    const selectedDiet = useSelector(selectDiet);
    const selectedPreparationTime = useSelector(selectPreparationTime);
    const selectedCulinaryProficiency = useSelector(selectCulinaryProficiency);
    const selectedPopularity = useSelector(selectPopularity);
    const selectedIngredients = useSelector(selectIngredients);
    const selectedNutritionalValue = useSelector(selectNutritionalValue);
    const selectedAmountPeople = useSelector(selectAmountPeople);
    const selectedSearchText = useSelector(selectSearchText);
    const navigate = useNavigate();

    //const auth_context = useContext(AuthContext); Constant to be used later

    // put here your states

    const [recipesData, setRecipesData] = useState([]);
    const [searchText, setSearchText] = useState("");

    // put here your functions and handlers

    const onClickCard = async(e) => {
        console.log('Trying to do something after clicking a card with id: ', e);
        dispatch(setSpecificRecipe(e));
        navigate('/SearchScreen3');
    };

    const onClickFavorite = async(e, favorite) => {
        console.log('Clicked favorite button for card with id: ', e);
        if(!favorite) {
            await fetch(`${API.APIuri}/api/favoritesRecipes/create`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userID: default_user_id,
                    recipeID: e
                })
            });
        } else {
            await fetch(`${API.APIuri}/api/favoritesRecipes/deleteFromFavorites/user/${default_user_id}/recipe/${e}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }
        setRecipesData(prevItems => (
            prevItems.map(item => {
                if (item.id === e) {
                    return { ...item, favorite: !item.favorite };
                }
                return item;
            })
        ));
    };

    const settingRecipesData = async(recipe, index) => {

        let response = 
        await fetch(`${API.APIuri}/api/favoritesRecipes/checkFavoriteRecipe/user/${default_user_id}/recipe/${recipe._id}`);
        let myFavorite = await response.json();

        const newItem = {
            id: recipe._id,
            title: recipe.name,
            description: recipe.description,
            image: recipe.photo,
            favorite: (myFavorite.length !== 0)? true : false
        }
        /*
        if(index === 0) {
            setRecipesData([newItem]);
        } else {
        */
            setRecipesData(prevRecipes => [...prevRecipes, newItem]);
        //} 
    };

    //put here your permanent operations

    useEffect(() => {
        //setRecipesData(data);
        if((searchText !== null) && (searchText !== "")) {
            setRecipesData([]);
            fetch(`${API.APIuri}/api/recipes/searchByTags/${searchText}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(async (data) => {
                console.log(data);
                for (let index = 0; index < data.length; index++) {
                    const recipe = data[index];
                    await settingRecipesData(recipe, index);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, [searchText]);

    useEffect(() => {
        console.log(`My current vector data is: `, recipesData);
    }, [recipesData]);

    useEffect(() => {
        if((typeof(selectedSearchText) === 'string') && (selectedSearchText.length !== 0)){
            setSearchText(selectedSearchText);
        }
    }, []);

    //---------------------------------------------------------
    // Render your screen here
    return (
    <div className="screen-view-1" style={{ backgroundColor: C.white }}>
        <div
            className="screen-view-1"
            style={{ width: "95%", backgroundColor: C.white }}
        >
            {/* put your content here */}


            <div className='montserrat_700' style={{fontSize: '11px', color: C.grey, textAlign: 'left', width: '100%'}}>
                {`Chercher > Résultats de votre recherche`}
            </div>
            <div className='montserrat_700' style={{fontSize: '20px', color: C.green, textAlign: 'center', width: '100%'}}>
                {`Résultats de votre recherche`}
            </div>
            {(recipesData.length !== 0)?
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', padding: '10px', 
            marginTop: '16px', marginBottom: '16px' }}>
            {recipesData.map((item, index) => (
                <div key={index}>
                    <RecipeCard title={item.title} description={item.description} favorite={item.favorite} image={item.image}
                    onClick={() => onClickCard(item.id)} onClickFavorite={() => onClickFavorite(item.id, item.favorite)}/>
                </div>
            ))}
            </div>
            :
            <div className='montserrat_700' style={{ color: C.greenLight, fontSize: '20px', textAlign: 'center', width: '100%',
            marginTop: '56px', marginBottom: '16px' }}>
                {`Aucun résultat n'a été trouvé, essayez d'autres critères de recherche`}
            </div>  
            }


        </div>
    </div>
    );
}

export default SearchScreen2;

//Do not put styles in screens, use or put your new styles in ./src/index.css
