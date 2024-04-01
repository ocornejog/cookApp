import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import C from '../constants/colors';
import API from '../constants/Api';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import { ExploreCard } from '../components/ExploreCard';
import { useDispatch, Provider, useSelector } from 'react-redux';
import { setCuisine, selectCuisine, setCuisineComplement, selectCuisineComplement, setDish, selectDish, setDiet, selectDiet, 
setPreparationTime, selectPreparationTime, setCulinaryProficiency, selectCulinaryProficiency, setPopularity, selectPopularity, 
setIngredients, selectIngredients, setNutritionalValue, selectNutritionalValue, setAmountPeople, selectAmountPeople, setSearchText,
selectSearchText, setSpecificRecipe, selectSpecificRecipe } from '../constants/searchConfig/slices/navSlice';

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function SearchScreen1() {
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
    const selectedSpecificRecipe = useSelector(selectSpecificRecipe);
    const navigate = useNavigate();

    //const auth_context = useContext(AuthContext); Constant to be used later

    // put here your states

    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [searchingText, setSearchingText] = useState("");
    const [annotation, setAnnotation] = useState({});    

    // put here your functions and handlers

    const onSearchByText = async(e) => {
        console.log(`I want to search`, e);
        setSearchingText(e);
        dispatch(setCuisine(null));
        dispatch(setCuisineComplement(null));
        dispatch(setDish(null));
        dispatch(setDiet(null));
        dispatch(setPreparationTime(null));
        dispatch(setCulinaryProficiency(null));
        dispatch(setPopularity(null));
        dispatch(setIngredients(null));
        dispatch(setNutritionalValue(null));
        dispatch(setAmountPeople(null));
        dispatch(setSearchText(e));
        dispatch(setSpecificRecipe(null));
        navigate('/SearchScreen2');
    };

    const onSubmitForm = async() => {
        console.log('Submitting form');
        dispatch(setCuisine(annotation.cuisine));
        dispatch(setCuisineComplement(annotation.cuisineComplement));
        dispatch(setDish(annotation.dish));
        dispatch(setDiet(annotation.diet));
        dispatch(setPreparationTime(annotation.preparationTime));
        dispatch(setCulinaryProficiency(annotation.culinaryProficiency));
        dispatch(setPopularity(annotation.popularity));
        dispatch(setIngredients(annotation.ingredients));
        dispatch(setNutritionalValue(annotation.nutritionalValue));
        dispatch(setAmountPeople(annotation.amountPeople));
        dispatch(setSearchText(null));
        dispatch(setSpecificRecipe(null));
        navigate('/SearchScreen2');
    };

    //put here your permanent operations

    const handleAnnotation = async(e) => {
        console.log(`Received annotation: `, e);
        setAnnotation(e);
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


            <div className="backgroundTemplateImage">
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',  
                marginTop: (advancedSearch)? '168px' : '440px'}}>
                    <div className="montserrat_700" style={{ color: C.green, fontSize: '20px', width: '50%', textAlign: 'center',
                    backgroundColor: C.white, padding: '20px', borderRadius: '10px' }}>
                        {`Qu’est-ce que je veux cuisiner aujourd’hui ?`}
                    </div>
                    <div style={{width: '75%', alignSelf: 'center', marginBottom: '20px'}}>
                        <ExploreCard placeholder={'Rechercher un plat spécifique'} 
                        buttonText={(advancedSearch)? 'Chercher' : 'Recherche avancée'} 
                        type={advancedSearch? 'advanced' : 'basic'}
                        onClickButton={() =>{ 
                            if(advancedSearch){
                                onSubmitForm();
                            } else {
                                setAdvancedSearch(true);
                            }
                        }}
                        onClickLupe={(e) => onSearchByText(e)}
                        annotation={(e) => handleAnnotation(e)}/>
                    </div>
                </div>
            </div>      
            

        </div>
    </div>
    );
}

export default SearchScreen1;

//Do not put styles in screens, use or put your new styles in ./src/index.css
