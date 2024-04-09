import React from 'react';
import UserCard from "../components/UserCard";
import C from '../constants/colors';
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonComponent.css";
import MyRecipie from '../components/MyRecipie';
import { useNavigate } from "react-router-dom";
import API from '../constants/Api';

function ProfileScreen1() {
  const navigate = useNavigate();

  let retrieved = false;

  const [recettes, setRecettes] = React.useState([]);
  
  //récupérer l'id de l'utilisateur actuellement connecté
  const testUserid = "65e31cf769050ff9bab2a6c1";

  const getRecipeInfo = async(id_recette) => {
    let res = await fetch(`${API.APIuri}/api/recipes/recipe/${id_recette}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    });
    let rec = await res.json();
    navigate('/ProfileScreen4', {state:rec});
  };

  const handleClickParametres = () => {
    navigate(`/ProfileScreen2`);
  };

  const handleClickPublish = () => {
    navigate('/ProfileScreen4');
  };

  const handleClickModifyRecipie = (idRecette) => {
    getRecipeInfo(idRecette);
  }

  const handelDelete = (idRecette) => {
    console.log("delete recepe :"+idRecette);
  }


  //ici récupérer les recettes publiées par l'utilisateur et les garder en mémoire pour appeler
  //ProfileScreen4 avec le bon recette_id
  React.useEffect(() => {
    const recipeFectch = async () => {
      const recipes = await fetch(`${API.APIuri}/api/appRecipes/getRecipeUser/${testUserid}`,{
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
      }});
      let l = await recipes.json();
      for (let i=0; i<l.length; i++) {
        const recipe = await fetch(`${API.APIuri}/api/recipes/recipe/${l[i].recipe_id}`,{
        method: 'GET',
        headers: {
        'Content-Type': 'application/json'
        }});
        let r = await recipe.json();
        if (recettes.length === 0) {
          setRecettes([r[0]]);
        } else {
          setRecettes(prevRecettes => [...prevRecettes, r[0]]);
        }
      }
    };
    recipeFectch();
  }, [])

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
      {recettes.length === 0
        ? (<div style={{textAlign:'center', marginLeft:'16px', marginTop:'100px', fontSize: '48px', fontFamily:"Montserrat",
            fontWeight:'750', color:C.greenLight}}>
            Vous n'avez publié aucune <br></br>recette.
          </div>)
        : (recettes.map((recette,index) => (
          <div key={index} style={{width:'95%'}}>
            <MyRecipie title={recette.name} description={recette.description} photo={recette.photo} onClick={() => handleClickModifyRecipie(recette._id)} onClick2={() => handelDelete(recette._id)}/>
          </div>
          )))
        } 
    </div>
  );
}

export default ProfileScreen1;