import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
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
      <form onSubmit={handleSubmit} style={{marginTop: '32px'}}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text" // Utiliser type="text" pour afficher le texte normalement
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mot de passe:</label>
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
