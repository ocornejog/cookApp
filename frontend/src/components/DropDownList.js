import React, {useState, useEffect} from 'react';
import C from '../constants/colors';
import ListItem from "../components/ListItem";
import Img from '../constants/dropDownListImages';
import L from '../constants/listLabels';
import I from '../constants/listImages';

const DropDownList = (props) => {
    //-----------------------------------------------------------
    // Hooks for the attributes
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    //-----------------------------------------------------------
    const openDropDown = () => {
        setOpen(!open);
    };
    //Function to change the prop => onSelect
    const handleChange = (e, index) => {
        props.onSelect(e, index);
    };
    useEffect(() => {
        if(props.defaultValue !== null){
            setValue(props.defaultValue);
            props.onSelect(props.optionsList[props.defaultValue - 1], props.defaultValue);
        }
    }, [props.defaultValue]);
    //---------------------------------------------------
    // Rendering the component ...
    return (
        <div style={{width: '100%', flexDirection: 'column', display: 'flex'}}>
            {value !== null ? 
            <div style={{ alignItems: 'flex-start', display: 'flex', flex: 1, marginBottom: '8px' }}>
                <div className="montserrat_700" style={{ fontSize: '14px', color: C.green, textAlign: 'left',
                textAlignVertical: 'center', justifyContent: 'center' }}>
                    {props.label}
                </div>
            </div> 
            :
            <div></div>
            }
            <div className='grey_border' style={{ display: 'flex', alignItems: 'center', backgroundColor: C.white, 
            height: 40, borderRadius: 5, borderWidth: 1, borderColor: C.grey, shadowColor: '#00000033', shadowRadius: 10,
            width: '100%', borderBottomLeftRadius: open ? 0 : 5, borderBottomRightRadius: open ? 0 : 5, 
            flexDirection: 'row', cursor: 'pointer' }} onClick={() => openDropDown()}>

                <div style={{display: 'flex'}}>
                    {value !== null ? 
                    <img alt="" draggable="false" src={Img[props.optionsImages[value - 1]]} 
                    style={{ marginLeft: 8, height: 32, width: 32, 
                    resizeMode: 'contain', borderWidth: 1, borderRadius: 5, borderColor: C.grey}}
                    />
                    :
                    <div></div>
                    }
                </div>
                <div style={{ marginLeft: 8, marginRight: 8, alignItems: 'flex-start', display: 'flex', flex: 1 }}>
                    <div className="montserrat_400" style={{ fontSize: '14px', color: C.black, textAlign: 'left',
                    textAlignVertical: 'center', justifyContent: 'center' }}>
                        {value !== null ? props.optionsList[value - 1] : props.label}
                    </div>
                </div>
                {open ?
                <ion-icon name="chevron-up-outline" size={24} style={{color: C.green, marginRight: 8}} className="active"></ion-icon>
                :
                <ion-icon name="chevron-down-outline" size={24} style={{color: C.green, marginRight: 8}} className="active"></ion-icon>
                }
            </div>
            {(open) &&
            <div className="grey_border" style={{ elevation: 3, width: '100%', borderColor: C.grey, shadowColor: '#00000033', 
            shadowRadius: 10, borderBottomLeftRadius: 5, borderBottomRightRadius: 5, overflow: 'hidden' }}>
                {props.optionsList.map((data, index) => {
                    const settingvalue = () => {
                        setValue(index + 1);
                        openDropDown();
                        handleChange(data, index + 1);
                    };
                    return (
                    <div key={index} onClick={() => settingvalue()} style={{cursor: 'pointer'}}>
                        <ListItem label={data} image={props.optionsImages[index]}/>
                    </div>
                    )
                })}
            </div>
            }
        </div>
    );
}
export default DropDownList;
//-------------------------------------------------------------------
// Default props for the component
DropDownList.defaultProps = {
    optionsList: L.cuisine,
    optionsImages: I.cuisine,
    label: 'Type de cuisine',
    defaultValue: null, 
    onSelect: (arg0, arg1) => {},  
};