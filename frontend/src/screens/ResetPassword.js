import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/ResetPassword.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Import des hooks depuis react-router-dom
import API from '../constants/Api';

function Password() { // Renommez votre composant en utilisant une majuscule pour respecter la convention
  const navigate = useNavigate(); // Appel du hook useNavigate
  const location = useLocation(); // Appel du hook useLocation

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const passwordEquals = () => {
    if(password !== confirmPassword){
      setError('Les mots de passe ne correspondent pas.');
    } else{
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    const email = location.state;
    try {
      const response = await fetch(`${API.APIuri}/api/users/password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        console.log('Mot de passe réinitialisé avec succès.');
        navigate('/Login'); 
      } else {
        setError('Échec de la réinitialisation du mot de passe. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de la réinitialisation du mot de passe:', error);
      setError('Une erreur s\'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer.');
    }
  };

  React.useEffect(() => {
    if((password.length !== 0)){
      handlePasswordChange();
    }
  }, [password]);

  React.useEffect(() => {
    passwordEquals();
  }, [password, confirmPassword]);

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
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ButtonComponent type="primary" onClick={handleSubmit} text="Confirmer le mot de passe" />
      </form>
      <p>Vous avez déjà un compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/")}>Connexion</a></p>
    </div>
  );
}

export default Password; // Export du composant Password
