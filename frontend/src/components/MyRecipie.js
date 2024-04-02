import React, { useState } from 'react';
import C from '../constants/colors'
import UserCard from './UserCard';
import ButtonComponent from './ButtonComponent';
import { IoTrashOutline } from "react-icons/io5";
import ConfirmationModal from './ConfirmationModal';
import { useNavigate } from "react-router-dom";
import "../styles/ButtonComponent.css";

const MyRecipie = ({title, description, photo, onClick}) => {
    const [visible, setVisible] = useState(false); 

    return(
        <div style={{width: '95%'}}>
            <ConfirmationModal message={"Voulez vous supprimer la recette définitivement ?"}   
            visible={visible} textButton1={"NON"} textButton2={"OUI"} 
            onClickButton1={() => {console.log("suppression annulée");{setVisible(false)}}} 
            onClickButton2={() => {console.log("supression confirmée"); {setVisible(false)}}}/>
            <div style={{ background: C.greenLighter, borderRadius:'15px 15px 15px 15px',
            display:'flex', flexDirection: 'column', flexWrap: 'wrap', width: '100%', margin: '2rem auto', padding: '32px'}}>
                <div style={{textAlign:'left', fontSize: '20px', fontFamily:"Montserrat", 
                    fontWeight:'850'}}>
                        {title}
                </div>
                <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                    <img alt="" src={photo} style={{ height: '116px', textAlign:'left', marginTop:'26px' }}/>
                    <div style={{textAlign:'left',fontSize:'20px', fontFamily:'Montserrat', fontWeight:'400', 
                    flex: 1, marginTop:'26px', marginLeft: '16px'}}>
                        <div style={{textDecoration:'underline'}}>
                            Description de la recette:
                        </div>
                        <div style={{textAlign: 'justify', marginTop: '8px'}}>
                            {description}
                        </div>
                    </div>
                    <div style={{width: '30%', marginLeft: '16px', flexDirection:'column', alignItems: 'center', display: 'flex'}}>
                        <div style={{fontSize:'61px', cursor: 'pointer', width: '61px'}}>
                            <IoTrashOutline onClick={() => {console.log("poubelle cliquée");{setVisible(true)}}}/>
                        </div>
                        <div style={{width: '100%'}}>
                            <ButtonComponent type='secondary' text={'Modifier'} onClick={onClick}/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default MyRecipie;