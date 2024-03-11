/*import React from 'react';
import './PreparationStepsList.css';

const PreparationStepsList = ({ stepList }) => {
  return (
    <div className="list-container">
      <h2 className="steps-title">Préparation</h2>
      <ol className="steps-list">
        {stepList.map((step, index) => (
          <li key={index} className="step-item">
            <div className="step-title">
              <strong>Etape {index + 1} :</strong>
            </div>
            <div className="step-description">{step}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PreparationStepsList;

import IngredientList from './1st_Component';
import React from 'react';
import './IngredientList.css'; // Assurez-vous d'ajuster le chemin du fichier
import './App.css';

function App() {
  const ingredientsList = [
    '8 coquilles Saint-Jacques',
    '125 g de champignons de Paris',
    '1 oignon',
    '1 verre de vin blanc sec',
    '1 petit pot de crème fraîche (20 cl)',
    '150 g de beurre',
    '1 cuillère à soupe de farine',
    'Sel et poivre',
    'Chapelure'
  ];

  return (
    <div className="App">
      <IngredientList ingredientsList={ingredientsList} />
    </div>
  );
}

export default App; 


import React from 'react';
import PreparationStepsList from './PreparationStepsList'; // Assurez-vous d'ajuster le chemin du fichier
import './App.css';

function App() {
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

  return (
    <div className="App">
      <PreparationStepsList stepList={stepList} />
    </div>
  );
}

export default App;


*/

// App.js
import React from 'react';
import './photo.css'; // Importez également photo.css ici
import Photo from './Photo';


function App() {
    // Votre code pour les fonctions et le carré gris ici

    return (
        <div className="App">
          <Photo/>
        </div>
    );
}

export default App;

