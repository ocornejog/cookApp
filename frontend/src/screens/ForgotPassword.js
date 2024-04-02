import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/ForgotPassword.css';
import { useNavigate } from "react-router-dom";

function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de réinitialisation de mot de passe à implémenter ici
    console.log('Email:', email);
  };

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
        <ButtonComponent type="primary" onClick={handleSubmit} text="Réinitialiser le mot de passe" />
      </form>
      <p>Vous n'avez pas de compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/SignUp")}>Créer un compte</a></p>
    </div>
  );
}

export default ForgotPassword;
