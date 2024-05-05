import * as React from 'react';
import UserCard from "../components/UserCard";
import ButtonComponent from "../components/ButtonComponent";
import AlertModal from '../components/AlertModal';
import { StyledTextInput } from '../components/StyledTextInput';
import "../styles/ButtonComponent.css";
import C from "../constants/colors"
import { useNavigate, useLocation } from "react-router-dom";
import bcrypt from "bcryptjs-react";
import API from '../constants/Api';
import { AuthContext } from '../constants/Context';

function ProfileScreen3() {
  const {changeData} = React.useContext(AuthContext);

  const [newPassword1, setNewPassword1] = React.useState('');
  const [newPassword2, setNewPassword2] = React.useState('');

  const [oldPassword, setOldPassword] = React.useState('');
  const [passwordFormat, setPasswordFormat] = React.useState(false);
  const [passwordsMatch, setPasswordsMatch] = React.useState(false);
  const [modalText, setModalText] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [name, setName] = React.useState("");
  const [userUpdated, setUserUpdated] = React.useState(false);

  const datasend = {prenom:"Oscar", nom:"CORNEJO", mail:"oscarcornejo@gmail.com", date:"22/12/2001"}; 

  const auth_context = React.useContext(AuthContext);
  
  const currentPassword = auth_context.password1.concat(auth_context.password2);

  const userId = auth_context.id;

  const navigate = useNavigate();

  const handleOldPassChange = (e) => {
    setOldPassword(e);
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
    navigate(`/profile/ProfileScreen2`, {state:datasend});
  };

  const handleSave = async() => {
    if (passwordFormat && passwordsMatch) {
      bcrypt.compare(oldPassword, currentPassword, async function(err, isValid){
        if (isValid) {
          bcrypt.compare(newPassword1, currentPassword, async function(diff, same) {
            if (same) {
              setModalText("Votre nouveau mot de passe est le même que le mot de passe actuel.");
              setModalVisible(true);
            } else {
              let res = await fetch(`${API.APIuri}/api/users/password`, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    _id: userId,
                    password: newPassword1
                })
              })
              const data = await res.json();
              if (data === "User updated") {
        
                setModalText("Le mot de passe a été mis a jour avec succès");
                setModalVisible(true);
                setUserUpdated(true);
                let hashed = bcrypt.hashSync(newPassword1, 10);
                changeData({
                  userId: userId,
                })
              }
            }
          })
        } else {
          setModalText("Il y avait une erreur. Veuillez reesayer.");
          setModalVisible(true);
        }})
    }
  }

  React.useEffect(() => {
    const myName = auth_context.name.toUpperCase();
    const myLastname = auth_context.lastName.toUpperCase();
    setName(`${myName} ${myLastname}`);
  }, [])

  React.useEffect(() => {
    if (userUpdated && modalVisible === false) {
      navigate(`/profile/`);
    }
  }, [modalVisible])

  return (
    <div>
      <AlertModal message={modalText} visible={modalVisible} 
      textButton={"Ok"} onClickButton={() => setModalVisible(false)}/>
      <UserCard onClick={handleClickParametres} imgsrc={auth_context.photo} name={name}/>
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
        <ButtonComponent type="primary" text="Enregistrer le nouveau mot de passe" onClick={() => handleSave()}/>
      </div>
    </div>
  );
}

export default ProfileScreen3;