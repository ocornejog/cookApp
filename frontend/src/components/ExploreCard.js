import React from 'react';
import "../styles/ExploreCard.css";
import { StyledTextInput } from './StyledTextInput';
import ButtonComponent from './ButtonComponent';
import DropDownList from './DropDownList';
import { CheckBox } from './CheckBox';
import L from '../constants/listLabels';
import I from '../constants/listImages';
import C from '../constants/colors';

export const ExploreCard = (props) => {

    //-----------------------------------------------------------
    // Hooks for the attributes
    const [searchText, setSearchText] = React.useState('');
    const [cuisine, setCuisine] = React.useState(0);
    const [complementCuisine, setComplementCuisine] = React.useState('');
    const [dish, setDish] = React.useState(0);
    const [diet, setDiet] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [level, setLevel] = React.useState(0);
    const [popularity, setPopularity] = React.useState(0);
    const [nutritionalValue, setNutritionalValue] = React.useState([]);
    const [ingredients, setIngredients] = React.useState('');
    const [amountPeople, setAmountPeople] = React.useState('');

    // Function to handle the operations and output props
    const handleClickLupe = () => {
        if(searchText.length !== 0) {
            props.onClickLupe(searchText);
        } else {
            alert('Veuillez entrer une valeur de recherche');
        }
    };
    
    const submitAnnotation = () => {
        const myAnnotation = {
            cuisine,
            cuisineComplement: complementCuisine,
            dish,
            diet,
            preparationTime: time,
            culinaryProficiency: level,
            popularity,
            ingredients,
            nutritionalValue,
            amountPeople
        };
        props.annotation(myAnnotation);
    };

    React.useEffect(() => {
        setComplementCuisine('');
    }, [cuisine]);

    React.useEffect(() => {
        submitAnnotation();
    }, [cuisine, complementCuisine, dish, diet, time, level, popularity, nutritionalValue, ingredients, amountPeople])

    //---------------------------------------------------
    // Rendering the component ...
    return (
        <div className='explore-card'>
            <div style={{ position: 'relative', width: '311px' }}>
                <StyledTextInput passwordInput={false} placeholder={props.placeholder} text={e => setSearchText(e)}/>
                <ion-icon
                    name={'search-outline'}
                    style={{ position: 'absolute', top: '40%', right: '4px', transform: 'translateY(-50%)',
                    cursor: 'pointer', color: '#337D74', fontSize: '24px' }}
                    onClick={() => handleClickLupe()}
                ></ion-icon>
            </div>
            {(props.type === 'basic')?
            <div style={{marginTop: '4px'}}>
                <ButtonComponent type={'tertiary'} text={props.buttonText} onClick={() => props.onClickButton()}/>
            </div>
            :
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <div className="flex-container">
                    <div className="item">
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                            <DropDownList optionsList={L.cuisine} optionsImages={I.cuisine} label={'Type de cuisine'} 
                            onSelect={(value, index) => setCuisine(index)}/>
                            {(cuisine === 8) &&
                            <div style={{width: '100%', marginTop: '24px'}}>
                                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                                    <div className="montserrat_400" style={{ fontSize: '16px', color: C.black, textAlign: 'left',
                                    textAlignVertical: 'center', justifyContent: 'center' }}>
                                        {"Préciser le type de cuisine"}
                                    </div>
                                    <div style={{display: 'flex', width: '100%', marginTop: '8px'}}>
                                        <textarea 
                                        className="autoHeightTextarea2" 
                                        value={complementCuisine} 
                                        placeholder='ex: Colombien, Thaï, ...'
                                        onChange={(e) => setComplementCuisine(e.target.value)} 
                                        />
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                    <div className="item">
                        <DropDownList optionsList={L.dish} optionsImages={I.dish} label={'Type de plat'} 
                        onSelect={(value, index) => setDish(index)}/>
                    </div>
                    <div className="item">
                        <DropDownList optionsList={L.diets} optionsImages={I.diets} label={'Régimes spécifiques'} 
                        onSelect={(value, index) => setDiet(index)}/>
                    </div>
                    <div className="item">
                        <DropDownList optionsList={L.time} optionsImages={I.time} label={'Temps de préparation'} 
                        onSelect={(value, index) => setTime(index)}/>
                    </div>
                    <div className="item">
                        <DropDownList optionsList={L.level} optionsImages={I.level} label={'Niveau de compétence culinaire'} 
                        onSelect={(value, index) => setLevel(index)}/>
                    </div>
                    <div className="item">
                        <DropDownList optionsList={L.popularity} optionsImages={I.popularity} 
                        label={'Popularité et avis des utilisateurs'} onSelect={(value, index) => setPopularity(index)}/>
                    </div>
                    <div className="item">
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                            <div className="montserrat_700" style={{ fontSize: '14px', color: C.green, textAlign: 'left',
                            textAlignVertical: 'center', justifyContent: 'center' }}>
                                {"Ingrédients disponibles"}
                            </div>
                            <div style={{width: '100%', marginTop: '16px'}}>
                                <textarea 
                                className="autoHeightTextarea" 
                                value={ingredients} 
                                placeholder='Comment'
                                onChange={(e) => setIngredients(e.target.value)} 
                                />
                            </div>
                            <div className="montserrat_700" style={{ fontSize: '14px', color: C.green, textAlign: 'left',
                            textAlignVertical: 'center', justifyContent: 'center', marginTop: '16px', marginBottom: '16px' }}>
                                {"Quantité de personnes"}
                            </div>
                            <StyledTextInput passwordInput={false} placeholder={""} text={e => setAmountPeople(e)}/>
                        </div>
                    </div>
                    <div className="item">
                        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                            <div className="montserrat_700" style={{ fontSize: '14px', color: C.green, textAlign: 'left',
                            textAlignVertical: 'center', justifyContent: 'center' }}>
                                {"Valeur nutritionnelle"}
                            </div>
                            <div style={{width: '100%', marginTop: '16px'}}>
                                <CheckBox listLabels={L.nutritional_value} onSelect={(e) => setNutritionalValue(e)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: '100%', marginTop: '4px'}}>
                    <ButtonComponent type={'primary'} text={props.buttonText} onClick={() => props.onClickButton()}/>
                </div>
            </div>
            
            }

        </div>
    );
};
//-------------------------------------------------------------------
// Default props for the component
ExploreCard.defaultProps = {
    placeholder: 'Rechercher un plat spécifique',
    buttonText: 'Recherche avancée',
    type: 'basic',
    onClickLupe: (arg0) => {}, 
    onClickButton: () => {},
    annotation: (arg0) => {},
};