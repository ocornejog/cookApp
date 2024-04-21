import * as React from 'react';
import UserCard from "../components/UserCard";
import ButtonComponent from "../components/ButtonComponent";
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";
import { useNavigate, useLocation } from "react-router-dom";
import API from '../constants/Api';
import C from '../constants/colors'

function ProfileScreen2() {
  const regex = /^([0-9][0-2])\/([0-9][0-2])\/\d{4}$/;
  //gather here the context instead of these testVars
  const testUserid = "65e31cf769050ff9bab2a6c1";
  const testBirthDate = "22/12/2001";
  const testName = "Thomas";
  const testLastName = "Joly";
  const testMail = "thomasjoly04@gmail.com";

  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [validFormat, setValidFormat] = React.useState(true);


  const checkDateFormat = () => {
    setValidFormat(regex.test(birthDate));
  }

  const handleClickPassword = () => {
    navigate(`/ProfileScreen3`);
  };

  const handleClickParametres = () => {
    navigate(`/ProfileScreen2`);
  };

  const handleSaveChanges = async() => {
    checkDateFormat();
    if ((validFormat) || (birthDate.length==0)) {
      let postName = testName;
      let postBirth = testBirthDate;
      let postLastName = testLastName;
      if (name.length != 0) {
        postName = name;
      }
      if (lastName.length != 0) {
        postLastName = lastName;
      }
      if (birthDate.length != 0) {
        postBirth = birthDate;
      }
      let res = await fetch(`${API.APIuri}/api/users/update`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            _id: testUserid,
            name: postName,
            lastName: postLastName,
            birthDate: postBirth
        })
      });
    }
  }

  return (
    <div>
      <UserCard onClick={handleClickParametres}/>
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
          <StyledTextInput placeholder={testName} text={e => setLastName(e)}/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'53px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Prénom
        <div style={{marginLeft:'90px', width:'42%',marginTop:'-10px'}}>
          <StyledTextInput placeholder={testLastName} text={e => setName(e)}/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'73px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Mail
        <div style={{marginLeft:'110px', width:'42.5%',marginTop:'-10px'}}>
          <StyledTextInput placeholder={testMail}/>
        </div>
      </div>
      <div style ={{textAlign:'left', marginTop:'61px',marginLeft:'10px', fontSize: '20px', fontFamily:"Montserrat",
          fontWeight:'330',display:'flex'}}>
        Date de naissance
        <div style={{marginLeft:'33px', width:'41%',marginTop:'-10px'}}>
          <StyledTextInput placeholder={testBirthDate} text={e => setBirthDate(e)}/>
          {validFormat ? <p></p>
          : <p style={{marginBottom:'0px', marginTop:'0px', fontSize:'16px', fontFamily:"Montserrat",
            color:C.red}}>Format invalide (DD/MM/YYYY)</p>}
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