import React from 'react';
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

