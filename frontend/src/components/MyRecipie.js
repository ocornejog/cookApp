import React, { useState } from 'react';
import C from '../constants/colors'
import UserCard from './UserCard';
import ButtonComponent from './ButtonComponent';
import { IoTrashOutline } from "react-icons/io5";
import ConfirmationModal from './ConfirmationModal';

const MyRecipie = ({title, description, photo}) => {
    const [visible, setVisible] = useState(false); 
    return(
        <div>
            <ConfirmationModal message={"Voulez vous supprimer la recette définitivement ?" 
        }   visible={visible} textButton1={"NON"} textButton2={"OUI"} 
            onClickButton1={() => {console.log("suppression annulée");{setVisible(false)}}} 
            onClickButton2={() => {console.log("supression confirmée"); {setVisible(false)}}}/>
            <div style={{background:C.greenLighter, padding:'40px', borderRadius:'15px 15px 15px 15px'
                ,display:'flex', flexWrap:'wrap', maxWidth:'100%', gap:'1rem', margin: '2rem auto'}}>
                <div style={{textAlign:'left',fontSize: '20px', fontFamily:"Montserrat", 
                    fontWeight:'850', marginTop:'-10px'}}>
                        {title}
                </div>
                <img alt="" src={photo} style={{height:'116px',textAlign:'left', 
                 marginTop:'26px', marginLeft:'-150px'}}/>
                <div style={{flex:1,textAlign:'left',fontSize:'20px', fontFamily:'Montserrat', fontWeight:'300'
            , width:'80%', marginTop:'26px'}}>
                    <div style={{textDecoration:'underline'}}>
                        Description de la recette:
                    </div>
                    {description}
                </div>
                 <div style={{flex:1, flexWrap:'wrap', maxWidth:'22%', flexDirection:'column'}}>
                    <div style={{flex:1,fontSize:'61px', textAlign:'center'}}>
                        <IoTrashOutline onClick={() => {console.log("poubelle cliquée");{setVisible(true)}}}/>
                    </div>
                    <div style={{flex:1}}>
                        <ButtonComponent type='secondary' text={'Modifier'} onClick={() => console.log('Pressed modify button')}/>
                    </div>
                 </div>
                
            </div>
        </div>
    );
};

export default MyRecipie;