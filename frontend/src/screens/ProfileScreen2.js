import * as React from 'react';
import UserCard from "../components/UserCard";
import ButtonComponent from "../components/ButtonComponent";
import PhotoSelection from '../components/PhotoSelection';
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";
import { useNavigate, useLocation } from "react-router-dom";
import API from '../constants/Api';
import C from '../constants/colors'
import { AuthContext } from '../constants/Context';

function ProfileScreen2() {

  const {changeData} = React.useContext(AuthContext);

  const auth_context = React.useContext(AuthContext);

  const userId = auth_context.id;
  const [userName,setUserName] = React.useState(auth_context.name);
  const [userLastName, setUserLastName] = React.useState(auth_context.lastName);
  const [userMail, setUserMail] = React.useState(auth_context.mail);
  const [photo, setPhoto] = React.useState(auth_context.photo);
  const [birthDate, setBirthDate] = React.useState(auth_context.birthdate);

  const navigate = useNavigate();

  const handleClickPassword = () => {
    navigate(`/profile/ProfileScreen3`);
  };

  const handleClickParametres = () => {
    navigate(`/profile/ProfileScreen2`);
  };
 
  const handleNewPhoto = async(e) => {
    setPhoto(e);
  }

  const handleSaveChanges = async() => {
    let res = await fetch(`${API.APIuri}/api/users/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_context.token}`
      },
      body: JSON.stringify({
          _id: userId,
          name: userName,
          lastName: userLastName,
          birthDate: birthDate,
          photo: photo,
          userId: auth_context.id
      })
    });
    let reponse = await res.json();
    if (reponse == "User updated") {
      changeData({
        userId: userId,
      }).then(() => {
        navigate(`/profile/`);
      })
    }
  }

  return (
    <div>
      <UserCard onClick={handleClickParametres} imgsrc={auth_context.photo} name={auth_context.name.toUpperCase()+" "+auth_context.lastName.toUpperCase()}/>
      <div style={{width:'100%', display:'flex', 
      alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ textAlign:'left', marginLeft:'16px', marginTop:'30px', fontSize: '32px', fontFamily:"Montserrat",
          fontWeight:'750', textDecoration:'underline', textDecorationThickness:'1.5px', 
          textUnderlineOffset:'7px',flex:1}}>
              Mes infos perso
        </div>
      </div>
      <div style={{flex:'flexWrap'}}>
        <div style={{flex:'1', width:'15%', marginLeft:'100px', marginTop:'50px'}}>
            <PhotoSelection photo={auth_context.photo} text="*Choisir une photo" callback={(e) => handleNewPhoto(e)}/>
        </div>
        <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'73px', fontSize: '20px', fontFamily:"Montserrat",
            fontWeight:'330',display:'flex',flex:'1'}}>
          Nom
          <div style={{marginLeft:'100px', width:'42.5%',marginTop:'-10px'}}>
            <StyledTextInput placeholder="" text={e => setUserLastName(e)} fill={userLastName}/>
          </div>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'53px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Prénom
        <div style={{marginLeft:'90px', width:'42%',marginTop:'-10px'}}>
          <StyledTextInput placeholder="" text={e => setUserName(e)} fill={userName}/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'73px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Mail
        <div style={{marginLeft:'110px', width:'42.5%',marginTop:'-10px'}}>
          <StyledTextInput placeholder="" fill={userMail}/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'10px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Date de naissance
        <div style={{marginLeft:'33px', width:'41%',marginTop:'-10px'}}>
          <div className="input-group">
            <input
              type="date"
              id="birthdate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
        </div>  
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'34px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Mot de passe
        <div style={{marginLeft:'33px', width:'41%',marginTop:'-20px'}}>
          <ButtonComponent type="secondary" text="Modifier" onClick={() => {handleClickPassword()}}/>
        </div>
      </div>
      <div style={{width:'30%', marginTop:'66px', marginLeft:'37%', marginBottom:'70px'}}>
        <ButtonComponent type="primary" text="Enregistrer les modifications" 
        onClick={() => handleSaveChanges()}/>
      </div>
    </div>
  );
}

export default ProfileScreen2;