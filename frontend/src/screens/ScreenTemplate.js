import * as React from 'react';
import { useEffect, useState, useContext } from 'react';

import C from '../constants/colors';
import { APIuri } from '../constants/Api';
//import {AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function ScreenTemplate() {

  // put here your constants

  const testConstant = "I am a constant";
  //const auth_context = useContext(AuthContext); Constant to be used later

  // put here your states

  const [testState, setTestState] = useState("I am a state variable");

  // put here your functions and handlers

  const testFunction = async() => {
    console.log(`My current state variable value is : ${testState}`);
  };

  //put here your permanent operations

  useEffect(() => {
    testFunction();
  },[testState]);

  //---------------------------------------------------------
  // Render your screen here
  return (
    <div className='screen-view-1' style={{backgroundColor: C.white}}>
      <div className='screen-view-1' style={{ width: '95%', backgroundColor: C.white }}>
        {/* put your content here */}



      </div>
    </div>
  );
}

export default ScreenTemplate;

//Do not put styles in screens, use or put your new styles in ./src/index.css
