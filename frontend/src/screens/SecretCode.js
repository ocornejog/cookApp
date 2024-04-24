import React, { useState } from 'react';
import ButtonComponent from '../components/ButtonComponent';
import '../styles/SecretCode.css'; // Assurez-vous d'importer le CSS approprié
import { useNavigate, useLocation } from 'react-router-dom';
import API from '../constants/Api';
import C from "../constants/colors";

function SecretCode() {

  let firstDeploy = true;

  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state;

  const [validCode, setValidCode] = React.useState("");

  const [code, setCode] = useState('');

  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    if (firstDeploy) {
      console.log("j'envoie le mail la");
      firstDeploy = false;
      const sendMail = async(email) => {
        let value = (Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000).toString()
        setValidCode(value);
        let res = await fetch(`${API.APIuri}/api/email/sendMail`, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email:email,
            message:"Voici votre code de vérification : "+ value
          })
        });
      };
      sendMail(email);
    }
  }, []);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logique pour vérifier le code secret
    console.log("Voici le code qui a été envoyé par mail : ",validCode);
    console.log("Voici le code entré par l'utilisateur : ", code);
    console.log("Sont ils égaux ? ", validCode===code);
    if (validCode !== code) {
      setIsValid(false);
    } else {
      navigate('/ResetPassword', {state:email});
    }
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
        {isValid ? <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',
      color:C.red, marginBottom:'20px', marginTop:'-10px'}}>&zwnj; </div>
      : <div style ={{fontSize: '14px', fontFamily:"Montserrat", fontWeight:'330',
      color:C.red, marginBottom:'20px', marginTop:'-10px'}}> Aucun utilisateur associé à l'email saisi</div>}
        <ButtonComponent className="confirm-secret-code-button" type="primary" onClick={handleSubmit} text="Valider le code secret" />
      </form>
      <p>Vous n'avez pas de compte ? <a style={{cursor: 'pointer'}} onClick={() => navigate("/SignUp")}>Créer un compte</a></p>
    </div>
  );
}

export default SecretCode;
