import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import '../styles/SignUp.css';

function SignUp() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique d'inscription à implémenter ici
    console.log('Email:', email);
    console.log('Nom:', name);
    console.log('Prénom:', surname);
    console.log('Date de naissance:', birthdate);
    console.log('Mot de passe:', password);
    console.log('Confirmation mot de passe:', confirmPassword);
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
      <p>Déjà un compte ? <a href="/connexion">Connexion</a></p>
    </div>
  );
}

export default SignUp;
