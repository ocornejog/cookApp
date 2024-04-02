import React, { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import '../styles/SecretCode.css'; // Assurez-vous d'importer le CSS approprié

function SecretCode() {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour vérifier le code secret
    console.log('Code secret:', code);
  };

  return (
    <div className="secret-code-container">
      <h2 className="secret-code-title">Vérification du code secret</h2>
      <p className="secret-code-description">
        Saisissez le code secret envoyé à votre adresse e-mail
        pour vérifier votre identité.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="code"></label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={handleCodeChange}
          />
        </div>
        <ButtonComponent className="confirm-secret-code-button" type="primary" onClick={handleSubmit} text="Valider le code secret" />
      </form>
      <p>Vous n'avez pas de compte ? <a href="/inscription">Créer un compte</a></p>
    </div>
  );
}

export default SecretCode;
