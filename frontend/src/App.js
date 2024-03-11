//import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import "./App.css";
//import {TestComponent} from './TestComponent';
import { TestComponent2 } from "./TestComponent2";
import ListItem from "./components/ListItem";
import DropDownList from "./components/DropDownList";
import Tabs from "./components/Tabs";
import ScreenTemplate from "./screens/ScreenTemplate";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("Hedi");
  }, []);

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <div className="App">
      {/* <TestComponent2
        name={"Hedi"}
        onChange={(e) => console.log("My name is", e)}
      /> */}
      <div
        style={{
          width: "50%",
          marginTop: 16,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <DropDownList onSelect={(t, i) => console.log(t, i)} /> */}
      </div>
      <Tabs>
        <div label="Chercher">
          Welcome to the tab, <em>Chercher</em>!
          <ScreenTemplate />
        </div>
        <div label="Recettes">
          After a while, <em>Recettes</em>!
        </div>
        <div label="Profil" icon="person-circle">
          Nothing to see here, this tab is <em>Profil</em>!
        </div>
      </Tabs>
    </div>
  );
}

export default App;
