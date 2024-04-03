import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import C from "../constants/colors";
import logo from '../logo/CookAppLogo 3.png'; // Importez votre logo ici
import '../styles/SignIn.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de connexion à implémenter ici
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="sign-in-container">
      <img src={logo} alt="Logo de votre site" style={{ width: '50%', objectFit: 'contain' }} />
      <form onSubmit={handleSubmit} style={{marginTop: '32px', width: '100%'}}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text" // Utiliser type="text" pour afficher le texte normalement
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-group" style={{width: '100%'}}>
          <div style={{width: '100%', alignItems: 'right', display: 'flex', flexDirection: 'row'}}>
            <label htmlFor="password">Mot de passe</label>
            <div style={{display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end'}}>
              <a className={"montserrat_700"} style={{cursor: 'pointer', color: C.green, alignSelf: 'right'}} 
              onClick={() => navigate("/ForgotPassword")}>Mot de passe oublié ?</a>  
            </div>
          </div>
          <input
            type="password" // Utiliser type="password" pour afficher des astérisques
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <ButtonComponent type="primary" onClick={handleSubmit} text="Connexion" />
      </form>
      <p>Vous n'avez pas de compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/SignUp")}>Créer un compte</a></p>
    </div>
  );
}

export default SignIn;
