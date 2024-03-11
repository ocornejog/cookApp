import React from 'react';
import '../styles/PreparationSteps.css';

const PreparationSteps = ({ stepList }) => {
  return (
    <div style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
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

export default PreparationSteps;

