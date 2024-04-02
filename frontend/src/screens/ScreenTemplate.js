import * as React from 'react';
import { useEffect, useState, useContext } from 'react';
//import { CheckBoxComp } from '../components/CheckBox';

import C from '../constants/colors';
import L from '../constants/listLabels';
import API from '../constants/Api';
//import { AuthContext } from '../constants/Context'; Context to be created

/*
Import your components and constants here
*/
import DropDownList from '../components/DropDownList';
import { StyledTextInput } from '../components/StyledTextInput';
import { CheckBox } from '../components/CheckBox';
import { ExploreCard } from '../components/ExploreCard';
import ButtonComponent from '../components/ButtonComponent';
import RecipeCard from '../components/recipeCard';
import PreparationSteps from '../components/PreparationSteps';
import IngredientsList from '../components/IngredientsList';
import PhotoSelection from '../components/PhotoSelection';
import CommentCard2 from '../components/CommentCard2';
import { CommentCard1 } from '../components/CommentCards';
import ConfirmationModal from '../components/ConfirmationModal';
import UserCard from '../components/UserCard';
import Delete from '../components/delete';

/*
Import your used redux here
*/

//---------------------------------------------------------------------

function ScreenTemplate() {
  // put here your constants

  const testConstant = "I am a constant";
  const stepList = [
    'Préparez un court-bouillon avec 2 verres d’eau, le bouquet garni, l’oignon émincé, du gros sel et du poivre. Ajoutez le vin et faites pocher les noix et le corail de Saint-Jacques pendant 3 minutes.',
    'Égouttez-les et réservez-les. Laissez réduire le court-bouillon pendant que vous émincez les champignons. Faites-les sauter doucement dans 30 g de beurre.',
    'Ajoutez le corail et les noix aux champignons, faites dorer quelques instants, salez, poivrez, couvrez et gardez au chaud.',
    'Préparez une sauce veloutée : faites chauffer 50 g de beurre, ajoutez la farine, mélangez et mouillez avec le court-bouillon filtré. Laissez mijoter tout en tournant jusqu’à obtenir une sauce onctueuse.',
    'Battez le jaune d’œuf avec la crème fraîche, puis ajoutez cette liaison à la sauce veloutée (hors du feu pour éviter que le jaune d’œuf ne cuise).',
    'Garnissez les coquilles avec les noix, le corail et les champignons.',
    'Nappez de velouté, saupoudrez d’un peu de chapelure et arrosez avec le reste du beurre fondu.',
    'Mettez à gratiner au four pendant environ 10 minutes à 220°C (thermostat 7-8).'
  ];
  const ingredientsList = ['8 coquilles Saint-Jacques', '125 g de champignons de Paris', '1 oignon', '1 verre de vin blanc sec', 
  '1 petit pot de crème fraîche (20 cl)', '150 g de beurre', '1 cuillère à soupe de farine', 'Sel et poivre', 'Chapelure'];

  //const auth_context = useContext(AuthContext); Constant to be used later

  // put here your states

  const [testState, setTestState] = useState("I am a state variable");
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const title = "Coquiles Saint-jacques";
  const description = `Ces délicieuses coquilles sont servies de nuit et sont préparées avec des champignons dans une sauce à base de crème fraîche.
   Le tout est ensuite gratiné au four pour obtenir une croûte raffinée et savoureuse, une entrée idéale et joliment épaisse!`;

  // put here your functions and handlers

  const testFunction = async () => {
    console.log(`My current state variable value is : ${testState}`);
  };

  //put here your permanent operations

  useEffect(() => {
    testFunction();
  }, [testState]);

  //---------------------------------------------------------
  // Render your screen here
  return (
    <div className="screen-view-1" style={{ backgroundColor: C.white }}>
      <div
        className="screen-view-1"
        style={{ width: "95%", backgroundColor: C.white }}
      >
        {/* put your content here */}

    


        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`ButtonComponent`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <ButtonComponent type={'primary'} text={'Primary button'} onClick={() => console.log('Pressed primary button')}/>
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <ButtonComponent type={'secondary'} text={'Secondary button'} onClick={() => console.log('Pressed secondary button')}/>
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <ButtonComponent type={'tertiary'} text={'Tertiary button'} onClick={() => console.log('Pressed tertiary button')}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`DropDownList`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <DropDownList/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`StyledTextInput`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <StyledTextInput placeholder={"My placeholder"} text={(e) => console.log(`My text is ${e}`)}/>
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <StyledTextInput passwordInput={true} placeholder={"My placeholder"} text={(e) => console.log(`My text is ${e}`)}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`RecipeCard`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <RecipeCard title={"Coquilles Saint-Jacques gratinées"} description={"Ces délicieuses coquilles sont garnies de noix et de corail de Saint-Jacques, sautées avec des champignons dans une sauce veloutée à base de crème fraîche. Le tout est ensuite gratiné au four jusqu'à obtenir une croûte dorée et savoureuse. Une entrée raffinée et joliment présentée !"}
          onClick={() => console.log('Recipe card has just been clicked!')} onClickFavorite={(e) => console.log('My favorite status is: ', e)}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`CheckBox`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <CheckBox onSelect={(e) => console.log(`My selected vector is`, e)}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`ExploreCard`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <ExploreCard placeholder={'Rechercher un plat spécifique'} 
          buttonText={(advancedSearch)? 'Chercher' : 'Recherche avancée'} 
          type={advancedSearch? 'advanced' : 'basic'}
          onClickButton={() =>{ 
            if(advancedSearch){
              console.log('Submitting form');
            } else {
              setAdvancedSearch(true);
            }
          }}
          onClickLupe={(e) => console.log(`I want to search`, e)}
          annotation={(e) => console.log(`Received annotation: `, e)}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`PreparationSteps`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <PreparationSteps stepList={stepList}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`IngredientsList`}
        </div>
        <div style={{width: '100%', marginBottom: '20px'}}>
          <IngredientsList ingredientsList={ingredientsList}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`PhotoSelection`}
        </div>
        <div style={{width: '50%', marginBottom: '20px'}}>
          <PhotoSelection text={'Choisir une photo'} onClick={() => console.log('Trying to upload a photo')}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`CommentCard1`}
        </div>
        <div style={{width: '30%', marginBottom: '20px'}}>
          <CommentCard1 onSubmit={(comment, starRaiting) => console.log('My comment values are: ', comment, starRaiting)}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`CommentCard2`}
        </div>
        <div style={{width: '30%', marginBottom: '20px'}}>
          <CommentCard2 name={"Thomas Joly"} date={new Date()} comment={"Test comment"} starRating={3}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`ConfirmationModal`}
        </div>
        <div style={{width: '30%', marginBottom: '20px'}}>
          <ConfirmationModal visible={false} onClickButton1={() => console.log('Pressed Non!')} 
          onClickButton2={() => console.log('Pressed Oui!')}/>
        </div>
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`UserCard`}
        </div>
        <div style={{width: '90%', marginBottom: '20px'}}>
          <UserCard/>
        </div>
        {/*
        <div className="montserrat_700" style={{ width: '100%', marginBottom: '8px', fontSize: '14px', 
        color: C.green, textAlign: 'left', textAlignVertical: 'center', justifyContent: 'center' }}>
          {`RecipeCard2`}
        </div>
        <div style={{width: '90%', marginBottom: '20px'}}>
          <Delete/>
        </div>
        */}

        
        

      </div>
    </div>
  );
}

export default ScreenTemplate;

//Do not put styles in screens, use or put your new styles in ./src/index.css
