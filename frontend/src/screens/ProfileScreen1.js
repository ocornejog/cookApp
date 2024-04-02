import React from 'react';
import UserCard from "../components/UserCard";
import C from '../constants/colors';
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonComponent.css";
import MyRecipie from '../components/MyRecipie';
import { useNavigate } from "react-router-dom";

function ProfileScreen1({ recettes }) {
  const navigate = useNavigate();

  const datasend = {prenom:"Oscar", nom:"CORNEJO", mail:"oscarcornejo@gmail.com", date:"22/12/2001"};
 
  const handleClickParametres = () => {
    navigate(`/ProfileScreen2`, {state:datasend});
  };

  const handleClickPublish = () => {
    navigate('/ProfileScreen4');
  };

  const handleClickModifyRecipie = () => {
    navigate('/ProfileScreen4');
  }
  return (
    <div style={{width:'100%', display:'flex', alignContent: 'center',
    alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <UserCard onClick={handleClickParametres}/>
      <div style={{width:'100%', display:'flex', 
      alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ textAlign:'left', marginLeft:'16px', marginTop:'30px', fontSize: '32px', fontFamily:"Montserrat",
          fontWeight:'750', textDecoration:'underline', textDecorationThickness:'1.5px', 
          textUnderlineOffset:'7px', flex: 1}}>
              Mes recettes
        </div>
        <div style={{marginRight:'80px', marginTop:'30px'}}>
            <ButtonComponent type="primary" text="Publier une recette" onClick={handleClickPublish}/>
        </div>
      </div>
      {recettes === undefined
        ? (<div style={{textAlign:'center', marginLeft:'16px', marginTop:'100px', fontSize: '48px', fontFamily:"Montserrat",
            fontWeight:'750', color:C.greenLight}}>
            Vous n'avez publié aucune <br></br>recette.
          </div>)
        : (recettes.map((recette,index) => (
          <div key={index} style={{width:'95%'}}>
            <MyRecipie title={recette[0]} description={recette[1]} photo={recette[2]} onClick={handleClickModifyRecipie}/>
          </div>
          )))
        } 
    </div>
  );
}

export default ProfileScreen1;