import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export const TextInputComp = (props) => {    
    if (props.pass == false) {
        return (
            <SafeAreaView>
            <input 
                id = "usermail"
                type = "text"
                placeholder={props.placeholder}
                />
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView>
            <input
                id = "userpass"
                type = "password"
                placeholder={props.placeholder}
                />
            </SafeAreaView>
        );
    }
  };
  
export const getCred = (e) => {
    e.preventDefault();
    var elmail = document.getElementById("usermail");
    var elpass = document.getElementById("userpass");
    var mail = elmail.value;
    var pass = elpass.value;
    return mail,pass
}
