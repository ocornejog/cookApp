import * as React from 'react';
import UserCard from "../components/UserCard";
import ButtonComponent from "../components/ButtonComponent";
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";


function ProfileScreen2() {
  return (
    <div>
      <UserCard/>
      <div style={{width:'100%', display:'flex', 
      alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ textAlign:'left', marginLeft:'16px', marginTop:'30px', fontSize: '32px', fontFamily:"Montserrat",
          fontWeight:'750', textDecoration:'underline', textDecorationThickness:'1.5px', 
          textUnderlineOffset:'7px',flex:1}}>
              Mes infos perso
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'73px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Nom
        <div style={{marginLeft:'100px', width:'42.5%',marginTop:'-10px'}}>
          <StyledTextInput placeholder="Cornejo"/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'53px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Prénom
        <div style={{marginLeft:'90px', width:'42%',marginTop:'-10px'}}>
          <StyledTextInput placeholder="Oscar"/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'73px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Mail
        <div style={{marginLeft:'110px', width:'42.5%',marginTop:'-10px'}}>
          <StyledTextInput placeholder="oscarcornejo@gmail.com"/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'10px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Date de naissance
        <div style={{marginLeft:'33px', width:'41%',marginTop:'-10px'}}>
          <StyledTextInput placeholder="??/??/????"/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'34px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Mot de passe
        <div style={{marginLeft:'33px', width:'41%',marginTop:'-20px'}}>
          <ButtonComponent type="secondary" text="Modifier" onClick={() => {console.log("Button Modifier clicked !")}}/>
        </div>
      </div>
      <div style={{width:'30%', marginTop:'66px', marginLeft:'37%', marginBottom:'70px'}}>
        <ButtonComponent type="primary" text="Enregistrer les modifications" onClick={() => {console.log("Button Enregistrer clicked !")}}/>
      </div>
    </div>
  );
}

export default ProfileScreen2;