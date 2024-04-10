import * as React from 'react';
import ButtonComponent from "../components/ButtonComponent";
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";
import C from "../constants/colors"
import L from '../constants/listLabels';
import I from '../constants/listImages';
import PhotoSelection from '../components/PhotoSelection';
import DropDownList from '../components/DropDownList';
import { CheckBox } from '../components/CheckBox';
import API from '../constants/Api';
import { useNavigate, useLocation } from "react-router-dom";

function ProfileScreen4() {
  let titreD = "";
  let descriptionD = "";
  let cuisineD = 0;
  let dishD = 0;
  let dietD = 0;
  let timeD = 0;
  let levelD = 0;
  let listLabels1D = [false,false,false,false];
  let listLabels2D = [false,false,false,false];
  let etapesD = [];
  let ingredientsD = [];
  let quantiteD = [];
  let photoD = "";

  const location = useLocation();

  let recetteGiven = false;

  if (location.state !== null){
    recetteGiven = true;
    const recette = location.state[0];
    titreD = recette.name;
    descriptionD = recette.description;
    cuisineD = recette.type_of_cuisine;
    dishD = recette.type_of_dishes;
    dietD = recette.specific_regime;
    timeD = recette.preparation_time;
    levelD = recette.culinary_skill_level;
    listLabels1D = recette.nutritional_value.slice(0,4);
    listLabels2D = recette.nutritional_value.slice(4,8);
    etapesD = recette.preparation_steps;
    photoD = recette.photo;
    ingredientsD = recette.ingredients;
    quantiteD = recette.quantity_ingredients;
  }

  const [titre, setTitre] = React.useState(titreD);
  const [description, setDescription] = React.useState(descriptionD);
  const [cuisine, setCuisine] = React.useState(cuisineD);
  const [dish, setDish] = React.useState(dishD);
  const [diet, setDiet] = React.useState(dietD);
  const [time, setTime] = React.useState(timeD);
  const [level, setLevel] = React.useState(levelD);
  const [listLabels1, setListLabels1] = React.useState(listLabels1D);
  const [listLabels2, setListLabels2] = React.useState(listLabels2D);
  const [etapes, setEtapes] = React.useState(etapesD);
  const [ingredients, setIngredients] = React.useState(ingredientsD);
  const [quantite, setQuantite] = React.useState(quantiteD);
  const [photo, setPhoto] = React.useState(photoD);

  //récupérer l'id de l'utilisateur actuellement connecté
  const testUserid = "65e31cf769050ff9bab2a6c1";

  const [checkComplete, setCheckComplet] = React.useState(true);

  const handleNewPhoto = (e) => {
    setPhoto(e);
  }

  const handleAddIngredients = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleChangeIngredients = (e,index) => {
    let newData = ingredients;
    newData[index] = e;
    setIngredients(newData);
  };

  const handleDelIngredients = (index) => {
    let newData = [];
    for (let i=0;i<ingredients.length;i++) {
      if (i !== index) {
        newData[i] = ingredients[i];
      };
    };
    setIngredients(newData);
  };

  const handleAddEtapes = () => {
    setEtapes([...etapes, ""]);
  };

  const handleChangeEtapes = (e,index) => {
    let newData = etapes;
    newData[index] = e;
    setEtapes(newData);
  };

  const handleDelEtapes = (index) => {
    let newData = [];
    for (let i=0;i<etapes.length;i++) {
      if (i !== index) {
        newData[i] = etapes[i];
      };
    };
    setEtapes(newData);
  };

  const handleSubmit = () => {
    if ((titre !== "") & (cuisine !== dish !== diet !== time !== level) & (etapes.length > 0) & (ingredients.length > 0)) {
      setCheckComplet(true);
      handlePublish();
    } else {
      setCheckComplet(false);
    };
  };


  const handlePublish = async() => {
    let res = await fetch(`${API.APIuri}/api/recipes/create`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:titre,
        description:description, 
        type_of_cuisine:cuisine, 
        type_of_dishes:dish,
        specific_regime:diet,
        preparation_time:time,
        culinary_skill_level:level,
        nutritional_value:listLabels1.concat(listLabels2),
        preparation_steps:etapes,
        photo:photo,
        ingredients:ingredients,
        quantity_ingredients:ingredients,
        tags:[]
      })
    });
    let newRecipeId = await res.json();
    let res2 = await fetch(`${API.APIuri}/api/appRecipes/addAppRecipe`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id:testUserid,
        recipe_id:newRecipeId
      })
    });
  };

  const handelUpdate = async() => {
    let res = await fetch(`${API.APIuri}/api/recipes/updateRecipe`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id:location.state[0]._id,
        name:titre,
        description:description, 
        type_of_cuisine:cuisine, 
        type_of_dishes:dish,
        specific_regime:diet,
        preparation_time:time,
        culinary_skill_level:level,
        nutritional_value:listLabels1.concat(listLabels2),
        preparation_steps:etapes,
        photo:photo,
        ingredients:ingredients,
        quantity_ingredients:ingredients,
        tags:[]
      })
    });
  }

  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', maxWidth:'100%', gap:'1rem', margin: '2rem auto', alignItems:'center'}}>
        <div style ={{color:C.green, textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column',
        fontSize: '24px', fontFamily: "Montserrat", fontWeight:'330', marginTop:'-40px', marginLeft:'14px'}}>
          <div style={{marginTop:'50px', marginLeft:'10px', display: 'flex', flexDirection: 'row', marginRight: '32px'}}>
            <div style={{width:'25%'}}>
              * Intitulé de la recette
            </div>
            <div style={{width:'40%', marginLeft: '16px'}}>
              <StyledTextInput placeholder="" text={e => {setTitre(e)}} fill={titre}/>
            </div>
          </div>
          <div style={{marginTop:'50px', marginLeft:'10px', display: 'flex', flexDirection: 'row', marginRight: '32px'}}>
            <div style={{width:'25%'}}>
              Description de la recette
            </div>
            <div style={{width:'70%', marginLeft: '16px'}}>
              <StyledTextInput placeholder="" text={e => {setDescription(e)}} fill={description}/>
            </div>
          </div>
        </div>
        <div style={{width:'23%', marginRight:'73px'}}>
          <PhotoSelection photo={photo} text="*Choisir une photo" callback={(e) => handleNewPhoto(e)} />
        </div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'80%', gap:'8rem', margin: '2rem auto', marginTop:'51px'}}>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Type de cuisine
          </div>
          <DropDownList optionsList={L.cuisine} optionsImages={I.cuisine} label={''} 
                              onSelect={(value, index) => setCuisine(index)}
                              defaultValue={cuisine}/>
        </div>
        <div style={{flex:1}} >
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Type de plat
          </div>
          <DropDownList optionsList={L.dish} optionsImages={I.dish} label={''} 
                          onSelect={(value, index) => setDish(index)}
                          defaultValue={dish}/>
        </div>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Régimes spécifiques
          </div>
          <DropDownList optionsList={L.diets} optionsImages={I.diets} label={''} 
                          onSelect={(value, index) => setDiet(index)}
                          defaultValue={diet}/>
        </div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'60%', gap:'178px', margin:'auto', marginTop:'59px',
        marginLeft:'329px'}}>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Temps de préparation
          </div>
          <DropDownList optionsList={L.time} optionsImages={I.time} label={''} 
          onSelect={(value, index) => setTime(index)}
          defaultValue={time}/>
        </div>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Niveau de compétence culinaire
          </div>
          <DropDownList optionsList={L.level} optionsImages={I.level} label={''} 
          onSelect={(value, index) => setLevel(index)}
          defaultValue={level}/>
        </div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'80%', gap:'178px', marginTop:'78px',
        marginLeft:'26px'}}>
        <div style={{flex:1}}>
          <div style ={{color:C.green, textAlign: 'left',
            fontSize: '24px', fontFamily:"Montserrat", fontWeight:'330', marginBottom:'19px'}}>
              Valeur nutritionelle
          </div>
          <CheckBox listLabels={['Equilibré','Faible en calories','Riche en protéines','Faible en gras']} onSelect={(e) => setListLabels1(e)}
            fill={listLabels1}/>
          <div style={{marginLeft:'343px', marginTop:'-142px'}}>
            <CheckBox listLabels={['Faible en sucre','Riche en fibres','Riche en vitamines','Riche en minéraux']} onSelect={(e) => setListLabels2(e)}
            fill={listLabels2}/>
          </div>
        </div>
        <div style={{flex:1}}>
          <div style ={{color:C.green, textAlign: 'left',
              fontSize: '24px', fontFamily:"Montserrat", fontWeight:'330', marginBottom:'19px',  marginLeft:'159px'}}>
                *Ingrédients nécessaires
            </div>
            {ingredients.length === 0 ? <p></p>
            : ingredients.map((ingredient,index) => 
              <div key={index} style={{marginBottom:'11px',display:'flex', flexWrap:'wrap', gap:'29px', maxWidth:'100%', marginLeft:'100px'}}>
                <div style={{flex:1}}>
                  <StyledTextInput placeholder="" fill={ingredient} text={e => handleChangeIngredients(e,index)}/>
                </div>
                <div style={{flex:1, marginRight:'-200px'}}>
                  <ButtonComponent type={'secondary'} text={'Supprimer'} onClick={() => handleDelIngredients(index)}/>
                </div>
              </div>)}
            <div style={{marginLeft:'300px'}}>
              <ButtonComponent type={'secondary'} text={'Ajouter un ingédient'} onClick={() => handleAddIngredients()}/>
            </div>
        </div>
      </div>
      <div style ={{display:'flex',color:C.green, textAlign: 'left',
              fontSize: '24px', fontFamily:"Montserrat", fontWeight:'330', marginTop:'73px', marginLeft:'13px'}}>
                *Etapes de préparation
      </div>
      {etapes.length === 0 ? <p></p>
      : etapes.map((etape,index) => 
      <div key={index} style={{marginBottom:'11px',display:'flex', flexWrap:'wrap', gap:'20px'}}>
        <div style={{marginLeft:'28px', marginTop:'10px', paddingRight:'26px', fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330'}}>
          Etape {index+1}
        </div>
        <div style={{flex:1}}>
          <StyledTextInput text={e => handleChangeEtapes(e,index)} fill={etape}/>
        </div>
        <div style={{flex:1}}>
          <ButtonComponent type={'secondary'} text={'Supprimer'} onClick={() => handleDelEtapes(index)}/>
        </div>
      </div>)}
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'80%', margin:'auto', marginTop:'34px'}}>
          <ButtonComponent type={'secondary'} text={'Ajouter une étape'} onClick={() => handleAddEtapes()}/>
      </div>
      {checkComplete ? <div style={{color:C.white, marginTop:'13px', textAlign:'center',fontSize:'19px', fontFamily:'Montserrat', fontWeight:'330'}}>
          &zwnj;
        </div>
      : <div style={{color:C.red, marginTop:'13px', textAlign:'center',fontSize:'19px', fontFamily:'Montserrat', fontWeight:'330'}}>
          Veuillez remplir tous les champs obligatoires
        </div>}
      <div style={{color:C.grey, marginTop:'11px', textAlign:'center',fontSize:'19px', fontFamily:'Montserrat', fontWeight:'330'}}>
        * Champs obligatoires
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'40%', gap:'178px', margin:'auto', marginBottom:'32px'}}>
        <div style={{flex:1}}>
          <ButtonComponent type={'primary'} text={'Annuler'} onClick={() => console.log('Pressed cancel')}/>
        </div>
        <div style={{flex:1}}>
          <ButtonComponent type={'primary'} text={recetteGiven ? 'Enregistrer les modifications' : 'Publier la recette'}
           onClick={recetteGiven ? () => handelUpdate() : () => handleSubmit()}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen4;