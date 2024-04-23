import React, { useState } from "react";
import "./App.css";
import "./styles/ButtonComponent.css";
import Tabs from "./components/Tabs";
import LogIn from "./screens/LogIn";
import Search from "./screens/Search";
import Recipe from "./screens/Recipe";
import Profile from "./screens/Profile";
import { AuthContext } from "./constants/Context";
import API from "./constants/Api";

const App = () => {
  const [activeTab, setActiveTab] = useState("Chercher");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userGeneratedToken: action.generatedToken,
            userId: action.userId,
            isLoading: false,
            userMail: action.userMail,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userGeneratedToken: action.generatedToken,
            userId: action.userId,
            userName: action.userName,
            userLastName: action.userLastName,
            userPhoto: action.userPhoto,
            userBirthdate: action.userBirthdate,
            userMail: action.userMail,
            userPassword1: action.password1,
            userPassword2: action.password2,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userGeneratedToken: null,
            userId: null,
            userMail: "",
          };
        case "CHANGE_DATA":
          return {
            ...prevState,
            userPhoto: action.userPhoto,
            // Ready to add other changed parameters
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userGeneratedToken: null,
      userId: null,
      userName: "",
      userLastName: "",
      userPhoto: "",
      userBirthdate: "",
      userMail: "",
      userPassword1: "",
      userPassword2: "",
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userId;
      let userGeneratedToken;
      dispatch({
        type: "RESTORE_TOKEN",
        userId: userId,
        generatedToken: userGeneratedToken,
      });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      token: state.userGeneratedToken,
      id: state.userId,
      name: state.userName,
      lastName: state.userLastName,
      photo: state.userPhoto,
      birthdate: state.userBirthdate,
      mail: state.userMail,
      password1: state.userPassword1,
      password2: state.userPassword2,

      signIn: async (data) => {
        let message = "incorrect data";

        if (data.email !== "" && data.password !== "") {
          const mailLowerCase = data.email.toLowerCase();

          await fetch(`${API.APIuri}/api/users/loginUser/${mailLowerCase}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              password: data.password,
            }),
          })
            .then((response) => response.json())
            .then(async (data) => {
              //console.log(data);
              if (data !== "user does not exist") {
                if (data === "incorrect password") {
                  message = "incorrect password";
                } else {
                  message = "correct password";
                  //const decryptedName = await decrypt(data.user.name);
                  //const decryptedLastname = await decrypt(data.user.lastname);
                  dispatch({
                    type: "SIGN_IN",
                    generatedToken: data.token,
                    userId: data.user._id,
                    userName: data.user.name,
                    userLastName: data.user.lastname,
                    userMail: data.user.email,
                    userBirthdate: data.user.birthdate,
                    userPhoto: data.user.photo,
                    password1: data.user.password.substring(0, 7),
                    password2: data.user.password.substring(
                      7,
                      data.user.password.length
                    ),
                  });
                  setLoggedIn(true);
                }
              } else {
                message = "user does not exist";
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          message = "write username and password";
        }
        return message;
      },
      signOut: () => {
        //To fulfill with sign out logic
        setLoggedIn(false);
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data) => {
        let message = "Données incorrectes";
      
        // Vérifier si tous les champs sont remplis
        if (data.email !== "" && data.password !== "") {
          const mailLowerCase = data.email.toLowerCase();
      
          // Vérifier le format de l'email
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(mailLowerCase)) {
            message = "Format de l'email invalide";
            return message;
          }
      
          // Vérifier le format du mot de passe
          const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&¿.#-])[A-Za-z\d@$!%*?&¿.#-]{8,}$/;
          if (!passwordRegex.test(data.password)) {
            message =
              "Recommandation : Minimum 8 caractères, une lettre majuscule, un chiffre et un caractère spécial (@$!%*?&¿.#-)";
            return message;
          }
      
          await fetch(`${API.APIuri}/api/users/create`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: data.name,
              lastname: data.lastname,
              birthdate: data.birthdate,
              email: mailLowerCase,
              password: data.password,
            }),
          })
            .then((response) => response.json())
            .then(async (data) => {
              if (data === "User created") {
                message = "Utilisateur créé avec succès";
              } else if (data === "Email existant, veuillez vous connecter") {
                message = "Email existant, veuillez vous connecter";
              } else {
                message = "Erreur lors de la création de l'utilisateur";
              }
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        } else {
          message = "Veuillez remplir tous les champs";
        }
        return message;
      },
      
      changeData: async (data) => {
        //To be fulfilled with changing data logic to change auth context
      },
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContext}>
      <div className="App">
        {!loggedIn ? (
          <LogIn />
        ) : (
          <Tabs activeTab={activeTab} onTabChange={handleTabChange}>
            <div label="Chercher">
              <Search />
            </div>
            <div label="Recettes">
              <Recipe />
            </div>
            <div label="Profil" icon="person-circle">
              <Profile />
            </div>
          </Tabs>
        )}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
