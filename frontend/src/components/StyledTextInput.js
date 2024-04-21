import React from 'react';

export const StyledTextInput = (props) => { 

    /*  props
        input
        passwordInput : boolean
        placeholder : text
        output
        text: text
    */

    let t = "";
    if (props.fill !== undefined) {
      t = props.fill;
    } 

    const [outputText, setOutputText] = React.useState(t);
    const [displayText, setDisplayText] = React.useState(false);

    React.useEffect(() => {
        props.text(outputText);
    }, [outputText])
    
    return (
    (props.passwordInput === false)?
        <input className="montserrat_400" placeholder={props.placeholder} 
        autoComplete="on" autoCorrect="on" 
        autoCapitalize="none" dir="auto" rows="1" 
        spellCheck="true" type="email" value={outputText} 
        onChange={(e) => setOutputText(e.target.value)} 
        style={{ color: 'rgb(0, 0, 0)', width: '100%', height: '46px', 
        borderWidth: '1px', borderColor: '#A0A0A0', borderStyle: 'solid',
        paddingLeft: '8px', borderRadius: '5px', fontSize: '14px' }} />
        :
        <div style={{ position: 'relative', width: '100%' }}>
            <input className="montserrat_400" placeholder={props.placeholder} autoComplete="on" autoCorrect="on" 
            autoCapitalize="none" dir="auto" rows="1" spellCheck="true" 
            type={displayText ? 'text' : 'password'} value={outputText} 
            onChange={(e) => setOutputText(e.target.value)} 
            style={{ color: 'rgb(0, 0, 0)', width: '100%', height: '46px',
            borderWidth: '1px', borderColor: '#A0A0A0', borderStyle: 'solid',
            paddingLeft: '8px', borderRadius: '5px', fontSize: '14px' }} />
            <ion-icon
                name={displayText ? 'eye-off-outline' : 'eye-outline'}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '4px',
                    transform: 'translateY(-70%)',
                    cursor: 'pointer',
                    color: '#337D74',
                    fontSize: '30px',
                }}
                onClick={() => setDisplayText(!displayText)}
            ></ion-icon>
        </div>
    );
};
//-------------------------------------------------------------------
// Default props for the component
StyledTextInput.defaultProps = {
    passwordInput : false,
    placeholder : "Placeholder test",
    text: (arg0) => {},  
};