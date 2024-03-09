import React from 'react';
import L from "../constants/listLabels";

export const CheckBox = (props) => {

    const [checkedItems, setCheckedItems] = React.useState(new Array(props.listLabels.length).fill(false));

    const updateElement = (index, lastValue) => {
        setCheckedItems(prevArrayState => {
            const newArrayState = [...prevArrayState];
            newArrayState[index] = !lastValue;
            return newArrayState;
        });
    };

    React.useEffect(() => {
        props.onSelect(checkedItems);
    }, [checkedItems.toString()])

    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', alignSelf: 'center' }}>
           {props.listLabels.map((data, index) =>
                <div key={index} style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'row',
                alignItems: 'center', height: '30px', marginTop: (index !== 0)? '8px' : '0px' }}>
                    <div style={{ width: "30px", height: "30px", borderRadius: "5px", borderWidth: '1px', borderColor: '#A0A0A0', 
                    borderStyle: 'solid', alignItems: 'center', justifyContent: 'center' }}>
                        <ion-icon
                        name={'checkmark-outline'}
                        style={{
                            cursor: 'pointer',
                            color: (checkedItems[index]? '#337D74' : '#FFFFFF'),
                            fontSize: '30px',
                        }}
                        onClick={() => updateElement(index, checkedItems[index])}
                        ></ion-icon>
                    </div>
                    <div className="montserrat_400" style={{ fontSize: '14px', color: '#000000', marginLeft: '8px', 
                    textAlign: 'left', flex: 1, height: '30px', display: 'flex', alignItems: 'center' }}>
                        {data}
                    </div>
                </div>
            )}
        </div>
    );
};
//-------------------------------------------------------------------
// Default props for the component
CheckBox.defaultProps = {
    listLabels : L.popularity,
    onSelect: (arg0) => {},  
};