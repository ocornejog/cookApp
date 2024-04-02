import * as React from 'react';
import UserCard from "../components/UserCard";
import ButtonComponent from "../components/ButtonComponent";
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";
import C from "../constants/colors"
import { useNavigate, useLocation } from "react-router-dom";

function ProfileScreen3() {
  const location = useLocation();
  const data = location.state;
  const currentPassword = data.currentPassword;
  const [newPassword1, setNewPassword1] = React.useState('');
  const [newPassword2, setNewPassword2] = React.useState('');

  const [passwordFormat, setPasswordFormat] = React.useState(false);
  const [passwordsMatch, setPasswordsMatch] = React.useState(false);
  const [oldPasswordMatch, setOldPasswordMatch] = React.useState(false);

  const datasend = {prenom:"Oscar", nom:"CORNEJO", mail:"oscarcornejo@gmail.com", date:"22/12/2001"};

  const navigate = useNavigate();

  const checkOldPasword = (e) => {
    setOldPasswordMatch(currentPassword===e);
  };

  const handleOldPassChange = (e) => {
    checkOldPasword(e);
  };

  React.useEffect(() => {
    let numbers = ['1','2','3','4','5','6','7','8','9','0'];
    let special = ['&','~','"','#',"'",'{','(','[','-','|','`','_','\\','^','@',')','°',']','=','+','}',
    '¨','$','£','¤','%','*','µ',',','?',';','.',':','/','!','§','²','€'];
    let maj = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let containsNumber = false;
    let containsSpecial = false;
    let containsMaj = false;
    if (newPassword1.length < 8) {
      setPasswordFormat(false);
    } else {
      for (let i=0;i<numbers.length;i++) {
        if (newPassword1.includes(numbers[i])) {
          containsNumber = true;
        };
      };
      for (let i=0;i<special.length;i++) {
        if (newPassword1.includes(special[i])) {
          containsSpecial = true;
        };
      };
      for (let i=0;i<maj.length;i++) {
        if (newPassword1.includes(maj[i])) {
          containsMaj = true;
        };
      };
      setPasswordFormat(containsMaj&&containsNumber&&containsSpecial);
    }
    setPasswordsMatch(newPassword1===newPassword2);
  }, [newPassword1,newPassword2]);

  const handleClickParametres = () => {
    navigate(`/ProfileScreen2`, {state:datasend});
  };

  return (
    <div>
      <UserCard onClick={handleClickParametres}/>
      {oldPasswordMatch ? <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'113px',
      color:C.white}}>
        &zwnj;
      </div>
      : <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'113px',
      color:C.red}}>
        Mot de passe actuelle incorect
      </div>}
      <div style ={{display:'flex', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center',
       fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'53px'}}>
        Entrez votre mot de passe actuelle
        <div style={{marginLeft:'100px', width:'20%',marginTop:'-12px'}}>
          <StyledTextInput placeholder="" passwordInput={true} text={e => handleOldPassChange(e)}/>
        </div>
      </div>
      {passwordFormat ? <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'40px',
      color:C.white}}>
        &zwnj;
        </div>
      : <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'40px',
      color:C.red}}>
        Recommandation : Minimum 8 caractères, une lettre majuscule, un chiffre et un caractère spécial (@$!%*?&¿.#-)
        </div>
      }
      <div style ={{display:'flex', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center',
       fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'41px', marginLeft:'-7px'}}>
        Entrez votre nouveau mot de passe
        <div style={{marginLeft:'100px', width:'20%',marginTop:'-12px'}}>
          <StyledTextInput placeholder="" passwordInput={true} text={e => setNewPassword1(e)}/>
        </div>
      </div>
      <div style ={{display:'flex', textAlign: 'center', textAlignVertical: 'center', justifyContent: 'center',
       fontSize: '20px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'79px', marginLeft:'-49px'}}>
        Confirmation du nouveau mot de passe
        <div style={{marginLeft:'100px', width:'19.7%',marginTop:'-12px'}}>
          <StyledTextInput placeholder="" passwordInput={true} text={e => setNewPassword2(e)}/>
        </div>
      </div>
      {passwordsMatch ? <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'40px',
      color:C.green}}>
        Les mots de passe correspondent
        </div>
      : <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',marginTop:'40px',
      color:C.red}}>
        Les mots de passe ne correspondent pas
        </div>}
      <div style={{marginTop:'43px', width:'18%', marginLeft:'41%', marginBottom:'106px'}}>
        <ButtonComponent type="primary" text="Enregistrer le nouveau mot de passe" onClick={() => {console.log(oldPasswordMatch)}}/>
      </div>
    </div>
  );
}

export default ProfileScreen3;