import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
//import { CheckBoxComp } from '../components/CheckBox';

import C from '../constants/colors';
import L from '../constants/listLabels';
import { APIuri } from '../constants/Api';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import { ExploreCard } from '../components/ExploreCard';

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function SearchScreen1() {
    // put here your constants

    

    //const auth_context = useContext(AuthContext); Constant to be used later

    // put here your states

    const [advancedSearch, setAdvancedSearch] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [annotation, setAnnotation] = useState({});

    

    // put here your functions and handlers

    const onSearchByText = async(e) => {
        console.log(`I want to search`, e);
        setSearchText(e)
    };

    const onSubmitForm = async() => {
        console.log('Submitting form');
    };

    //put here your permanent operations

    const handleAnnotation = async(e) => {
        console.log(`Received annotation: `, e);
        setAnnotation(e);
    };

    //---------------------------------------------------------
    // Render your screen here
    return (
        <div className="screen-view-1" style={{ backgroundColor: C.white }}>
        <div
            className="screen-view-1"
            style={{ width: "95%", backgroundColor: C.white }}
        >
            {/* put your content here */}


            <div className="backgroundTemplateImage">
                <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center',  
                marginTop: (advancedSearch)? '168px' : '440px'}}>
                    <div className="montserrat_700" style={{ color: C.green, fontSize: '20px', width: '50%', textAlign: 'center',
                    backgroundColor: C.white, padding: '20px', borderRadius: '10px' }}>
                        {`Qu’est-ce que je veux cuisiner aujourd’hui ?`}
                    </div>
                    <div style={{width: '75%', alignSelf: 'center', marginBottom: '20px'}}>
                        <ExploreCard placeholder={'Rechercher un plat spécifique'} 
                        buttonText={(advancedSearch)? 'Chercher' : 'Recherche avancée'} 
                        type={advancedSearch? 'advanced' : 'basic'}
                        onClickButton={() =>{ 
                            if(advancedSearch){
                                onSubmitForm();
                            } else {
                                setAdvancedSearch(true);
                            }
                        }}
                        onClickLupe={(e) => onSearchByText(e)}
                        annotation={(e) => handleAnnotation(e)}/>
                    </div>
                </div>
            </div>      
            

        </div>
        </div>
    );
}

export default SearchScreen1;

//Do not put styles in screens, use or put your new styles in ./src/index.css
