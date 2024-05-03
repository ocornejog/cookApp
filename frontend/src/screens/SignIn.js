import React, { useState, useRef } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import { StyledTextInput } from '../components/StyledTextInput';
import AlertModal from '../components/AlertModal';
import C from "../constants/colors";
import logo from '../logo/CookAppLogo 3.png'; // Importez votre logo ici
import '../styles/SignIn.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../constants/Context';

function SignIn() {

  const navigate = useNavigate();
  const {signIn} = React.useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const emailRef = useRef(email);
  const passwordRef = useRef(password);

  React.useEffect(() => {
    emailRef.current = email;
  }, [email]);

  React.useEffect(() => {
    passwordRef.current = password;
  }, [password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de connexion à implémenter ici
    console.log('Email:', emailRef.current);
    console.log('Password:', passwordRef.current);
    signIn({
      email: emailRef.current, 
      password: passwordRef.current
    })
    .then((result) => {
      if(result !== "correct password"){
        setModalVisible(true);
        if(result === 'incorrect data'){
          setModalText("Les données saisies sont incorrectes");
        } else {
          if(result === "user does not exist") {
            setModalText("Aucun utilisateur n'est associé à ce compte");
          } else {
            if(result === "incorrect password"){
              setModalText("Mot de passe incorrect");
            } else{
              setModalText("Entrez votre email et votre mot de passe");              
            }
          }
        }
      } else {
        console.log(result);
      } 
    })
  };

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        handleSubmit(event);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="sign-in-container">

      <AlertModal message={modalText} visible={modalVisible} 
      textButton={"Ok"} onClickButton={() => setModalVisible(false)}/>
      <img src={logo} alt="Logo de votre site" style={{ width: '40%', objectFit: 'contain' }} />
      <form onSubmit={handleSubmit} style={{marginTop: '32px', width: '100%'}}>
        <div className="montserrat_700" style={{ fontSize: '20px', color: C.green, textAlign: 'left',
          textAlignVertical: 'center', justifyContent: 'center' }}>
          {"E-mail"}
        </div>
        <div style={{width:'100%', marginTop: '8px'}}>
          <StyledTextInput placeholder={"jean@gmail.com"} text={e => setEmail(e)}/>
        </div>
        <div className="montserrat_700" style={{ fontSize: '20px', color: C.green, textAlign: 'left',
          textAlignVertical: 'center', justifyContent: 'center', marginTop: "24px" }}>
          {"Mot de passe"}
          <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <a className={"montserrat_700"} style={{cursor: 'pointer', color: C.green, alignSelf: 'right', fontSize: "12px"}} 
            onClick={() => navigate("/ForgotPassword")}>{"Mot de passe oublié ?"}</a>  
          </div>
        </div>
        <div style={{width:'100%', marginTop: '8px'}}>
          <StyledTextInput passwordInput={true} placeholder={"**********"} text={e => setPassword(e)}/>
        </div>
        <div style={{width:'100%', marginTop: '48px'}}>
          <ButtonComponent type="primary" onClick={handleSubmit} text="Se connecter" />
        </div>
      </form>
      <p>{"Vous n'avez pas de compte ? "}<a style={{cursor: 'pointer'}} onClick={() => navigate("/SignUp")}>{"Créer un compte"}</a></p>


    </div>
  );
}

export default SignIn;
