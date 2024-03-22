import * as React from 'react';
import { useEffect, useState, useContext } from 'react';

import C from '../constants/colors';
import { APIuri } from '../constants/Api';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import PreparationSteps from '../components/PreparationSteps';
import IngredientsList from '../components/IngredientsList';
import { CommentCard1 } from '../components/CommentCards';
import CommentCard2 from '../components/CommentCard2';

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function SearchScreen3() {

    // put here your constants
    const stepList1 = [
        'Préparez un court-bouillon avec 2 verres d’eau, le bouquet garni, l’oignon émincé, du gros sel et du poivre. Ajoutez le vin et faites pocher les noix et le corail de Saint-Jacques pendant 3 minutes.',
        'Égouttez-les et réservez-les. Laissez réduire le court-bouillon pendant que vous émincez les champignons. Faites-les sauter doucement dans 30 g de beurre.',
        'Ajoutez le corail et les noix aux champignons, faites dorer quelques instants, salez, poivrez, couvrez et gardez au chaud.',
        'Préparez une sauce veloutée : faites chauffer 50 g de beurre, ajoutez la farine, mélangez et mouillez avec le court-bouillon filtré. Laissez mijoter tout en tournant jusqu’à obtenir une sauce onctueuse.',
        'Battez le jaune d’œuf avec la crème fraîche, puis ajoutez cette liaison à la sauce veloutée (hors du feu pour éviter que le jaune d’œuf ne cuise).',
        'Garnissez les coquilles avec les noix, le corail et les champignons.',
        'Nappez de velouté, saupoudrez d’un peu de chapelure et arrosez avec le reste du beurre fondu.',
        'Mettez à gratiner au four pendant environ 10 minutes à 220°C (thermostat 7-8).'
    ];

    const ingredientsList1 = ['8 coquilles Saint-Jacques', '125 g de champignons de Paris', '1 oignon', '1 verre de vin blanc sec', 
    '1 petit pot de crème fraîche (20 cl)', '150 g de beurre', '1 cuillère à soupe de farine', 'Sel et poivre', 'Chapelure'];

    const image = process.env.PUBLIC_URL + "/Coquille.png";

    const data = [
        { id: 1, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 2, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },  
        { id: 3, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 4, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 5, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 6, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 7, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 8, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 9, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
        { id: 10, name: "Thomas Joly", date: new Date(), comment: "Test comment", starRating: 3 },
    ];

    //const auth_context = useContext(AuthContext); Constant to be used later

    // put here your states

    const [comment, setComment] = useState("");
    const [starRaiting, setStarRaiting] = useState(0);
    const [title, setTitle] = useState();
    const [stepList, setStepList] = useState([]);
    const [ingredientsList, setIngredientsList] = useState([]);
    const [commentsData, setCommentsData] = useState([]);


    // put here your functions and handlers

    const onSubmitComment = async(myComment, myStarRaiting) => {
        setComment(myComment);
        setStarRaiting(myStarRaiting);
    };

    //put here your permanent operations

    useEffect(() => {
        setTitle("Les Coquilles Saint Jacques gratinés");
        setStepList(stepList1);
        setIngredientsList(ingredientsList1);
        setCommentsData(data);
    }, []);

    useEffect(() => {
        console.log('My creative comment is:', comment, 'and my raiting of this dish is:', starRaiting);
    }, [comment, starRaiting]);

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
                {`Chercher > Résultats de votre recherche > Les Coquilles Saint Jaques gratinés`}
            </div>
            <div className='montserrat_700' style={{fontSize: '28px', color: C.black, textAlign: 'center', 
            width: '100%', textDecoration:'underline', marginTop: '24px'}}>
                {`${title}`}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '49% 2% 49%', width: '100%', marginTop: '24px' }}>
                <div style={{ gridColumn: '1 / 2', display: 'flex', alignItems: 'flex-start', marginTop: '24px', paddingRight: '32px' }}>
                    <PreparationSteps stepList={stepList} />
                </div>
                <div style={{ gridColumn: '2 / 3', backgroundColor: C.brown, height: '90%' }}>
                </div>
                <div style={{ gridColumn: '3 / 4', display: 'flex', alignItems: 'flex-start', marginTop: '24px', paddingLeft: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                            <div style={{ width: '50%' }}>
                                <IngredientsList ingredientsList={ingredientsList} />
                            </div>
                            <div style={{ width: '50%', marginLeft: '8px', alignSelf: 'center' }}>
                                <img style={{ width: '90%', height: 'auto', objectFit: 'cover' }} src={image} alt={title} />
                            </div>
                        </div>
                        <div style={{ width: '50%', alignSelf: 'center', marginTop: '16px' }}>
                            <CommentCard1 
                            onSubmit={(comment, starRaiting) => onSubmitComment(comment, starRaiting)}/>
                        </div>
                        <div className='montserrat_700' style={{fontSize: '20px', color: C.green, textAlign: 'left', 
                        marginTop: '16px', width: '100%'}}>
                            {`Commentaires`}
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', 
                        marginTop: '16px', marginBottom: '16px', width: '100%' }}>
                        {commentsData.map((item, index) => (
                            <div key={index} style={{ width: '311px' }}>
                                <CommentCard2 name={item.name} date={item.date} comment={item.comment} starRating={item.starRaiting}/>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>   
            

        </div>
    </div>
    );
}

export default SearchScreen3;

//Do not put styles in screens, use or put your new styles in ./src/index.css
