import * as React from "react";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { StyledTextInput } from "../components/StyledTextInput";
import AlertModal from "../components/AlertModal"; // Assurez-vous d'importer AlertModal
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
        navigate("/"); // Redirigez l'utilisateur vers la page de connexion
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
            text={(e) => setPassword(e)}
            placeholder="Entrez votre mot de passe"
            passwordInput
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirmation mot de passe:</label>
          <StyledTextInput
            text={(e) => setConfirmPassword(e)}
            placeholder="Confirmez votre mot de passe"
            passwordInput
          />
        </div>
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
