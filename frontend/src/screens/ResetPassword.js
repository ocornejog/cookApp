import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/ResetPassword.css';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique de réinitialisation du mot de passe à implémenter ici
    console.log('Nouveau mot de passe:', password);
    console.log('Confirmation du mot de passe:', confirmPassword);
  };

  return (
    <div className="reset-password-container">
      <h2 className="reset-password-title">Réinitialisation</h2>
      <p className="reset-password-description">
        Veuillez saisir votre nouveau mot de passe.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="password">Nouveau mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <ButtonComponent type="primary" onClick={handleSubmit} text="Confirmer le mot de passe" />
      </form>
      <p>Vous avez déjà un compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/")}>Connexion</a></p>
    </div>
  );
}

export default ResetPassword;
