import * as React from 'react';
import UserCard from "../components/UserCard";
import ButtonComponent from "../components/ButtonComponent";
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";
import C from "../constants/colors"
import L from '../constants/listLabels';
import I from '../constants/listImages';
import PhotoSelection from '../components/PhotoSelection';
import DropDownList from '../components/DropDownList';
import { CheckBox } from '../components/CheckBox';

function ProfileScreen4({recette}) {
  const [titre, setTitre] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [cuisine, setCuisine] = React.useState(0);
  const [dish, setDish] = React.useState(0);
  const [diet, setDiet] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [level, setLevel] = React.useState(0);
  const [listLabels1, setListLabels1] = React.useState([]);
  const [listLabels2, setListLabels2] = React.useState([]);
  const [etapes, setEtapes] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);

  const [checkComplete, setCheckComplet] = React.useState(true);

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
    if ((titre !== "") & (cuisine !== dish !== diet !== time !== level) & (listLabels1.length > 0) & (listLabels2.length > 0) & (etapes.length > 0) & (ingredients.length > 0)) {
      setCheckComplet(true);
    } else {
      setCheckComplet(false);
    };
  };

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
              <StyledTextInput placeholder="" text={e => {setTitre(e)}}/>
            </div>
          </div>
          <div style={{marginTop:'50px', marginLeft:'10px', display: 'flex', flexDirection: 'row', marginRight: '32px'}}>
            <div style={{width:'25%'}}>
              Description de la recette
            </div>
            <div style={{width:'70%', marginLeft: '16px'}}>
              <StyledTextInput placeholder="" text={e => {setDescription(e)}}/>
            </div>
          </div>
        </div>
        <div style={{width:'23%', marginRight:'73px'}}>
          <PhotoSelection text="*Choisir une photo"/>
        </div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'80%', gap:'8rem', margin: '2rem auto', marginTop:'51px'}}>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Type de cuisine
          </div>
          <DropDownList optionsList={L.cuisine} optionsImages={I.cuisine} label={''} 
                              onSelect={(value, index) => setCuisine(index)}/>
        </div>
        <div style={{flex:1}} >
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Type de plat
          </div>
          <DropDownList optionsList={L.dish} optionsImages={I.dish} label={''} 
                          onSelect={(value, index) => setDish(index)}/>
        </div>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Régimes spécifiques
          </div>
          <DropDownList optionsList={L.diets} optionsImages={I.diets} label={''} 
                          onSelect={(value, index) => setDiet(index)}/>
        </div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'60%', gap:'178px', margin:'auto', marginTop:'59px',
        marginLeft:'329px'}}>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Temps de préparation
          </div>
          <DropDownList optionsList={L.time} optionsImages={I.time} label={''} 
          onSelect={(value, index) => setTime(index)}/>
        </div>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Niveau de compétence culinaire
          </div>
          <DropDownList optionsList={L.level} optionsImages={I.level} label={''} 
          onSelect={(value, index) => setLevel(index)}/>
        </div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'80%', gap:'178px', marginTop:'78px',
        marginLeft:'26px'}}>
        <div style={{flex:1}}>
          <div style ={{color:C.green, textAlign: 'left',
            fontSize: '24px', fontFamily:"Montserrat", fontWeight:'330', marginBottom:'19px'}}>
              Valeur nutritionelle
          </div>
          <CheckBox listLabels={['Equilibré','Faible en calories','Riche en protéines','Faible en gras']} onSelect={(e) => setListLabels1(e)}/>
          <div style={{marginLeft:'343px', marginTop:'-142px'}}>
            <CheckBox listLabels={['Faible en sucre','Riche en fibres','Riche en vitamines','Riche en minéraux']} onSelect={(e) => setListLabels2(e)}/>
          </div>
        </div>
        <div style={{flex:1}}>
          <div style ={{color:C.green, textAlign: 'left',
              fontSize: '24px', fontFamily:"Montserrat", fontWeight:'330', marginBottom:'19px',  marginLeft:'159px'}}>
                *Ingrédients nécessaires
            </div>
            {ingredients.length === 0 ? <p></p>
            : ingredients.map((ingredients,index) => 
              <div key={index} style={{marginBottom:'11px',display:'flex', flexWrap:'wrap', gap:'29px', maxWidth:'100%', marginLeft:'100px'}}>
                <div style={{flex:1}}>
                  <StyledTextInput text={e => handleChangeIngredients(e,index)}/>
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
      : etapes.map((etapes,index) => 
      <div key={index} style={{marginBottom:'11px',display:'flex', flexWrap:'wrap', gap:'20px'}}>
        <div style={{marginLeft:'28px', marginTop:'10px', paddingRight:'26px', fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330'}}>
          Etape {index+1}
        </div>
        <div style={{flex:1}}>
          <StyledTextInput text={e => handleChangeEtapes(e,index)}/>
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
          <ButtonComponent type={'primary'} text={'Publier la recette'} onClick={() => handleSubmit()}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen4;