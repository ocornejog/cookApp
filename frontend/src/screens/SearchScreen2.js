import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
//import { CheckBoxComp } from '../components/CheckBox';

import C from '../constants/colors';
import { APIuri } from '../constants/Api';
import { useNavigate } from 'react-router-dom';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import RecipeCard from '../components/recipeCard';

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function SearchScreen2() {
    // put here your constants

    const data = [
        { id: 1, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: false },
        { id: 2, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: true },  
        { id: 3, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: false },
        { id: 4, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: true },
        { id: 5, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: false },
        { id: 6, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: false },
        { id: 7, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: true },
        { id: 8, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: true },
        { id: 9, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: false },
        { id: 10, title: "Coquiles Saint-jacques", description: `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche. Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`, favorite: false },
    ];

    const navigate = useNavigate();

    //const auth_context = useContext(AuthContext); Constant to be used later

    // put here your states

    const [recipesData, setRecipesData] = useState([]);
    

    // put here your functions and handlers

    const onClickCard = async(e) => {
        console.log('Trying to do something after clicking a card with id: ', e);
        navigate('/SearchScreen3');
    };

    const onClickFavorite = async(e) => {
        console.log('Clicked favorite button for card with id: ', e);
        setRecipesData(prevItems => (
            prevItems.map(item => {
              if (item.id === e) {
                return { ...item, favorite: !item.favorite };
              }
              return item;
            })
        ));
    };

    //put here your permanent operations

    useEffect(() => {
        setRecipesData(data);
    }, []);

    useEffect(() => {
        console.log(`My current vector data is: `, recipesData);
    }, [recipesData]);

    //---------------------------------------------------------
    // Render your screen here
    return (
    <div className="screen-view-1" style={{ backgroundColor: C.white }}>
        <div
            className="screen-view-1"
            style={{ width: "95%", backgroundColor: C.white }}
        >
            {/* put your content here */}


            <div className='montserrat_700' style={{fontSize: '11px', color: C.grey, textAlign: 'left', width: '100%'}}>
                {`Chercher > Résultats de votre recherche`}
            </div>
            <div className='montserrat_700' style={{fontSize: '20px', color: C.green, textAlign: 'center', width: '100%'}}>
                {`Résultats de votre recherche`}
            </div>
            {(recipesData.length !== 0)?
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', padding: '10px', 
            marginTop: '16px', marginBottom: '16px' }}>
            {recipesData.map((item, index) => (
                <div key={index}>
                    <RecipeCard title={item.title} description={item.description} favorite={item.favorite}
                    onClick={() => onClickCard(item.id)} 
                    onClickFavorite={() => onClickFavorite(item.id)}/>
                </div>
            ))}
            </div>
            :
            <div className='montserrat_700' style={{ color: C.greenLight, fontSize: '20px', textAlign: 'center', width: '100%',
            marginTop: '56px', marginBottom: '16px' }}>
                {`Aucun résultat n'a été trouvé, essayez d'autres critères de recherche`}
            </div>  
            }


        </div>
    </div>
    );
}

export default SearchScreen2;

//Do not put styles in screens, use or put your new styles in ./src/index.css
