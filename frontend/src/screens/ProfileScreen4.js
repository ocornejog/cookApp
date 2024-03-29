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

function ProfileScreen4() {
  const [cuisine, setCuisine] = React.useState(0);
  const [dish, setDish] = React.useState(0);
  const [diet, setDiet] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [level, setLevel] = React.useState(0);
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row', maxWidth:'100%', gap:'1rem', margin: '2rem auto', alignItems:'center'}}>
        <div style ={{color:C.green, textAlign: 'left', flex: 1,
        fontSize: '24px', fontFamily:"Montserrat", fontWeight:'330', marginTop:'-140px', marginLeft:'14px'}}>
          * Intitulé de la recette
          <div style={{marginLeft:'264px', width:'40%',marginTop:'-40px'}}>
            <StyledTextInput placeholder="" />
          </div>
          <div style={{marginTop:'50px', marginLeft:'10px'}}>
            Description de la recette
            <div style={{marginLeft:'305px', width:'70%',marginTop:'-40px'}}>
              <StyledTextInput placeholder="" />
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
          <DropDownList optionsList={L.cuisine} optionsImages={I.cuisine} label={'Type de cuisine'} 
                              onSelect={(value, index) => setCuisine(index)}/>
        </div>
        <div style={{flex:1}} >
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Type de plat
          </div>
          <DropDownList optionsList={L.dish} optionsImages={I.dish} label={'Type de plat'} 
                          onSelect={(value, index) => setDish(index)}/>
        </div>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Régimes spécifiques
          </div>
          <DropDownList optionsList={L.diets} optionsImages={I.diets} label={'Régimes spécifiques'} 
                          onSelect={(value, index) => setDiet(index)}/>
        </div>
      </div>
      <div style={{display:'flex', flexWrap:'wrap', maxWidth:'60%', gap:'178px', margin: '2rem auto', marginTop:'59px',
        marginLeft:'329px'}}>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Temps de préparation
          </div>
          <DropDownList optionsList={L.time} optionsImages={I.time} label={'Temps de préparation'} 
          onSelect={(value, index) => setTime(index)}/>
        </div>
        <div style={{flex:1}}>
          <div style={{color:C.green, fontFamily:"Montserrat", fontWeight:'330', textAlign:'left', marginBottom:'10px'}}>
            *Niveau de compétence culinaire
          </div>
          <DropDownList optionsList={L.level} optionsImages={I.level} label={'Niveau de compétence culinaire'} 
          onSelect={(value, index) => setLevel(index)}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen4;