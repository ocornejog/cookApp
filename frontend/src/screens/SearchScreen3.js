import * as React from 'react';
import { useEffect, useState, useContext } from 'react';

import C from '../constants/colors';
import API from '../constants/Api';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import PreparationSteps from '../components/PreparationSteps';
import IngredientsList from '../components/IngredientsList';
import { CommentCard1 } from '../components/CommentCards';
import CommentCard2 from '../components/CommentCard2';

import { useDispatch, Provider, useSelector } from 'react-redux';
import { setSpecificRecipe, selectSpecificRecipe, setAmountPeople, selectAmountPeople } from '../constants/searchConfig/slices/navSlice';

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function SearchScreen3() {

    // put here your constants

    const default_user_id = "65e31cf769050ff9bab2a6c1"; //Oscar Cornejo


    const dispatch = useDispatch();
    const selectedSpecificRecipe = useSelector(selectSpecificRecipe);
    const selectedAmountPeople = useSelector(selectAmountPeople);

    //const auth_context = useContext(AuthContext); Constant to be used later

    // put here your states

    const [comment, setComment] = useState("");
    const [starRaiting, setStarRaiting] = useState(0);
    const [title, setTitle] = useState();
    const [stepList, setStepList] = useState([]);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [commentsData, setCommentsData] = useState([]);
    const [image, setImage] = useState("");


    // put here your functions and handlers

    const onSubmitComment = async(myComment, myStarRaiting) => {
        setComment(myComment);
        setStarRaiting(myStarRaiting);
        if(myComment.length !== 0){
            await fetch(`${API.APIuri}/api/comments/create`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_id: default_user_id, 
                    recipe_id: selectedSpecificRecipe, 
                    comment: myComment, 
                    raiting: myStarRaiting, 
                    date_of_publication: (new Date(Date.now()).toDateString()).toString()
                })
            });
        }
    };

    const settingCommentsData = async(comment, index) => {
        const response3 = await fetch(`${API.APIuri}/api/users/userID/${comment.user_id}`);
        const foundUser = await response3.json();

        const newItem = {
            name: `${foundUser.name} ${foundUser.lastname}`, 
            date: new Date(comment.date_of_publication),
            comment: comment.comment, 
            starRaiting: comment.raiting
        }
        if(index === 0) {
            setCommentsData([newItem]);
        } else {
            setCommentsData(prevComments => [...prevComments, newItem]);
        } 
    };

    const fetchingRecipe = async() => {
        if((selectedSpecificRecipe !== null) && (selectedSpecificRecipe !== "")){
            const response = await fetch(`${API.APIuri}/api/recipes/recipe/${selectedSpecificRecipe}`);
            const recipe = await response.json();
            const recipeData = recipe[0];
            setTitle(recipeData.name);
            setStepList(recipeData.preparation_steps);
            setImage(recipeData.photo);
            const newIngredients = recipeData.ingredients.map((element, index) => {
                const matches = recipeData.quantity_ingredients[index].match(/\d+/);
                if (matches && (selectedAmountPeople !== null) && 
                (selectedAmountPeople.length !== 0) && !isNaN(selectedAmountPeople)) {
                    const number = parseInt(matches[0]);
                    const result = number * parseInt(selectedAmountPeople);
                    
                    const newQuantity = recipeData.quantity_ingredients[index].replace(/\d+/, result);
                    
                    return `${newQuantity} ${element}`;
                } else {
                    return `${recipeData.quantity_ingredients[index]} ${element}`;
                }
            });
            setIngredientsList(newIngredients);
        }
    };

    const fetchingComments = async() => {
        if((selectedSpecificRecipe !== null) && (selectedSpecificRecipe !== "")){
            const response2 = await fetch(`${API.APIuri}/api/comments/recipe/${selectedSpecificRecipe}`);
            const comments = await response2.json();
            comments.map((comment, index) => {
                settingCommentsData(comment, index);
            });
        }
    };

    //put here your permanent operations

    useEffect(() => {
        setCommentsData([]);
        fetchingRecipe();
        fetchingComments();
    }, [selectedSpecificRecipe]);

    useEffect(() => {
        console.log('My creative comment is:', comment, 'and my raiting of this dish is:', starRaiting);
    }, [comment, starRaiting]);

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
                {`Chercher > Résultats de votre recherche > ${title}`}
            </div>
            <div className='montserrat_700' style={{fontSize: '28px', color: C.black, textAlign: 'center', 
            width: '100%', textDecoration:'underline', marginTop: '24px'}}>
                {`${title}`}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '49% 2% 49%', width: '100%', marginTop: '24px' }}>
                <div style={{ gridColumn: '1 / 2', display: 'flex', alignItems: 'flex-start', marginTop: '24px', paddingRight: '32px' }}>
                    <PreparationSteps stepList={stepList} />
                </div>
                <div style={{ gridColumn: '2 / 3', backgroundColor: C.brown, height: '90%' }}>
                </div>
                <div style={{ gridColumn: '3 / 4', display: 'flex', alignItems: 'flex-start', marginTop: '24px', paddingLeft: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                            <div style={{ width: '50%' }}>
                                <IngredientsList ingredientsList={ingredientsList} 
                                amountPeople={(selectedAmountPeople !== null) && 
                                (selectedAmountPeople.length !== 0) && !isNaN(selectedAmountPeople)? selectedAmountPeople : 1}/>
                            </div>
                            {(image.length !== 0) &&
                            <div style={{ width: '50%', marginLeft: '8px', alignSelf: 'center' }}>
                                <img style={{ width: '90%', height: 'auto', objectFit: 'cover' }} src={image} alt={title} />
                            </div>
                            }
                        </div>
                        <div style={{ width: '50%', alignSelf: 'center', marginTop: '16px' }}>
                            <CommentCard1 
                            onSubmit={(comment, starRaiting) => onSubmitComment(comment, starRaiting)}/>
                        </div>
                        <div className='montserrat_700' style={{fontSize: '20px', color: C.green, textAlign: 'left', 
                        marginTop: '16px', width: '100%'}}>
                            {`Commentaires`}
                        </div>
                        {(commentsData.length !== 0)?
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', 
                        marginTop: '16px', marginBottom: '16px', width: '100%' }}>
                            {commentsData.map((item, index) => (
                                <div key={index} style={{ width: '311px' }}>
                                    <CommentCard2 name={item.name} date={item.date} comment={item.comment} starRating={item.starRaiting}/>
                                </div>
                            ))}
                        </div>
                        :
                        <div className='montserrat_700' style={{ color: C.greenLight, fontSize: '16px', textAlign: 'center', 
                        width: '60%', marginTop: '16px', marginBottom: '16px', alignSelf: 'center' }}>
                            {`Il n'y a aucun commentaire sur la recette pour le moment`}
                        </div>  
                        }
                    </div>
                </div>
            </div>   
            

        </div>
    </div>
    );
}

export default SearchScreen3;

//Do not put styles in screens, use or put your new styles in ./src/index.css
