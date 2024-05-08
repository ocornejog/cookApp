import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
//import { CheckBoxComp } from '../components/CheckBox';

import C from '../constants/colors';
import API from '../constants/Api';
import {Provider} from 'react-redux';
import {store} from '../constants/searchConfig/store';
import SearchScreen1 from "./SearchScreen1";
import SearchScreen2 from "./SearchScreen2";
import SearchScreen3 from "./SearchScreen3";
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function Search() {
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
      <Provider store={store}> 
        {/*<Navigation/>*/}
        <Routes>
          <Route path="/search/*" element={<SearchLayout />} />
        </Routes>
      </Provider>
    );
}

function SearchLayout() {
  return (
    <div>
      <Routes>
        <Route index element={<SearchScreen1 />} />
        <Route path="/SearchScreen2" element={<SearchScreen2 />} />
        <Route path="/SearchScreen3" element={<SearchScreen3 />} />
      </Routes>
    </div>
  );
}

export default Search;

//Do not put styles in screens, use or put your new styles in ./src/index.css