import C from '../constants/colors';
import { APIuri } from '../constants/Api';
import ProfileScreen1 from './ProfileScreen1';
import ProfileScreen2 from './ProfileScreen2';
import ProfileScreen3 from './ProfileScreen3';
import ProfileScreen4 from './ProfileScreen4';
//import { AuthContext } from '../constants/Context'; Context to be created
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';

/*
Import your components and constants here
*/



function Profile( {recettes} ) {
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
                <Route index element={<ProfileScreen1 recettes={recettes}/>} />
                <Route path="/ProfileScreen2" element={<ProfileScreen2/>} />
                <Route path="/ProfileScreen3" element={<ProfileScreen3/>} />
                <Route path="/ProfileScreen4" element={<ProfileScreen4/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Profile;
