import React from 'react';

export const CheckBoxComp = (props) => {
    const [checkedItems, setCheckedItems] = React.useState(false);

    const handleChange = (event) => {
        setCheckedItems({
            ...checkedItems,    
            [event.target.name]: event.target.checked,});
      };
    console.log(checkedItems);
    return (
        <div>
            {props.labels.map((blaze, index) =>
                        <label key={index}>
                            <input type="checkbox" checked={false || checkedItems[blaze]} onChange={handleChange}/>
                            {blaze}
                        </label>
                    )}
        </div>
    );
}