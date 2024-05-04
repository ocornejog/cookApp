import React from 'react';
import UserCard from "../components/UserCard";
import C from '../constants/colors';
import ButtonComponent from "../components/ButtonComponent";
import "../styles/ButtonComponent.css";
import MyRecipie from '../components/MyRecipie';
import { useNavigate } from "react-router-dom";
import API from '../constants/Api';
import { AuthContext } from '../constants/Context';

function ProfileScreen1() {
  const navigate = useNavigate();
  const auth_context = React.useContext(AuthContext);
  const userId = auth_context.id;

  let firstDeploy = true;

  const [recettes, setRecettes] = React.useState([]);
  const [name, setName] = React.useState("");

  const getRecipeInfo = async(id_recette) => {
    let res = await fetch(`${API.APIuri}/api/recipes/recipe/${id_recette}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json' 
      }
    });
    let rec = await res.json();
    navigate('/profile/ProfileScreen4', {state:rec});
  };

  const handleClickParametres = () => {
    navigate(`/profile/ProfileScreen2`);
  };

  const handleClickPublish = () => {
    navigate('/profile/ProfileScreen4');
  };

  const handleClickModifyRecipie = (idRecette) => {
    getRecipeInfo(idRecette);
  }


  const handelDelete = async(idRecette) => {
    let res = await fetch(`${API.APIuri}/api/appRecipes/getAppRecipeID/${idRecette}`, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json'
    }});
    let appRecipeObject = await res.json();
    let delAppR = await fetch(`${API.APIuri}/api/appRecipes/deleteRecipe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id:appRecipeObject[0]._id
      })
    });
    let delRecipe = await fetch(`${API.APIuri}/api/recipes/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id:idRecette
      })
    });

    let deleteRecipeFavorites = await fetch(`${API.APIuri}/api/favoritesRecipes/deleteRecipeFavorites/recipe/${idRecette}`, {
      method: 'DELETE',
      headers: {
      'Content-Type': 'application/json'
    }});   

    let tmp = []
    for (let i = 0; i < recettes.length; i++) {
      if (recettes[i]._id !== idRecette) {
        tmp.push(recettes[i])
      }
    }
    setRecettes(tmp);

  }


  //ici récupérer les recettes publiées par l'utilisateur et les garder en mémoire pour appeler
  //ProfileScreen4 avec le bon recette_id
  React.useEffect(() => {
    if (firstDeploy) {
      const recipeFectch = async () => {
        firstDeploy = false;
        setRecettes([]);
        const recipes = await fetch(`${API.APIuri}/api/appRecipes/getRecipeUser/${userId}`,{
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
          setRecettes(prev => [...prev, r[0]]);
        }
      };
      recipeFectch();
    }
  }, [])

  console.log(recettes);

  React.useEffect(() => {
    const myName = auth_context.name.toUpperCase();
    const myLastname = auth_context.lastName.toUpperCase();
    setName(`${myName} ${myLastname}`);
  }, [])


  return (
    <div style={{width:'100%', display:'flex', alignContent: 'center',
    alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      {(name.length !== 0) &&
        <UserCard imgsrc={auth_context.photo} name={name} onClick={handleClickParametres}/>
      }
      <div style={{width:'100%', display:'flex', 
      alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ textAlign:'left', marginLeft:'16px', marginTop:'30px', fontSize: '32px', fontFamily:"Montserrat",
          fontWeight:'750', textDecoration:'underline', textDecorationThickness:'1.5px', 
          textUnderlineOffset:'7px', flex: 1}}>
              Mes recettes
        </div>
        <div style={{marginRight:'80px', marginTop:'30px'}}>
            <ButtonComponent type="primary" text="Publier une recette" onClick={() => handleClickPublish()}/>
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