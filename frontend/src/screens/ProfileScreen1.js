import React from 'react';
import UserCard from "../components/UserCard";
import C from '../constants/colors';
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonComponent.css";
import MyRecipie from '../components/MyRecipie';

function ProfileScreen1({ recettes }) {
  const nbRecettes = Object.keys(recettes).length;
  return (
    <div>
      <UserCard/>
      <div style={{width:'100%', display:'flex', 
      alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ textAlign:'left', marginLeft:'16px', marginTop:'30px', fontSize: '32px', fontFamily:"Montserrat",
          fontWeight:'750', textDecoration:'underline', textDecorationThickness:'1.5px', 
          textUnderlineOffset:'7px', flex: 1}}>
              Mes recettes
        </div>
        <div style={{marginRight:'80px', marginTop:'30px'}}>
            <ButtonComponent type="primary" text="Publier une recette" onClick={() => {console.log("Button Publier clicked !")}}/>
        </div>
      </div>
      {nbRecettes === 0
        ? (<div style={{textAlign:'center', marginLeft:'16px', marginTop:'100px', fontSize: '48px', fontFamily:"Montserrat",
            fontWeight:'750', color:C.greenLight}}>
            Vous n'avez publié aucune <br></br>recette.
          </div>)
        : (recettes.map(recette => (
          <div style={{width:'95%', marginLeft:'43px'}}>
            <MyRecipie title={recette[0]} description={recette[1]} photo={recette[2]}/>
          </div>
          )))
        } 
    </div>
  );
}

export default ProfileScreen1;