import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { StyledTextInput } from "../components/StyledTextInput";
import AlertModal from "../components/AlertModal";
import "../styles/SignUp.css";
import { AuthContext } from "../constants/Context";

function SignUp() {
  const navigate = useNavigate();
  const { signUp } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalText, setModalText] = React.useState("");
  const [passwordStrong, setPasswordStrong] = useState(false); // État pour suivre si le mot de passe est fort
  const [minLengthMet, setMinLengthMet] = useState(false);
  const [containsUppercase, setContainsUppercase] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [containsSpecialChar, setContainsSpecialChar] = useState(false);

  // Fonction pour vérifier si le mot de passe est fort
  const checkPasswordStrength = (newPassword) => {
    // Vérifier la longueur minimale
    setMinLengthMet(newPassword.length >= 8);

    // Vérifier s'il contient une lettre majuscule
    setContainsUppercase(/[A-Z]/.test(newPassword));

    // Vérifier s'il contient un chiffre
    setContainsNumber(/\d/.test(newPassword));

    // Vérifier s'il contient un caractère spécial
    setContainsSpecialChar(/[@$!%*?&¿.#-]/.test(newPassword));

    // Vérifier si toutes les conditions sont respectées
    const isStrongPassword =
      newPassword.length >= 8 &&
      /[A-Z]/.test(newPassword) &&
      /\d/.test(newPassword) &&
      /[@$!%*?&¿.#-]/.test(newPassword);
    setPasswordStrong(isStrongPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifier si les mots de passe ne correspondent pas
    if (password !== confirmPassword) {
      setModalVisible(true);
      setModalText("Les mots de passe ne correspondent pas");
      return;
    }

    signUp({
      name,
      lastname,
      birthdate,
      email,
      password,
    }).then((result) => {
      if (result === "User created") {
        console.log(result);
        navigate("/");
      } else if (result === "Email exist") {
        console.log(result);
      } else {
        setModalVisible(true);
        setModalText(result);
      }
    });
  };

  return (
    <div className="sign-up-container">
      <AlertModal
        message={modalText}
        visible={modalVisible}
        textButton={"Ok"}
        onClickButton={() => setModalVisible(false)}
      />
      <h2 className="sign-up-title">Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <StyledTextInput
            text={(e) => setEmail(e)}
            placeholder="Entrez votre email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Nom:</label>
          <StyledTextInput
            placeholder={"Entrez votre nom"}
            text={(e) => setLastname(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Prénom:</label>
          <StyledTextInput
            placeholder={"Entrez votre prénom"}
            text={(e) => setName(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="birthdate">Date de naissance:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mot de passe:</label>
          <StyledTextInput
            text={(e) => {
              setPassword(e);
              checkPasswordStrength(e); // Vérifiez la force du mot de passe à chaque changement
            }}
            placeholder="Entrez votre mot de passe"
            passwordInput
          />
          {!minLengthMet && (
            <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
              Minimum 8 caractères
            </p>
          )}
          {!containsUppercase && (
            <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
              Une lettre majuscule
            </p>
          )}
          {!containsNumber && (
            <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
              Un chiffre
            </p>
          )}
          {!containsSpecialChar && (
            <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
              Un caractère spécial (@$!%*?&¿.#-)
            </p>
          )}

          {minLengthMet &&
            containsUppercase &&
            containsNumber &&
            containsSpecialChar && (
              <p
                style={{
                  color: "#337D74",
                  fontSize: "0.8rem",
                  marginTop: "5px",
                }}
              >
                Mot de passe fort
              </p>
            )}
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirmation mot de passe:</label>
          <StyledTextInput
            text={(e) => setConfirmPassword(e)}
            placeholder="Confirmez votre mot de passe"
            passwordInput
          />
        </div>
        {/* affichage du message si les mots de passe ne correspondent pas  */}
        {password !== confirmPassword && (
          <p style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}>
            Les mots de passe ne correspondent pas
          </p>
        )}

        {/* Affichage du message si les mots de passe correspondent */}
        {password === confirmPassword && (
          <p style={{ color: "#337D74", fontSize: "0.8rem", marginTop: "5px" }}>
            Les mots de passe correspondent
          </p>
        )}
        <ButtonComponent
          type="primary"
          onClick={handleSubmit}
          text="Inscription"
        />
      </form>
      <p>
        Déjà un compte ?{" "}
        <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          Connexion
        </a>
      </p>
    </div>
  );
}

export default SignUp;
