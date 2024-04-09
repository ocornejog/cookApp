import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/SignUp.css';
import { useNavigate } from 'react-router-dom';  

function SignUp() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('../../backend/controllers/UsersController.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          lastname: surname, // Renommé en lastname pour correspondre à votre modèle utilisateur
          birthdate,
          password,
        }),
      });
      if (response.ok) {
        // Traitement réussi
        console.log('Utilisateur créé avec succès');
        // Rediriger l'utilisateur vers une autre page si nécessaire
      } else {
        // Gestion des erreurs si la requête échoue
        console.error('Échec de la création de l\'utilisateur');
      }
    } catch (error) {
      // Gestion des erreurs en cas de problème avec la requête
      console.error('Erreur lors de la création de l\'utilisateur :', error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2 className='sign-up-title'>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Nom:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="surname">Prénom:</label>
          <input
            type="text"
            id="surname"
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="birthdate">Date de naissance:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirmation mot de passe:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <ButtonComponent type="primary" onClick={handleSubmit} text="Inscription" />
      </form>
      <p>Déjà un compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/")}>Connexion</a></p>
    </div>
  );
}

export default SignUp;
