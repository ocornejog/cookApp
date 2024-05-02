import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
//import { CheckBoxComp } from '../components/CheckBox';

import C from '../constants/colors';
import API from '../constants/Api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../constants/Context';

/*
Import your components and constants here
*/
import RecipeCard from '../components/recipeCard';
import Spinner from '../components/Spinner';
import AlertModal from '../components/AlertModal';
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

    const auth_context = useContext(AuthContext);

    //const auth_context = useContext(AuthContext); Constant to be used later

    // put here your states

    const [recipesData, setRecipesData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [annotation, setAnnotation] = useState({});
    const [showIndicator, setShowIndicator] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalText, setModalText] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 5; 

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
                    userID: auth_context.id,
                    recipeID: e
                })
            })
            .then(response => response.json())
            .then(async (data) => {
                if(data === 'Favorite recipe created'){
                    setModalText("Recette enregistrée parmi vos favoris");
                    setModalVisible(true);
                    setRecipesData(prevItems => (
                        prevItems.map(item => {
                            if (item.id === e) {
                                return { ...item, favorite: !item.favorite };
                            }
                            return item;
                        })
                    ));
                } else {
                    setModalText("Une erreur s'est produite, veuillez réessayer");
                    setModalVisible(true);
                }     
            })
            .catch(error => {
                setModalText("Une erreur s'est produite, veuillez réessayer");
                setModalVisible(true);
            });
        } else {
            // http://localhost:3000/api/favoritesRecipes/deleteFromFavorites/user/:userID/recipe/:recipeID
            await fetch(`${API.APIuri}/api/favoritesRecipes/deleteFromFavorites/user/${auth_context.id}/recipe/${e}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(async (data) => {
                if(data.message === "Favorite recipe deleted successfully"){
                    setModalText("Recette supprimée de vos favoris");
                    setModalVisible(true);
                    setRecipesData(prevItems => (
                        prevItems.map(item => {
                            if (item.id === e) {
                                return { ...item, favorite: !item.favorite };
                            }
                            return item;
                        })
                    ));
                } else {
                    setModalText("Une erreur s'est produite, veuillez réessayer");
                    setModalVisible(true);
                }     
            })
            .catch(error => {
                setModalText("Une erreur s'est produite, veuillez réessayer");
                setModalVisible(true);
            });
        }
    };

    const settingRecipesData = async(recipe, index) => {

        let response = 
        await fetch(`${API.APIuri}/api/favoritesRecipes/checkFavoriteRecipe/user/${auth_context.id}/recipe/${recipe._id}`);
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
                setShowIndicator(true);
                for (let index = 0; index < data.length; index++) {
                    const recipe = data[index];
                    await settingRecipesData(recipe, index);
                }
                setShowIndicator(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, [searchText]);

    useEffect(() => {
        //setRecipesData(data);
        if(Object.keys(annotation).length > 0) {
            setRecipesData([]);
            fetch(`${API.APIuri}/api/recipes/advancedSearch`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type_of_cuisine: annotation.type_of_cuisine, 
                    type_of_dishes: annotation.type_of_dishes, 
                    specific_regime: annotation.specific_regime, 
                    preparation_time: annotation.preparation_time, 
                    culinary_skill_level: annotation.culinary_skill_level, 
                    nutritional_value: annotation.nutritional_value
                })
            })
            .then(response => response.json())
            .then(async (data) => {
                console.log(data);
                setShowIndicator(true);
                for (let index = 0; index < data.length; index++) {
                    const recipe = data[index];
                    await settingRecipesData(recipe, index);
                }
                setShowIndicator(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    }, [annotation]);

    useEffect(() => {
        console.log(`My current vector data is: `, recipesData);
    }, [recipesData]);

    useEffect(() => {
        if((typeof(selectedSearchText) === 'string') && (selectedSearchText.length !== 0)){
            setSearchText(selectedSearchText);
        } else if(typeof(selectedCuisine) === 'number'){
            const newAnnotation = {
                type_of_cuisine: selectedCuisine, 
                type_of_dishes: selectedDish, 
                specific_regime: selectedDiet, 
                preparation_time: selectedPreparationTime, 
                culinary_skill_level: selectedCulinaryProficiency, 
                nutritional_value: selectedNutritionalValue 
            };
            setAnnotation(newAnnotation);
        }
    }, []);

    useEffect(() => {
        let timeoutId;
        if (modalVisible) {
          timeoutId = setTimeout(() => {
            setModalVisible(false);
          }, 2000);
        }
        return () => {
          clearTimeout(timeoutId);
        };
    }, [modalVisible]);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };
    
    const prevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    //---------------------------------------------------------
    // Render your screen here
    return (
    <div className="screen-view-1" style={{ backgroundColor: C.white }}>
        <div
            className="screen-view-1"
            style={{ width: "95%", backgroundColor: C.white }}
        >
            {/* put your content here */}

            <AlertModal message={modalText} visible={modalVisible} 
            textButton={"Ok"} onClickButton={() => setModalVisible(false)}/>
            <div className='montserrat_700' style={{fontSize: '11px', color: C.grey, textAlign: 'left', width: '100%'}}>
                {`Chercher > Résultats de votre recherche`}
            </div>
            <div className='montserrat_700' style={{fontSize: '20px', color: C.green, textAlign: 'center', width: '100%'}}>
                {`Résultats de votre recherche`}
            </div>
            {(showIndicator) &&
            <div style={{marginTop: "8px", marginBottom: "8px"}}>
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
                {(currentPage !== 0) && (recipesData.length !== 0) && (
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
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', padding: '10px', 
                marginTop: '16px', marginBottom: '16px' }}>
                {recipesData.length !== 0 &&
                    recipesData
                    .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                    .map((item, index) => (
                    <div key={index}>
                        <RecipeCard title={item.title} description={item.description} favorite={item.favorite} image={item.image}
                        onClick={() => onClickCard(item.id)} onClickFavorite={() => onClickFavorite(item.id, item.favorite)}/>
                    </div>
                ))}
                {recipesData.length === 0 && (
                    <div className='montserrat_700' style={{ color: C.greenLight, fontSize: '20px', textAlign: 'center', width: '100%',
                    marginTop: '56px', marginBottom: '16px' }}>
                        {`Aucun résultat n'a été trouvé, essayez d'autres critères de recherche`}
                    </div>  
                )}
                </div>
                {currentPage !== Math.ceil(recipesData.length / pageSize) - 1 && (recipesData.length !== 0) && (
                <button
                    onClick={nextPage}
                    disabled={currentPage === Math.ceil(recipesData.length / pageSize) - 1}
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


        </div>
    </div>
    );
}

export default SearchScreen2;

//Do not put styles in screens, use or put your new styles in ./src/index.css
