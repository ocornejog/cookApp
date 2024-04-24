import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import AlertModal from '../components/AlertModal';
import { StyledTextInput } from '../components/StyledTextInput';
import '../styles/ResetPassword.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Import des hooks depuis react-router-dom
import API from '../constants/Api';
import C from "../constants/colors";

function Password() { // Renommez votre composant en utilisant une majuscule pour respecter la convention
  const navigate = useNavigate(); // Appel du hook useNavigate
  const location = useLocation(); // Appel du hook useLocation

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [passwordFormatError, setPasswordFormatError] = useState(false);

  const handlePasswordChange = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&¿.#-])[A-Za-z\d@$!%*?&¿.#-]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordFormatError(true);
    } else {
      setPasswordFormatError(false);
    }
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
    if(!error){
      const email = location.state;

      try {
        let id = "";
        const foundUser = await fetch(`${API.APIuri}/api/users/${email}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
        });
        let foundUserData = await foundUser.json();
        if (foundUserData !== null) {
          console.log('My user data is:', foundUserData);
          id = foundUserData._id;
          console.log("My data to be changed is:", id, password);
          const response = await fetch(`${API.APIuri}/api/users/password`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
              _id: id, 
              password 
            }),
          });
          const data = await response.json();
          if (data === "User updated") {
            console.log('Mot de passe réinitialisé avec succès.');
            navigate('/'); 
          } else {
            setError('Échec de la réinitialisation du mot de passe. Veuillez réessayer.');
          }
        } else {
          console.log("L'utilisateur n'existe pas");
        }
      } catch (error) {
        console.error('Erreur lors de la réinitialisation du mot de passe:', error);
        setError('Une erreur s\'est produite lors de la réinitialisation du mot de passe. Veuillez réessayer.');
      }
    } else {
      console.log("Les mots de passe ne correspondent pas. Veuillez reesayer");
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
        <div className="montserrat_700" style={{ fontSize: '20px', color: C.green, textAlign: 'left',
          textAlignVertical: 'center', justifyContent: 'center' }}>
          {"Nouveau mot de passe:"}
        </div>
        <div style={{width:'100%', marginTop: '8px'}}>
          <StyledTextInput passwordInput={true} placeholder={"**********"} text={e => setPassword(e)}/>
        </div>
        {passwordFormatError && (
          <p style={{ color: "red" }}>
            Recommandation : Minimum 8 caractères, une lettre majuscule, un
            chiffre et un caractère spécial (@$!%*?&¿.#-)
          </p>
        )}
        <div className="montserrat_700" style={{ fontSize: '20px', color: C.green, textAlign: 'left',
          textAlignVertical: 'center', justifyContent: 'center', marginTop: "24px" }}>
          {"Confirmer le mot de passe:"}
        </div>
        <div style={{width:'100%', marginTop: '8px'}}>
          <StyledTextInput passwordInput={true} placeholder={"**********"} text={e => setConfirmPassword(e)}/>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ButtonComponent type="primary" onClick={handleSubmit} text="Confirmer le mot de passe" />
      </form>
      <p>Vous avez déjà un compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/")}>Connexion</a></p>
    </div>
  );
}

export default Password; // Export du composant Password
