import * as React from 'react';
import UserCard from "../components/UserCard";
import ButtonComponent from "../components/ButtonComponent";
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";

function ProfileScreen3() {
  return (
    <div>
      <UserCard/>
      <div style ={{display:'flex', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center',
       fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'166px'}}>
        Entrez votre mot de passe actuelle
        <div style={{marginLeft:'100px', width:'20%',marginTop:'-12px'}}>
          <StyledTextInput placeholder="" passwordInput={true}/>
        </div>
      </div>
      <div style ={{display:'flex', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center',
       fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'99px', marginLeft:'-7px'}}>
        Entrez votre nouveau mot de passe
        <div style={{marginLeft:'100px', width:'20%',marginTop:'-12px'}}>
          <StyledTextInput placeholder="" passwordInput={true}/>
        </div>
      </div>
      <div style ={{display:'flex', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center',
       fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'79px', marginLeft:'-49px'}}>
        Confirmation du nouveau mot de passe
        <div style={{marginLeft:'100px', width:'19.7%',marginTop:'-12px'}}>
          <StyledTextInput placeholder="" passwordInput={true}/>
        </div>
      </div>
      <div style={{marginTop:'97px', width:'18%', marginLeft:'40%', marginBottom:'106px'}}>
        <ButtonComponent type="primary" text="Enregistrer le nouveau mot de passe" onClick={() => {console.log("Button Enregistrer clicked !")}}/>
      </div>
    </div>
  );
}

export default ProfileScreen3;