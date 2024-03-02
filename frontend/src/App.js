import logo from './logo.svg';
import './App.css';
import { TextInputComp, getCred } from './TextInput';

function App() {
  return (  
    <div className="App">
      <div className = "userinput">
        <TextInputComp placeholder="type your email here" pass={false}/>
        <TextInputComp id = "userpass" placeholder="type your password here" pass={true}/>
        <button onClick={getCred}>Connection</button>
      </div>
    </div>
  );
}

export default App;
