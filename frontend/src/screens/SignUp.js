import * as React from "react";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { StyledTextInput } from "../components/StyledTextInput";
import "../styles/SignUp.css";
import bcrypt from "bcryptjs-react";
import API from "../constants/Api";

function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [passwordFormatError, setPasswordFormatError] = React.useState(false);

  const handleEmailChange = (event) => {
    setEmail(event);
  };

  const handleNameChange = (event) => {
    setName(event);
  };

  const handlelastnameChange = (event) => {
    setlastname(event);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event;
    setPassword(newPassword);

    // Vérifier si le mot de passe respecte les conditions requises
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&¿.#-])[A-Za-z\d@$!%*?&¿.#-]{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      setPasswordFormatError(true);
    } else {
      setPasswordFormatError(false);
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event);
  };

  React.useEffect(() => {
    console.log("My name is", name);
  }, [name]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérifier si les champs obligatoires sont vides
    if (!email || !name || !lastname) {
      console.error("Veuillez remplir tous les champs obligatoires.");
      console.log(email, name, lastname);
      return;
    }



    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Veuillez entrer une adresse email valide.");
      return;
    }

    // Vérifier si les mots de passe ne correspondent pas
    if (password !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas");
      return;
    }

    const response3 = await fetch(`${API.APIuri}/api/users/${email}`);
    const foundUser = await response3.json();

    if (foundUser) {
      console.error("Cet email est déjà utilisé");
      return;
    }
    
    // Si les mots de passe correspondent, continuer avec le processus d'inscription

    try {
      await fetch(`${API.APIuri}/api/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          lastname: lastname,
          birthdate: birthdate,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then(async (data) => {
          if (data === "User created") {
            console.log("Utilisateur créé avec succès");
            // Rediriger l'utilisateur vers une page de confirmation ou de connexion
            navigate("/"); // Remplacez '/login' par le chemin approprié
          } else {
            console.error("Erreur lors de la création de l'utilisateur");
            // Gérer les erreurs d'une manière appropriée
          }
        })
        .catch((error) => {
          console.error("Erreur lors de la création de l'utilisateur");
        });
    } catch (error) {
      console.error("Erreur lors de la communication avec le serveur :", error);
      // Gérer les erreurs de connexion avec le serveur
    }
  };

  return (
    <div className="sign-up-container">
      <h2 className="sign-up-title">Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <StyledTextInput
            text={(e) => handleEmailChange(e)}
            placeholder="Entrez votre email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Nom:</label>
          <StyledTextInput
            placeholder={"nom"}
            text={(e) => handlelastnameChange(e)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Prénom:</label>
          <StyledTextInput
            placeholder={"prénom"}
            text={(e) => handleNameChange(e)}
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
          <StyledTextInput
            text={(e) => handlePasswordChange(e)}
            placeholder="Entrez votre mot de passe"
            passwordInput
          />
          {passwordFormatError && (
            <p style={{ color: "red" }}>
              Recommandation : Minimum 8 caractères, une lettre majuscule, un
              chiffre et un caractère spécial (@$!%*?&¿.#-)
            </p>
          )}
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirmation mot de passe:</label>
          <StyledTextInput
            text={(e) => handleConfirmPasswordChange(e)}
            placeholder="Confirmez votre mot de passe"
            passwordInput
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
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
