import React from 'react';
import SignUp from './components/SignUp';
import ResetPassword from './components/ResetPassword';
import SecretCode from './components/SecretCode';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {/* Incluez les composants SignIn et SignUp */}
        <SecretCode/>
      </main>
    </div>
  );
}



export default App;
