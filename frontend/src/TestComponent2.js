import React from 'react';

export const TestComponent2 = (props) => {
    const [value, setValue] = React.useState('');

    const onChangeValue = (e) => {
        setValue(e.target.value);
        props.onChange(e.target.value);
    };

    return(
    <div>
        <h1>{props.name}</h1>
        <input value={value} onChange={e => onChangeValue(e)}/>
    </div>
    )
};