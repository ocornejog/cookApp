import React from 'react';

const AuthContext = React.createContext({
  token: '',
  id: '',
  name: '',
  lastName: '',
  photo: '',
  birthdate: '',
  mail: '',
  password1: '',
  password2: '',
  
  signIn: (data) => {
    return new Promise((resolve, reject) => {});
  },
  signOut: () => {},
  signUp: (data) => {},
  changeData: (data) => {},
});

export { AuthContext };

