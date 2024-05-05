import React, { useState, useEffect } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import AlertModal from '../components/AlertModal';
import { StyledTextInput } from '../components/StyledTextInput';
import { useNavigate, useLocation } from 'react-router-dom'; 
import API from '../constants/Api';
import C from "../constants/colors";
import bcrypt from 'bcrypt'; // Importez bcrypt ici

function Password() {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [passwordFormatError, setPasswordFormatError] = useState(false);
  const [previousPassword, setPreviousPassword] = useState('');

  useEffect(() => {
    const fetchPreviousPassword = async () => {
      try {
        const email = location.state;
        const response = await fetch(`${API.APIuri}/api/users/${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const userData = await response.json();
        setPreviousPassword(userData.password);
      } catch (error) {
        console.error('Erreur lors de la récupération de l\'ancien mot de passe:', error);
      }
    };
    fetchPreviousPassword();
  }, [location.state]);

  const handlePasswordChange = (value) => {
    setPassword(value);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&¿.#-])[A-Za-z\d@$!%*?&¿.#-]{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordFormatError(true);
    } else {
      setPasswordFormatError(false);
    }
  };

  const handleSave = async () => {
    if (passwordFormatError || password !== confirmPassword) {
      setError('Veuillez vérifier les informations saisies.');
      return;
    }
    
    // Comparer l'ancien mot de passe avec le mot de passe actuel
    bcrypt.compare(password, previousPassword, function(err, isValid){
      if (isValid) {
        setError("Le nouveau mot de passe ne peut pas être identique à l'ancien.");
        return;
      } else {
        // Code pour mettre à jour le mot de passe dans la base de données
      }
    });
  };

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
          <StyledTextInput passwordInput={true} placeholder={"**********"} text={handlePasswordChange}/>
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
          <StyledTextInput passwordInput={true} placeholder={"**********"} text={(value) => setConfirmPassword(value)}/>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ButtonComponent type="primary" onClick={handleSave} text="Confirmer le mot de passe" />
      </form>
      <p>Vous avez déjà un compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/")}>Connexion</a></p>
      <AlertModal
        message={"okay"}
        visible={modalVisible}
        textButton={"Ok"}
        onClickButton={() => setModalVisible(true)}
      />
    </div>
  );
}

export default Password;
