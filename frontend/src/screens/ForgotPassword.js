import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/ForgotPassword.css';
import { useNavigate } from "react-router-dom";
import API from '../constants/Api';
import C from "../constants/colors";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const [userFound, setUserFound] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Logique de réinitialisation de mot de passe à implémenter ici
    if (email.length > 0) {
      await findUserByMail(email);
    }
  };

  const findUserByMail = async(mail) => {
    let res = await fetch(`${API.APIuri}/api/users/${mail}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    });
    let show = await res.json();
    if (show !== null) {
      navigate('/SecretCode', {state:email});
    } else {
      setUserFound(false);
    }
  }

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Mot de passe oublié</h2>
      <p className="forgot-password-description">
        Saisissez votre adresse e-mail associée à votre compte pour réinitialiser votre mot de passe.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Adresse e-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {userFound ? <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',
      color:C.red, marginBottom:'20px', marginTop:'-10px'}}>&zwnj; </div>
      : <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',
      color:C.red, marginBottom:'20px', marginTop:'-10px'}}> Aucun utilisateur associé à l'email saisi</div>}
        <ButtonComponent type="primary" onClick={handleSubmit} text="Réinitialiser le mot de passe" />
      </form>
      <p>Vous n'avez pas de compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/SignUp")}>Créer un compte</a></p>
    </div>
  );
}

export default ForgotPassword;
