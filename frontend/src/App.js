import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp'; // Importez la page d'inscription

function App() {
  return (
    <div className="App">
      <main>
        {/* Incluez les composants SignIn et SignUp */}
        <SignUp />
      </main>
    </div>
  );
}

export default App;

