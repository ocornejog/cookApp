import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
//import { CheckBoxComp } from '../components/CheckBox';

import C from '../constants/colors';
import API from '../constants/Api';
import ResetPassword from './ResetPassword';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SecretCode from './SecretCode';
import ForgotPassword from './ForgotPassword';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function LogIn() {
    // put here your constants

    

    // put here your states

    

    // put here your functions and handlers

    function Navigation() {
        const navigate = useNavigate();
        const location = useLocation();
    
        const isHomePage = (location.pathname === '/');
      
        return (
          <div style={{ position: 'fixed', top: '0px', left: '0px' }}>
            {!isHomePage &&
            <div style={{ height: '36px', width: '36px', cursor: 'pointer' }} 
            onClick={() => navigate(-1)}>
              <ion-icon name={'chevron-back-outline'} style={{cursor: 'pointer', color: C.green, fontSize: '30px'}}>
              </ion-icon>
            </div>
            }
          </div>
        );
    };

    //put here your permanent operations

    

    //---------------------------------------------------------
    // Render your screen here
    return (
    <BrowserRouter>
        {/*<Navigation/>*/}
        <Routes>
            <Route index path="/" element={<SignIn/>} />
            <Route path="/SignUp" element={<SignUp/>} />
            <Route path="/SecretCode" element={<SecretCode/>} />
            <Route path="/ResetPassword" element={<ResetPassword/>} />
            <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        </Routes>
    </BrowserRouter>
    );
}

export default LogIn;

//Do not put styles in screens, use or put your new styles in ./src/index.css
