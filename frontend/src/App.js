import logo from './logo.svg';
import './App.css';
import { TextInputComp, getCred } from './TextInput';
import { CheckBoxComp } from './CheckBox';

function App() {
  return (  
    <div className="App">
      <div className = "userinput">
        <TextInputComp placeholder="type your email here" pass={false}/>
        <TextInputComp placeholder="type your password here" pass={true}/>
        <button onClick={getCred}>Connection</button>
      </div>
      <div className = "checkbox">
        <CheckBoxComp labels={["check1","check2"]}/>
      </div>
    </div>
  );
}

export default App;
