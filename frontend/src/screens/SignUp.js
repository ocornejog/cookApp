import React, { useState, useEffect } from "react";
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

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlelastnameChange = (event) => {
    setlastname(event.target.value);
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

    // Vérifier si les mots de passe ne correspondent pas
    if (password !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas");
      return;
    }

    // Si les mots de passe correspondent, continuer avec le processus d'inscription
    const userData = {
      name: name,
      lastname: lastname, // "lastname" semble être le prénom dans votre modèle de base de données
      birthdate: birthdate,
      email: email,
      password: bcrypt.hashSync(password, 10),
    };

    try {
      const response = await fetch(`${API.APIuri}/api/users/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Utilisateur créé avec succès");
        // Rediriger l'utilisateur vers une page de confirmation ou de connexion
        navigate("/"); // Remplacez '/login' par le chemin approprié
      } else {
        console.error("Erreur lors de la création de l'utilisateur");
        // Gérer les erreurs d'une manière appropriée
      }
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
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Entrez votre email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="name">Nom:</label>
          <StyledTextInput
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Entrez votre nom"
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Prénom:</label>
          <StyledTextInput
            type="text"
            id="lastname"
            value={lastname}
            onChange={handlelastnameChange}
            placeholder="Entrez votre prénom"
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
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Entrez votre mot de passe"
            passwordInput
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirmation mot de passe:</label>
          <StyledTextInput
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirmez votre mot de passe"
            passwordInput
          />
        </div>
        {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
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
