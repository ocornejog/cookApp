import * as React from 'react';
import UserCard from "../components/UserCard";
import C from '../constants/colors';
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonComponent.css";

function ProfileScreen1() {
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
      <div style={{textAlign:'center', marginLeft:'16px', marginTop:'100px', fontSize: '48px', fontFamily:"Montserrat",
        fontWeight:'750', color:C.greenLight}}>
        Vous n’avez publié aucune <br></br>recette.
      </div>
    </div>
  );
}

export default ProfileScreen1;