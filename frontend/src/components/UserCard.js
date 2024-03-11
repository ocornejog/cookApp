import React from "react";
import C from '../constants/colors';
import ButtonComponent from "../Components.js/ButtonComponent";

//% que sur width
const UserCard = (props) => {
    return (
        <div style={{background:C.greenLight,width:'100%',height:'280px',display:'flex'}}>
            <img alt="" src={props.imgsrc} style={{padding:'0px',height:'150px',marginTop:'50px',
            marginLeft:'30px'}}/>
            <div style={{textAlign:'left',marginLeft:'100px',marginTop:'50px',
            fontSize:'120px',fontFamily:"Montserrat",
            fontWeight:'330',textDecoration:'underline',textDecorationThickness:'1.5px',
            textUnderlineOffset:'12px',flex:1}}>
                {props.name}
            </div>
            <div style={{fontSize:'65px',marginRight:'10px',marginTop:'50px'}}>
                <ButtonComponent type="tertiary" text="paramètres du profil" onClick={() => {props.onClick()}}/>
            </div>
        </div>
    )
}

export default UserCard;

//-------------------------------------------------------------------
// Default props for the component
UserCard.defaultProps = {
    name: 'Oscar Cornejo',
    imgsrc : "https://phlearn.com/wp-content/uploads/2021/07/Fill-Text-with-Image-Tutorial-Image.jpg?w=1920&quality=99&strip=all",
    onClick: () => {console.log('paramètres du profil')},
};