import React, {useState} from 'react';
import C from '../constants/colors';
import Img from '../constants/dropDownListImages';

const ListItem = (props) => {
//---------------------------------------------------
    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };
    
    const handleMouseLeave = () => {
        setHover(false);
    };
// Rendering the component ...
    return (
        <div style={{width: '100%', height: 40, display: 'flex', flexDirection: 'row', backgroundColor: hover? C.greenLight: C.white, 
        alignItems: 'center'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div style={{display: 'flex'}}>
                {props.label !== '' ? 
                <img alt="" draggable="false" src={Img[props.image]} style={{ marginLeft: 8, marginRight: 8, height: 32, width: 32, 
                resizeMode: 'contain', borderWidth: 1, borderRadius: 5, borderColor: C.grey}}
                /> 
                :
                <div></div>
                }
            </div>
            <div style={{ marginRight: 8, alignItems: 'flex-start', display: 'flex', flex: 1 }}>
                <div className="montserrat_400" style={{ fontSize: '14px', color: C.black, textAlign: 'left',
                textAlignVertical: 'center', justifyContent: 'center' }}>
                    {props.label}
                </div>
            </div>
        </div>
    );
}

export default ListItem;
//-------------------------------------------------------------------
// Default props for the component
ListItem.defaultProps = {
    image: 'p1',
    label: 'Entrée'
};